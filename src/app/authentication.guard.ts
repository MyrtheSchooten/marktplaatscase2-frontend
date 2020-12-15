import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthguardService} from './services/authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private Authguardservice: AuthguardService, private router: Router) {
  }

  canActivate(): boolean {
    if (!this.Authguardservice.gettoken()) {
      this.router.navigateByUrl('/inloggen');
    }
    return this.Authguardservice.gettoken();
  }
}
