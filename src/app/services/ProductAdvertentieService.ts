import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductAdvertentie} from '../models/ProductAdvertentie';
import {Observable, Subject} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductAdvertentieService {

  private url = 'http://localhost:9080/marktplaats_war_exploded/resources/productadvertenties/';

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:variable-name
  _pAdvertentiesUpdated$ = new Subject<ProductAdvertentie[]>();

  get pAdvertentiesUpdated$(): Subject<ProductAdvertentie[]> {
    return this._pAdvertentiesUpdated$;
  }

  getAll(): Observable<ProductAdvertentie[]> {
    this.http.get<ProductAdvertentie[]>(this.url)
      .subscribe(
        contacts => this.pAdvertentiesUpdated$.next(contacts)
      );
    return this.pAdvertentiesUpdated$;
  }


  add(p: ProductAdvertentie): void {
    this.http.post<ProductAdvertentie[]>(this.url, p)
      .subscribe(() => this.getAll());
  }
}
