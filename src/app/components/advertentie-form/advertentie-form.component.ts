import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdvertentieService} from '../../services/AdvertentieService';
import {GebruikerService} from '../../services/GebruikerService';
import {Advertentie} from '../../models/Advertentie';


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

  constructor(
    private fb: FormBuilder,
    private gebruikerService: GebruikerService,
    private advertentieService: AdvertentieService) {
    this.addAdvertentiesForm = this.fb.group({
      titel: ['', [Validators.required]],
      prijs: ['', [Validators.required, Validators.pattern('[0-9]+$')]],
      omschrijving: ['']
    });
  }

  addAdvertentie(): void {

    const a: Advertentie = this.addAdvertentiesForm.value;
    a.eigenaar = this.gebruikerService.ingelogdeGebruiker;
    this.advertentieService.add(a);
    this.addAdvertentiesForm.reset();
  }

  // tslint:disable-next-line:typedef
  radioChangeHandler(event: any) {
    this.soort = event.target.value;
  }
}
