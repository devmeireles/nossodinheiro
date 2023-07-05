export interface ITableColumns {
  key: string;
  name: string;
  type?: string;
}

export interface ITableColumnsSelectable {
  key: string;
  name: string;
  type?: string;
  selected: boolean;
}
