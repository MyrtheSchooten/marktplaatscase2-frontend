import {Gebruiker} from './Gebruiker';

export interface Advertentie {
  id?: number;
  titel: string;
  prijs: number;
  omschrijving: string;
  eigenaar: Gebruiker;
  soortAdvertentie: string;
}
