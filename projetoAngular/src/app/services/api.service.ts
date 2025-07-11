import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = "http://localhost:3001/"
  private http = inject(HttpClient);

  constructor() { }

  buscarVeiculo(){
    this.http.get(`${this.apiUrl}`);
  }

}
