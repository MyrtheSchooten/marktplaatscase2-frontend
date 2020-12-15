import { Component} from '@angular/core';
import {AdvertentieService} from '../../services/AdvertentieService';
import {Advertentie} from '../../models/Advertentie';

@Component({
  selector: 'app-advertentie-overzicht',
  templateUrl: './advertentie-overzicht.component.html',
  styleUrls: ['./advertentie-overzicht.component.css']
})
export class AdvertentieOverzichtComponent {

  producten$ = this.service.pAdvertentiesUpdated$;

  constructor(private service: AdvertentieService) {
    this.service.getAll();
  }

  // tslint:disable-next-line:typedef
  toevoegenWinkelmandje(product: Advertentie) {
  }
}

