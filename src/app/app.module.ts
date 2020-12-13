import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPaginaComponent} from './pages/startpagina/StartPagina';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import { AdvertentieFormComponent } from './components/advertentie-form/advertentie-form.component';
import {AdvertentiePlaatsenComponent} from './pages/advertentieplaatsenpagina/AdvertentiePlaatsenPagina';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegistrerenComponent} from './pages/registreerpagina/RegistrerenPagina';
import { RegistrerenFormComponent } from './components/registreren-form/registreren-form.component';
import { InloggenFormComponent } from './components/inloggen-form/inloggen-form.component';
import {InloggenComponent} from './pages/inloggenpagina/InloggenPagina';
import { DienstenOverzichtComponent } from './components/diensten-overzicht/diensten-overzicht.component';
import { ProductenOverzichtComponent } from './components/producten-overzicht/producten-overzicht.component';
import {OverzichtComponent} from './pages/overzichtpagina/OverzichtPagina';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    StartPaginaComponent,
    AdvertentiePlaatsenComponent, AdvertentieFormComponent,
    RegistrerenComponent, RegistrerenFormComponent,
    InloggenComponent, InloggenFormComponent,
    DienstenOverzichtComponent, ProductenOverzichtComponent,
    OverzichtComponent
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
