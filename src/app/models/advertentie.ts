import {Gebruiker} from './gebruiker';

export interface Advertentie {
  id: string;
  titel: string;
  prijs: number;
  omschrijving: string;
  eigenaar: Gebruiker;
  soortAdvertentie: string;
}
