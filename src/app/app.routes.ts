import { Route } from '@angular/router';
import {StartPaginaComponent} from './pages/startpagina/StartPagina';
import {AdvertentiePlaatsenComponent} from './pages/advertentieplaatsen/AdvertentiePlaatsenPagina';
import {RegistrerenComponent} from './pages/registreerpagina/RegistrerenPagina';
import {InloggenComponent} from './pages/inloggenpagina/InloggenPagina';


export const routes: Route[] = [
  { path: 'start', component: StartPaginaComponent },
  { path: 'registreren', component: RegistrerenComponent},
  { path: 'inloggen', component: InloggenComponent},
  { path: 'advertentieplaatsen', component: AdvertentiePlaatsenComponent}
];
