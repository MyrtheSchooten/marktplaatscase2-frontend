import {Component, OnInit} from '@angular/core';
import {AuthguardService} from '../../services/authguard.service';


@Component({
  templateUrl: 'InloggenPagina.html'
})
export class InloggenComponent {

  constructor(
    private authguard: AuthguardService) {
  }

  isActivated(): boolean {
    return this.authguard.gettoken();
  }
}
