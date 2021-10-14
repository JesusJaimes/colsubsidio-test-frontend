import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesComponent } from '../clientes/clientes.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor() {


  }

  ngOnInit(): void {
  }

}
