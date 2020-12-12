import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPaginaComponent} from './pages/startpagina/start.pagina';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import { AdvertentieFormComponent } from './components/advertentie-form/advertentie-form.component';
import {AdvertentiePlaatsenComponent} from './pages/advertentieplaatsen/advertentie.plaatsen.pagina';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegistrerenComponent} from './pages/registreerpagina/registreren.pagina';
import { RegistrerenFormComponent } from './components/registreren-form/registreren-form.component';
import { InloggenFormComponent } from './components/inloggen-form/inloggen-form.component';
import {InloggenComponent} from './pages/inloggenpagina/inloggen.pagina';

@NgModule({
  declarations: [
    AppComponent,
    StartPaginaComponent,
    AdvertentiePlaatsenComponent, AdvertentieFormComponent,
    RegistrerenComponent, RegistrerenFormComponent,
    InloggenComponent, InloggenFormComponent
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
