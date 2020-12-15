import {Advertentie} from './Advertentie';

export interface Gebruiker{
  id: string;
  gebruikersnaam: string;
  wachtwoord: string;
  eigenAdvertenties?: Advertentie[];
}
