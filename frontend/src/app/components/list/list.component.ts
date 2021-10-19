import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Zapatilla } from 'src/app/models/zapatilla';
import { ZapatillasService } from 'src/app/services/zapatillas.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public zapa: Array<Zapatilla> = [];

  constructor(private zapatillasService: ZapatillasService, private router: Router) { }

  ngOnInit(): void {
    this.loadInfo();
  }
  
  loadInfo() {
    this.zapatillasService.getZapatillas().subscribe((b: Array<Zapatilla>) => {
      this.zapa = b;
    })
  }

}
