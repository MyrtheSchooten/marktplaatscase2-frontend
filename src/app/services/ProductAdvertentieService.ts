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
  _advertentiesUpdated$ = new Subject<ProductAdvertentie[]>();

  get advertentiesUpdated$(): Subject<ProductAdvertentie[]> {
    return this._advertentiesUpdated$;
  }

  getAll(): Observable<ProductAdvertentie[]> {
    this.http.get<ProductAdvertentie[]>(this.url)
      .subscribe(
        contacts => this.advertentiesUpdated$.next(contacts)
      );
    return this.advertentiesUpdated$;
  }


  add(a: ProductAdvertentie): void {
    this.http.post<ProductAdvertentie[]>(this.url, a)
      .subscribe(() => this.getAll());
  }
}
