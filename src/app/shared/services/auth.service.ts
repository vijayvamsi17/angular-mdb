import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  constructor() { }

  setLoggedIn(status: boolean) {
    this.loggedInStatus = status;
    localStorage.setItem('loggedIn', status.toString());
  }

  get isLoggedIn() {
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  }

  loginAuthenticate(data) {
    if(data.username == "admin" && data.password == "admin") {
      return true;
    }
    return false;
  }

}
