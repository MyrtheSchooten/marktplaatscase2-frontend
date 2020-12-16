import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GebruikerService} from '../../services/gebruiker.service';

@Component({
  selector: 'app-registreren-form',
  templateUrl: './registreren-form.component.html',
  styleUrls: ['./registreren-form.component.css']
})
export class RegistrerenFormComponent {

  addGebruikerForm: FormGroup;
  checkbox = document.getElementById('voorwaarden');

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
