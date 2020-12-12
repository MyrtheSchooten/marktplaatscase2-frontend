import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductAdvertentieService} from '../../services/ProductAdvertentieService';

@Component({
  selector: 'app-advertentie-form',
  templateUrl: './advertentie-form.component.html',
  styleUrls: ['./advertentie-form.component.css']
})
export class AdvertentieFormComponent {

  addAdvertentiesForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productAdvertentieService: ProductAdvertentieService) {
    this.addAdvertentiesForm = this.fb.group({
      titel: ['', [Validators.required]],
      prijs: ['', [Validators.required, Validators.pattern('[0-9]+$')]],
      omschrijving: ['']
    });
  }

  addAdvertentie(): void {
    this.productAdvertentieService.add(this.addAdvertentiesForm.value);
    this.addAdvertentiesForm.reset();
  }
}
