import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {

  public cliente!: Cliente;
  private routeSub: Subscription = new Subscription;

  constructor(private clienteService: ClienteService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      if (params['cliente']) {
        this.cliente=params['cliente'];
      }
    });
  }

  public getCliente(documento:string){
    this.clienteService.getCliente(documento).subscribe(
      (response: Cliente) => {
        this.cliente = response;
        console.log(response);

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onEditCliente(form: NgForm): void {
    document.getElementById('edit-cliente-button')?.click();
    let clienteEdit = {
      "nombre": form.value.nombre,
      "documento": this.cliente.documento,
      "direccion": form.value.direccion,
      "telefono": form.value.telefono,
      "cuentas": this.cliente.cuentas
    };

    this.clienteService.updateCliente(clienteEdit).subscribe(
      (response: Cliente) => {
        alert("Modificacion Exitosa");
        form.reset();
        this.router.navigate(['/']);

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        form.reset();
      }
    );
  }

}
