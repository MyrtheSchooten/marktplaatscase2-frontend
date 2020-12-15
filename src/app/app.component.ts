import {Component} from '@angular/core';
import {AuthguardService} from './services/authguard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marktplaats-frontend';

  constructor(private authguard: AuthguardService) {
  }

  isActivated(): void {
    return this.authguard.gettoken();
  }
}
