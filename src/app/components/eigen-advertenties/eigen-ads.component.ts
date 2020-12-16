import { Component, OnInit } from '@angular/core';
import {AdvertentieService} from '../../services/advertentie.service';
import {GebruikerService} from '../../services/gebruiker.service';
import {Advertentie} from '../../models/advertentie';

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
