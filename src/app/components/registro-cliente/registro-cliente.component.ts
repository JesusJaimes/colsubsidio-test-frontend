import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {

  public mensaje:string = "";

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  public onAddCliente(form: NgForm): void {
    document.getElementById('add-cliente-button')?.click();
    this.clienteService.addCliente(form.value).subscribe(
      (response: Cliente) => {
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
