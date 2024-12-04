import { Provincia } from "./provincia.models";

export interface Departamento {
    idDep: number;
    nombre: string;
    extensionKm2: number;
    poblacion: number;
    foto: string;
    altitud: string;
    des: string;
    provincias: Provincia[];
  }