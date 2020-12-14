import {Gebruiker} from './Gebruiker';

export interface ProductAdvertentie {
  id?: number;
  titel: string;
  prijs: number;
  omschrijving: string;
/*  eigenaar: Gebruiker;*/
}
