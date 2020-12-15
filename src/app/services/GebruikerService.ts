import {Observable, Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Gebruiker} from '../models/Gebruiker';
import {Router} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class GebruikerService {

  private url = 'http://localhost:9080/marktplaats_war_exploded/resources/gebruikers/';
  ingelogdeGebruiker = {} as Gebruiker;
  ingelogdeGebruikerNaam = new Subject<string>();
  message$ = new Subject<string>();

  constructor(
    private http: HttpClient,
    private router: Router) {
  }

  // tslint:disable-next-line:variable-name
  _gebruikersUpdated$ = new Subject<Gebruiker[]>();

  get gebruikersUpdated$(): Subject<Gebruiker[]> {
    return this._gebruikersUpdated$;
  }

  getAll(): Observable<Gebruiker[]> {
    this.http.get<Gebruiker[]>(this.url)
      .subscribe(
        contacts => this.gebruikersUpdated$.next(contacts)
      );
    return this.gebruikersUpdated$;
  }



  add(g: Gebruiker): void {
    this.http.post<Gebruiker[]>(this.url, g)
      .subscribe(() => this.getAll());
  }

  login(g: Gebruiker): void {
    this.http.post<Gebruiker>(this.url + 'login', g)
      .subscribe(
        data => {
          this.ingelogdeGebruiker = data;
          this.ingelogdeGebruikerNaam.next(this.ingelogdeGebruiker.gebruikersnaam);
          console.log('Gebruiker' + this.ingelogdeGebruiker.gebruikersnaam + ' is ingelogd.');
          this.message$.next('Welkom ' + data.gebruikersnaam + '!');
          localStorage.setItem('SessionUser', '1');
          this.router.navigate(['/start']);
        },
        error => {
          console.log(error);
          this.message$.next('Inloggen is mislukt. Reden: ' + error.statusText + '.');
        }
      );
  }
}

