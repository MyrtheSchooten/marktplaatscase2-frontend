import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductAdvertentieService} from '../../services/ProductAdvertentieService';
import {DienstAdvertentieService} from '../../services/DienstAdvertentieService';

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
    private productAdvertentieService: ProductAdvertentieService,
    private dienstAdvertentieService: DienstAdvertentieService) {
    this.addAdvertentiesForm = this.fb.group({
      titel: ['', [Validators.required]],
      prijs: ['', [Validators.required, Validators.pattern('[0-9]+$')]],
      omschrijving: ['']
    });
  }

  addAdvertentie(): void {
    if (this.soort === 'Product') {
      this.productAdvertentieService.add(this.addAdvertentiesForm.value);
    } else {
      this.dienstAdvertentieService.add(this.addAdvertentiesForm.value);
    }
    this.addAdvertentiesForm.reset();
  }

  // tslint:disable-next-line:typedef
  radioChangeHandler(event: any) {
    this.soort = event.target.value;
  }
}
