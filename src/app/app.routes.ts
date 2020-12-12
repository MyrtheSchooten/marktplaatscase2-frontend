import { Route } from '@angular/router';
import {StartPaginaComponent} from './pages/startpagina/start.pagina';
import {AdvertentiePlaatsenComponent} from './pages/advertentieplaatsen/advertentie.plaatsen.pagina';
import {RegistrerenComponent} from './pages/registreerpagina/registreren.pagina';
import {InloggenComponent} from './pages/inloggenpagina/inloggen.pagina';


export const routes: Route[] = [
  { path: 'start', component: StartPaginaComponent },
  { path: 'registreren', component: RegistrerenComponent},
  { path: 'inloggen', component: InloggenComponent},
  { path: 'advertentieplaatsen', component: AdvertentiePlaatsenComponent}
];
