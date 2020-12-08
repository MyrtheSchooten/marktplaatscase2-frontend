import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPaginaComponent} from './pages/startpagina/start.pagina';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import { AdvertentieFormComponent } from './components/advertentie-form/advertentie-form.component';
import {AdvertentiePlaatsenComponent} from './pages/advertentieplaatsen/advertentie.plaatsen.pagina';

@NgModule({
  declarations: [
    AppComponent,
    StartPaginaComponent,
    AdvertentieFormComponent,
    AdvertentiePlaatsenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
