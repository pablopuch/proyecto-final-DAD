import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Empleado } from '../models/empleado';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpOptionsUsingUrlEncoded = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})

export class EmpleadoService {

  endpoint = "http://localhost:8080/empleados";
  constructor(private httpClient: HttpClient) { }

  getEmpleados(): Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(this.endpoint)
  }
}
