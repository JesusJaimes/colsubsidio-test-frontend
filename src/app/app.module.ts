import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component'
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';

import { ClientesComponent } from './components/clientes/clientes.component';
import { RegistroClienteComponent } from './components/registro-cliente/registro-cliente.component';
import { EditClienteComponent } from './components/edit-cliente/edit-cliente.component';
import { CuentasComponent } from './components/cuentas/cuentas.component';
import { RegistroMovimientoComponent } from './components/registro-movimiento/registro-movimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientesComponent,
    RegistroClienteComponent,
    EditClienteComponent,
    CuentasComponent,
    RegistroMovimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
