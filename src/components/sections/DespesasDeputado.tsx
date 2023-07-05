"use client"

import { IDespesas } from "@/interfaces/despesas.interface";
import { ITableColumns } from "@/interfaces/table-columns.interface";
import DefaultTable from "../defaults/Table";

interface DespesasDeputadoProps {
  items: IDespesas[];
  columns: ITableColumns[];
}

const DespesasDeputado: React.FC<DespesasDeputadoProps> = ({ items, columns }) => {
  return (
    <div className="despesas-deputado">
      <DefaultTable items={items} columns={columns} />
    </div>
  )
}

export default DespesasDeputado;