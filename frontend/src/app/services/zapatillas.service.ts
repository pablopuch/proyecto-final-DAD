import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Zapatilla } from '../models/zapatilla';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpOptionsUsingUrlEncoded = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
}) 

export class ZapatillasService {

  endpoint = "http://localhost:8080/zapatillas";

  constructor(private httpClient: HttpClient) { }

  getZapatillas(): Observable<Zapatilla[]>{
    return this.httpClient.get<Zapatilla[]>(this.endpoint)
  }

}