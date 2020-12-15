import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Advertentie} from '../models/Advertentie';
import {Observable, Subject} from 'rxjs';
import {Gebruiker} from '../models/Gebruiker';

@Injectable({ providedIn: 'root' })
export class AdvertentieService {

  private url = 'http://localhost:9080/marktplaats_war_exploded/resources/advertenties/';

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:variable-name
  _pAdvertentiesUpdated$ = new Subject<Advertentie[]>();

  get pAdvertentiesUpdated$(): Subject<Advertentie[]> {
    return this._pAdvertentiesUpdated$;
  }

  getAll(): Observable<Advertentie[]> {
    this.http.get<Advertentie[]>(this.url)
      .subscribe(
        contacts => this.pAdvertentiesUpdated$.next(contacts)
      );
    return this.pAdvertentiesUpdated$;
  }

  add(p: Advertentie): void {
    this.http.post<Advertentie[]>(this.url, p)
      .subscribe(() => this.getAll());
  }
}
