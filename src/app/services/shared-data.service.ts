import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  public isLoggedIn: BehaviorSubject<boolean>;
  constructor() {
    this.isLoggedIn = new BehaviorSubject(false);
  }

  setLoggedIn(bool) {
    this.isLoggedIn.next(bool);
  }
  getLoggedStatus() {
    return this.isLoggedIn.asObservable();
  }
}
