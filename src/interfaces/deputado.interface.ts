import { ILink } from "./links.interface";

export interface UltimoStatus {
  id: number;
  uri: string;
  nome: string;
  siglaPartido: string;
  uriPartido: string;
  siglaUf: string;
  idLegislatura: number;
  urlFoto: string;
  email: string;
  data: string;
  nomeEleitoral: string;
  gabinete: Gabinete;
  situacao: string;
  condicaoEleitoral: string;
  descricaoStatus: any;
}

export interface Gabinete {
  nome: string;
  predio: string;
  sala: string;
  andar: any;
  telefone: string;
  email: string;
}

export interface IDeputado {
  id: number;
  uri: string;
  nomeCivil: string;
  ultimoStatus: UltimoStatus;
  cpf: string;
  sexo: string;
  urlWebsite: any;
  redeSocial: string[];
  dataNascimento: string;
  dataFalecimento: any;
  ufNascimento: string;
  municipioNascimento: string;
  escolaridade: string;
}

export interface IDeputadoRoot {
  id: number;
  uri: string;
  nome: string;
  siglaPartido: string;
  uriPartido: string;
  siglaUf: string;
  idLegislatura: number;
  urlFoto: string;
  email: string;
}

export interface IResponseDeputados {
  dados: IDeputado[];
  links: ILink[];
}

export interface IResponseDeputadosRoot {
  dados: IDeputadoRoot[];
  links: ILink[];
}
