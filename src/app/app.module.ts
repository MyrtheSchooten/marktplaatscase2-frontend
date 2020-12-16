import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StartPaginaComponent} from './pages/start.pagina/start.pagina';
import {RouterModule, Routes} from '@angular/router';
import {AdvertentieFormComponent} from './components/advertentie-form/advertentie-form.component';
import {AdvertentiePlaatsenComponent} from './pages/advertentie-plaatsen.pagina/advertentie-plaatsen.pagina';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegistrerenComponent} from './pages/registeer.pagina/registreren.pagina';
import {RegistrerenFormComponent} from './components/registreren-form/registreren-form.component';
import {InloggenFormComponent} from './components/inloggen-form/inloggen-form.component';
import {InloggenComponent} from './pages/inloggen.pagina/inloggen.pagina';
import {AdvertentieOverzichtComponent} from './components/advertentie-overzicht/advertentie-overzicht.component';
import {OverzichtComponent} from './pages/overzicht.pagina/overzicht.pagina';
import {AuthguardService} from './services/authguard.service';
import {AuthenticationGuard} from './authentication.guard';
import {EigenAdvertentiesComponent} from './pages/eigen-advertenties.pagina/eigen-advertenties.pagina';
import {EigenAdsComponent} from './components/eigen-advertenties/eigen-ads.component';


// @ts-ignore
const routes: Routes = [
  {path: '', redirectTo: '/start', pathMatch: 'full'},
  {path: 'inloggen', component: InloggenComponent},
  {path: 'start', component: StartPaginaComponent},
  {path: 'registreren', component: RegistrerenComponent},
  {path: 'advertentieplaatsen', component: AdvertentiePlaatsenComponent, canActivate: [AuthenticationGuard]},
  {path: 'advertentieoverzicht', component: OverzichtComponent, canActivate: [AuthenticationGuard]},
  {path: 'eigenadvertenties', component: EigenAdvertentiesComponent, canActivate: [AuthenticationGuard]}
  ];


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    StartPaginaComponent,
    AdvertentiePlaatsenComponent, AdvertentieFormComponent,
    RegistrerenComponent, RegistrerenFormComponent,
    InloggenComponent, InloggenFormComponent,
    AdvertentieOverzichtComponent,
    OverzichtComponent,
    EigenAdsComponent, EigenAdvertentiesComponent,
    /*AdZoekenComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [
    AuthguardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
