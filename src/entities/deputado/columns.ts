import { ITableColumns } from "@/interfaces/table-columns.interface";

const columns: ITableColumns[] = [
  {
    key: "ano",
    name: "Ano",
  },
  {
    key: "cnpjCpfFornecedor",
    name: "Documento Fornecedor",
  },
  {
    key: "codDocumento",
    name: "Código Documento",
  },
  {
    key: "codTipoDocumento",
    name: "Código Lote",
  },
  {
    key: "codLote",
    name: "Código Tipo Documento",
  },
  {
    key: "dataDocumento",
    name: "Data Documento",
  },
  {
    key: "mes",
    name: "Mês",
  },
  {
    key: "nomeFornecedor",
    name: "Fornecedor",
  },
  {
    key: "numDocumento",
    name: "Número Documento",
  },
  {
    key: "numRessarcimento",
    name: "Número Ressarcimento",
  },
  {
    key: "parcela",
    name: "Parcela",
  },
  {
    key: "tipoDespesa",
    name: "Tipo Despesa",
  },
  {
    key: "tipoDocumento",
    name: "Tipo Documento",
  },
  {
    key: "urlDocumento",
    name: "URL Documento",
  },
  {
    key: "valorDocumento",
    name: "Valor Documento",
  },
  {
    key: "valorGlosa",
    name: "Valor Glosa",
  },
  {
    key: "valorLiquido",
    name: "Valor Liquido",
  },
];

export default columns;
