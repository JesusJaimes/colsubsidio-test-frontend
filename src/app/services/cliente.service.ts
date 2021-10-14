import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiURL = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiURL}/cliente/all`);
  }

  public addCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiURL}/cliente/add`, cliente);
  }

  public updateCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.apiURL}/cliente/update`, cliente);
  }

  public deleteCliente(documento: string): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/cliente/delete/${documento}`);
  }

  public getCliente(documento: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiURL}/cliente/find/${documento}`);
  }
}
