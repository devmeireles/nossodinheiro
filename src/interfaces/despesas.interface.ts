export interface IDespesas {
  ano: number;
  mes: number;
  tipoDespesa: string;
  codDocumento: number;
  tipoDocumento: string;
  codTipoDocumento: number;
  dataDocumento: string;
  numDocumento: string | number;
  valorDocumento: number;
  urlDocumento: string;
  nomeFornecedor: string;
  cnpjCpfFornecedor: string | number;
  valorLiquido: number;
  valorGlosa: number;
  numRessarcimento: number | string;
  codLote: number;
  parcela: number;
}
