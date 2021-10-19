import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'frontend';
    public miToken: number;
    public userName: string | null;
    constructor() {
      this.miToken = 0;
      this.userName = "";
    }
    ngOnInit(): void {
      if (localStorage.getItem('personalToken')) {
      this.miToken = +localStorage.getItem('personalToken')!;
      }
      if (localStorage.getItem('userName')) {
      this.userName = localStorage.getItem('userName');
      }
    }
    public logout(): void {
      if (localStorage.getItem('personalToken')) {
        localStorage.removeItem('personalToken');
      }
    }
}
