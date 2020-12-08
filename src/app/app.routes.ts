import { Route } from '@angular/router';
import {StartPaginaComponent} from './pages/startpagina/start.pagina';
import {AdvertentiePlaatsenComponent} from './pages/advertentieplaatsen/advertentie.plaatsen.pagina';


export const routes: Route[] = [
  { path: 'start', component: StartPaginaComponent },
  { path: 'advertentieplaatsen', component: AdvertentiePlaatsenComponent}
];
