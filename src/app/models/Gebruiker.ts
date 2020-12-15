import {Advertentie} from './Advertentie';

export interface Gebruiker{
  id?: number;
  gebruikersnaam: string;
  wachtwoord: string;
  eigenAdvertenties?: Advertentie[];
}
