import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GatewayService
{
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  // Método para enviar datos de registro de usuario
  sendRegisterData(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Método para enviar datos de login de usuario
  sendLoginData(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Método genérico para enviar cualquier dato a una ruta específica (POST)
  sendData(endpoint: string, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${endpoint}`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Método genérico para obtener datos desde una ruta específica (GET)
  getData(endpoint: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${endpoint}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
