import { Cuenta } from "./cuenta";

export interface Cliente {
  documento: string;
  nombre: string;
  direccion: string;
  telefono: string;
  cuentas:Cuenta[];
}
