import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cuenta } from '../model/cuenta';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  private apiURL = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public addCuenta(cuenta: Cuenta, documento:string): Observable<Cuenta> {
    return this.http.post<Cuenta>(`${this.apiURL}/cuenta/add/${documento}`, cuenta);
  }

  public getCuentas(documento:string): Observable<Cuenta[]> {
    return this.http.get<Cuenta[]>(`${this.apiURL}/cuenta/all/${documento}`);
  }
}
