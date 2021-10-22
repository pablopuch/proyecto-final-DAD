import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }

  

  login(user: User): Observable<number> {
    return of( Math.random() * (1000-0));
  }

  loggedIn(){
    console.log("tengo token")
    const pablo = localStorage.getItem('personalToken');
    console.log(pablo);
    if (pablo  == null){
      return false;
    }
    return true;
  }

  getToken() {
    return localStorage.getItem('token');
  }
}