import { Component, OnInit } from '@angular/core';
/*import {DienstAdvertentieService} from '../../services/DienstAdvertentieService';*/

@Component({
  selector: 'app-diensten-overzicht',
  templateUrl: './diensten-overzicht.component.html',
  styleUrls: ['./diensten-overzicht.component.css']
})
export class DienstenOverzichtComponent{

/* diensten$ = this.service.dAdvertentiesUpdated$;*/

  constructor(/*private service: DienstAdvertentieService*/) {
    /*this.service.getAll();*/
  }

  // tslint:disable-next-line:typedef
  toevoegenWinkelmandje(/*dienst: DienstAdvertentieService*/) {
  }

}
