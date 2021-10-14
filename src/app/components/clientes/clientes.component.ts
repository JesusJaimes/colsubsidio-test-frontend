import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
    this.getClientes();
  }

  public getClientes(): void {
    this.clienteService.getClientes().subscribe(
      (response: Cliente[]) => {
        this.clientes = response;
        console.log(this.clientes);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteCliente(documento: string): void {
    this.clienteService.deleteCliente(documento).subscribe(
      (response: void) => {
        console.log(response);
        this.getClientes();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public goToEditCliente(documento:string){
    this.router.navigate(['edit', documento]);
  }

  public goToCuentasCliente(documento:string){
    this.router.navigate(['cuentas', documento]);
  }

}
