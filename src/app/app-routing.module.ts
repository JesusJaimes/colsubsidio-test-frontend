import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { CuentasComponent } from './components/cuentas/cuentas.component';
import { EditClienteComponent } from './components/edit-cliente/edit-cliente.component';
import { RegistroClienteComponent } from './components/registro-cliente/registro-cliente.component';
import { RegistroMovimientoComponent } from './components/registro-movimiento/registro-movimiento.component';

const routes: Routes = [

  {
    path:'',
    component:ClientesComponent
  },

  {
    path:'registro',
    component:RegistroClienteComponent
  },
  {
    path:'edit/:documento',
    component:EditClienteComponent
  },
  {
    path:'cuentas/:documento',
    component:CuentasComponent
  },
  {
    path:'registro/movimientos/:numero/:documento',
    component:RegistroMovimientoComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
