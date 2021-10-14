import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/model/cliente';
import { Cuenta } from 'src/app/model/cuenta';
import { ClienteService } from 'src/app/services/cliente.service';
import { CuentaService } from 'src/app/services/cuenta.service';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit {

  public documento:string = "";
  public cliente: Cliente = {
    documento: '',
    nombre: '',
    direccion: '',
    telefono: '',
    cuentas: []
  };
  private routeSub: Subscription = new Subscription;

  constructor(private clienteService: ClienteService,private cuentaService: CuentaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      if (params['documento']) {
        this.documento = params['documento'];
      }
    });
    this.getCliente(this.documento);
  }

  public getCliente(documento:string){
    this.clienteService.getCliente(documento).subscribe(
      (response: Cliente) => {
        this.cliente = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddCuenta(){

    let cuenta = {
      "numero":"",
      "saldo":0
    }

    this.cuentaService.addCuenta(cuenta, this.documento).subscribe(
      (response: Cuenta) => {
        this.cliente.cuentas.push(response);
        this.router.navigate(['cuentas', this.documento]);

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  public goToRegistroMovimientos(numero:string, documento:string){
    this.router.navigate(['registro/movimientos', numero, documento]);
  }

  public goToMovimientosCuenta(numero:string){

  }

  public onDeleteCuenta(numero:string){

  }

}
