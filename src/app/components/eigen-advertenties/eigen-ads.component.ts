import { Component, OnInit } from '@angular/core';
import {AdvertentieService} from '../../services/AdvertentieService';
import {GebruikerService} from '../../services/GebruikerService';
import {Advertentie} from '../../models/Advertentie';

@Component({
  selector: 'app-eigen-advertenties',
  templateUrl: './eigen-ads.component.html',
  styleUrls: ['./eigen-ads.component.css']
})
export class EigenAdsComponent {

  eigenProducten$ = this.adService.eigenAdsUpdates$;
  id = this.gebruikerService.ingelogdeGebruiker.id;

  constructor(
    private gebruikerService: GebruikerService,
    private adService: AdvertentieService) {
    this.adService.getAllByGebruikerId(this.id);
  }

  verwijder(a: Advertentie): void{
      this.adService.delete(a.id);
  }

}
