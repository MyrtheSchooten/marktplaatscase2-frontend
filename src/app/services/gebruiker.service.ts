import {Observable, Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Gebruiker} from '../models/gebruiker';

@Injectable({ providedIn: 'root' })
export class GebruikerService {

  private url = 'http://localhost:9080/marktplaats_war_exploded/resources/gebruikers/';

  constructor(private http: HttpClient) {
  }
  // tslint:disable-next-line:variable-name
  _ingelogdeGebruiker = new Subject<Gebruiker>();
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

/*  getIngelogdeGebruiker(gebruikersname: string)


  add(g: Gebruiker): void {
    this.http.post<Gebruiker[]>(this.url, g)
      .subscribe(() => this.getAll());
  }*/
}
