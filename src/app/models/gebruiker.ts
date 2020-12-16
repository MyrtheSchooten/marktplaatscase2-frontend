import {Advertentie} from './advertentie';

export interface Gebruiker{
  id: string;
  gebruikersnaam: string;
  wachtwoord: string;
  eigenAdvertenties?: Advertentie[];
}
