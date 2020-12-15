import {Gebruiker} from './Gebruiker';

export interface Advertentie {
  id: string;
  titel: string;
  prijs: number;
  omschrijving: string;
  eigenaar: Gebruiker;
  soortAdvertentie: string;
}
