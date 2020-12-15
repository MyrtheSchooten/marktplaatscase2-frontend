import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {
  constructor() {
  }

  gettoken(): any {
    // console.log("get item", localStorage.getItem('SessionUser'));
    return !!localStorage.getItem('SessionUser');
  }
}
