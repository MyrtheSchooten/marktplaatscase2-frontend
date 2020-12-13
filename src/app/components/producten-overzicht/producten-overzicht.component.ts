import { Component} from '@angular/core';
import {ProductAdvertentieService} from '../../services/ProductAdvertentieService';
import {ProductAdvertentie} from '../../models/ProductAdvertentie';

@Component({
  selector: 'app-producten-overzicht',
  templateUrl: './producten-overzicht.component.html',
  styleUrls: ['./producten-overzicht.component.css']
})
export class ProductenOverzichtComponent {

  producten$ = this.service.pAdvertentiesUpdated$;

  constructor(private service: ProductAdvertentieService) {
    this.service.getAll();
  }

  // tslint:disable-next-line:typedef
  toevoegenWinkelmandje(product: ProductAdvertentie) {
  }
}

