import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Gebruiker} from '../../models/Gebruiker';
import {GebruikerService} from '../../services/GebruikerService';

@Component({
  selector: 'app-inloggen-form',
  templateUrl: './inloggen-form.component.html',
  styleUrls: ['./inloggen-form.component.css']
})
export class InloggenFormComponent {
  inloggenGebruikerForm: FormGroup;
  ingelogdeGebruiker = {} as Gebruiker;
  message$ = this.gebruikerService.message$;

  constructor(
    private fb: FormBuilder,
    private gebruikerService: GebruikerService) {
    this.inloggenGebruikerForm = this.fb.group({
      gebruikersnaam: ['', [Validators.required]],
      wachtwoord: ['', [Validators.required]]
    });
  }

  login(): void {
    this.gebruikerService.login(this.ingelogdeGebruiker);
    this.ingelogdeGebruiker = {} as Gebruiker;
  }
}
