import { IDespesas } from "./despesas.interface";

export interface IDeputado {
  ultimoStatus: any;
  id: number;
  name: string;
  bio: string;
  image: string;
  despesas: IDespesas[];
}