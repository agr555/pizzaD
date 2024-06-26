import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class AuthService {

  constructor() { }
  private isLogged = false;
  // public isLoggedSubject: Subject<boolean> = new Subject<boolean>();
  public isLogged$: Subject<boolean> = new Subject<boolean>();

  logIn() {
    this.isLogged = true;
    // this.isLoggedSubject.next(this.isLogged);
    this.isLogged$.next(this.isLogged);
  }

  logOut() {
    this.isLogged = false;
    // this.isLoggedSubject.next(this.isLogged);
    this.isLogged$.next(this.isLogged);
  }
  isLoggedIn(): boolean {
    return this.isLogged;
  }
  getToken(){
    return 'test';
    //get from localstorage
  }
}
