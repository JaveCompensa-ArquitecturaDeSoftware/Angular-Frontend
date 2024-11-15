import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class servicioActividad {

  constructor(
    private http: HttpClient
  ) {
  }

  private headers = new HttpHeaders(
    { "Content-Type": "application/json" }
  )

  getActividadById(id:number): Observable<any> {
    return this.http.get<any>(`${environment.gatewayServiceUrl}/servicioactividad/Actividad/${id}`)
  }
}
