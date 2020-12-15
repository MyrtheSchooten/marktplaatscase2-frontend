/*
import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

@Component({
  selector: 'app-ad-zoeken',
  templateUrl: './ad-zoeken.component.html',
  styleUrls: ['./ad-zoeken.component.css']
})
export class AdZoekenComponent implements OnInit {

  private searchTerms$ = new Subject<string>();

  constructor(
    private dienstService = DienstAdvertentieService,
    private productService = AdvertentieService
  ) { }

  search(term: string): void {
    this.searchTerms$.next(term);
  }

  ngOnInit(): void {
    this.searchTerms$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map((term: string) => this.productService.search(term)),
    ).subscribe();
  }

}
*/
