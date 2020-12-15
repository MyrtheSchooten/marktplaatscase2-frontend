import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Advertentie} from '../models/Advertentie';
import {Observable, Subject} from 'rxjs';
import {GebruikerService} from './GebruikerService';

@Injectable({ providedIn: 'root' })
export class AdvertentieService {

  private url = 'http://localhost:9080/marktplaats_war_exploded/resources/advertenties/';

  constructor(
    private http: HttpClient,
    gebruikerservice: GebruikerService) {
  }

  // tslint:disable-next-line:variable-name
  _pAdvertentiesUpdated$ = new Subject<Advertentie[]>();

  get pAdvertentiesUpdated$(): Subject<Advertentie[]> {
    return this._pAdvertentiesUpdated$;
  }

  // tslint:disable-next-line:variable-name
  _eigenAdsUpdated$ = new Subject<Advertentie[]>();

  get eigenAdsUpdates$(): Subject<Advertentie[]>{
    return this._eigenAdsUpdated$;
  }

  getAll(): Observable<Advertentie[]> {
    this.http.get<Advertentie[]>(this.url)
      .subscribe(
        advertenties => this.pAdvertentiesUpdated$.next(advertenties)
      );
    return this.pAdvertentiesUpdated$;
  }

  getAllByGebruikerId(id: string): Observable<Advertentie[]>{
    this.http.get<Advertentie[]>(this.url + id)
      .subscribe(
        eigenadvertenties => this.eigenAdsUpdates$.next(eigenadvertenties)
      );
    return this.eigenAdsUpdates$;
  }

  add(a: Advertentie): void {
    this.http.post<Advertentie[]>(this.url, a)
      .subscribe(() => this.getAll());
  }

  delete(adId: string): void {
    this.http.delete(this.url + adId)
      .subscribe(() => this.getAll());
  }
}
