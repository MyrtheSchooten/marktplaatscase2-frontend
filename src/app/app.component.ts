import {Component} from '@angular/core';
import {AuthguardService} from './services/authguard.service';
import {GebruikerService} from './services/GebruikerService';
import {empty} from 'rxjs/internal/Observer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marktplaats-frontend';

  constructor(
    private authguard: AuthguardService,
    private gebruikerService: GebruikerService) {
  }

  message$ = this.gebruikerService.message$;

  isActivated(): boolean {
    return this.authguard.gettoken();
  }

  logUit(): void{
    localStorage.clear();
  }
}
