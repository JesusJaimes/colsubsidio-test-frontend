import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movimiento } from '../model/movimiento';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

  private apiURL = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public addMovimiento(movimiento: Movimiento, numero:string, documento:string): Observable<Movimiento> {
    return this.http.post<Movimiento>(`${this.apiURL}/cuenta/add/${numero}/${documento}`, movimiento);
  }
}
