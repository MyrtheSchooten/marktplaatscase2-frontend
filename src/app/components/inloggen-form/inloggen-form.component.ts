import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GebruikerService} from '../../services/gebruiker.service';

@Component({
  selector: 'app-inloggen-form',
  templateUrl: './inloggen-form.component.html',
  styleUrls: ['./inloggen-form.component.css']
})
export class InloggenFormComponent {
  inloggenGebruikerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private gebruikerService: GebruikerService) {
    this.inloggenGebruikerForm = this.fb.group({
      gebruikersnaam: ['', [Validators.required]],
      wachtwoord: ['', [Validators.required]]
    });
  }

  getIngelogdeGebruiker(): void {
  }
}
