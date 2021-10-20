import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate() {
    console.log("hola")
    if (this.loginService.loggedIn()) {
      console.log("entre en el login");
      return true;
    }

    console.log("despues login");

    this.router.navigate(['/login']);
    return false;
  }

}
