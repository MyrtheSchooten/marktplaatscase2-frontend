import {Observable, Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Gebruiker} from '../models/Gebruiker';

@Injectable({ providedIn: 'root' })
export class GebruikerService {

  private url = 'http://localhost:9080/marktplaats_war_exploded/resources/gebruikers/';
  ingelogdeGebruiker = {} as Gebruiker;
  ingelogdeGebruikerNaam = new Subject<string>();
  message$ = new Subject<string>();

  constructor(private http: HttpClient) {
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
          this.message$.next('Gebruiker' + data.gebruikersnaam + ' is ingelogd.');
        },
        error => {
          console.log(error);
          this.message$.next('Inloggen is mislukt. Reden: ' + error.statusText + '.');
        }
      );
  }
}
