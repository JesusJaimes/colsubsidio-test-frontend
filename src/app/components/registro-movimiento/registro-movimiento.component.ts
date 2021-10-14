import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { Movimiento } from 'src/app/model/movimiento';
import { ClienteService } from 'src/app/services/cliente.service';
import { MovimientoService } from 'src/app/services/movimiento.service';

@Component({
  selector: 'app-registro-movimiento',
  templateUrl: './registro-movimiento.component.html',
  styleUrls: ['./registro-movimiento.component.css']
})
export class RegistroMovimientoComponent implements OnInit {

  numero:string = "";
  documento:string = "";
  cliente:Cliente = {
    documento: '',
    nombre: '',
    direccion: '',
    telefono: '',
    cuentas: []
  };

  constructor(private movimientoService: MovimientoService, private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  public onAddMovimiento(form: NgForm): void {
    // document.getElementById('add-cliente-button')?.click();
    this.movimientoService.addMovimiento(form.value, this.numero, this.documento).subscribe(
      (response: Movimiento) => {
        alert("Registro Exitoso");
        form.reset();
        this.router.navigate(['/']);

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
