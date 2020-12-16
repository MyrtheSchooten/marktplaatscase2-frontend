import { Component} from '@angular/core';
import {AdvertentieService} from '../../services/advertentie.service';
import {Advertentie} from '../../models/advertentie';

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

