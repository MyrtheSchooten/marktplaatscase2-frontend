import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductAdvertentieService} from '../../services/ProductAdvertentieService';
import {DienstAdvertentieService} from '../../services/DienstAdvertentieService';
import {GebruikerService} from '../../services/GebruikerService';


@Component({
  selector: 'app-advertentie-form',
  templateUrl: './advertentie-form.component.html',
  styleUrls: ['./advertentie-form.component.css']
})
export class AdvertentieFormComponent {

  addAdvertentiesForm: FormGroup;

  soort = '';
  soortAdvertentie: any = [
    'Dienst',
    'Product'
  ];
  private advertentie: any;

  constructor(
    private fb: FormBuilder,
    private gebruikerService: GebruikerService,
    private productAdvertentieService: ProductAdvertentieService,
    private dienstAdvertentieService: DienstAdvertentieService) {
    this.addAdvertentiesForm = this.fb.group({
      titel: ['', [Validators.required]],
      prijs: ['', [Validators.required, Validators.pattern('[0-9]+$')]],
      omschrijving: ['']
    });
  }

  addAdvertentie(): void {
    this.advertentie = this.addAdvertentiesForm.value;
/*    this.advertentie.eigenaar = this.gebruikerService.ingelogdeGebruiker;*/
    if (this.soort === 'Product') {
      this.productAdvertentieService.add(this.advertentie);
    } else {
      this.dienstAdvertentieService.add(this.advertentie);
    }
    this.addAdvertentiesForm.reset();
  }

  // tslint:disable-next-line:typedef
  radioChangeHandler(event: any) {
    this.soort = event.target.value;
  }
}
