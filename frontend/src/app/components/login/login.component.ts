import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User

  constructor(private loginService: LoginService, private router: Router) { 
    this.user = new User();
  }

  ngOnInit(): void {
  }

  public submit(): void {
      this.loginService.login(this.user).subscribe((data: number) => {
        console.log("comienzo");
        localStorage.setItem('userName', this.user.name);
        localStorage.setItem('personalToken',`${ data }`);
        console.log("fin");
        this.router.navigate(['/list']);
        console.log("ir a productos")
      },
      (error: Error) => {
        console.error("Error al realizar el acceso-login");
      }
      )
  }
}
