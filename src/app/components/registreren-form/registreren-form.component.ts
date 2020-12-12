import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductadvertentieService} from '../../services/productadvertentie.service';
import {GebruikerService} from '../../services/gebruiker.service';

@Component({
  selector: 'app-registreren-form',
  templateUrl: './registreren-form.component.html',
  styleUrls: ['./registreren-form.component.css']
})
export class RegistrerenFormComponent {

  addGebruikerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private gebruikerService: GebruikerService) {
    this.addGebruikerForm = this.fb.group({
      gebruikersnaam: ['', [Validators.required]],
      wachtwoord: ['', [Validators.required]]
    });
  }

  addGebruiker(): void {
    this.gebruikerService.add(this.addGebruikerForm.value);
    this.addGebruikerForm.reset();
  }

}
