import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPaginaComponent} from './pages/startpagina/StartPagina';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import { AdvertentieFormComponent } from './components/advertentie-form/advertentie-form.component';
import {AdvertentiePlaatsenComponent} from './pages/advertentieplaatsen/AdvertentiePlaatsenPagina';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegistrerenComponent} from './pages/registreerpagina/RegistrerenPagina';
import { RegistrerenFormComponent } from './components/registreren-form/registreren-form.component';
import { InloggenFormComponent } from './components/inloggen-form/inloggen-form.component';
import {InloggenComponent} from './pages/inloggenpagina/InloggenPagina';
import { AdvertentieOverzichtComponentComponent } from './components/product-overzicht/advertentie-overzicht-component.component';
import { DienstenOverzichtComponent } from './components/diensten-overzicht/diensten-overzicht.component';
import { ProductenOverzichtComponent } from './components/producten-overzicht/producten-overzicht.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPaginaComponent,
    AdvertentiePlaatsenComponent, AdvertentieFormComponent,
    RegistrerenComponent, RegistrerenFormComponent,
    InloggenComponent, InloggenFormComponent, AdvertentieOverzichtComponentComponent, DienstenOverzichtComponent, ProductenOverzichtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
