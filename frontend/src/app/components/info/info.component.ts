import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public empleados: Array<Empleado> = [];

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void{
    this.loadInfo();
  }

  loadInfo(){
    this.empleadoService.getEmpleados().subscribe((response) => {
      this.empleados = response;
    })
  }

}
