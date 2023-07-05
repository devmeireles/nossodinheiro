import columns from "@/entities/deputado/columns";
import { ITableColumns, ITableColumnsSelectable } from "@/interfaces/table-columns.interface";
import { create } from "zustand";

interface SettingsFormStore {
  itemsPerPage: number;
  setItemsPerPage: (items: number) => void;
  selectedColumns: ITableColumnsSelectable[];
  toggleSwitch: (columnKey: string) => void;
  columnsOptions: ITableColumns[];
}

const useSettingsForm = create<SettingsFormStore>((set) => ({
  itemsPerPage: 15,
  setItemsPerPage: (items: number) => {
    set(() => ({
      itemsPerPage: items
    }));
  },
  selectedColumns: [
    {
      key: "dataDocumento",
      name: "Data Documento",
      selected: true,
    },
    {
      key: "cnpjCpfFornecedor",
      name: "Documento Fornecedor",
      selected: true,
    },
    {
      key: "nomeFornecedor",
      name: "Fornecedor",
      selected: true,
    },
    {
      key: "tipoDespesa",
      name: "Tipo Despesa",
      selected: true,
    },
    {
      key: "valorDocumento",
      name: "Valor Documento",
      selected: true,
    },
  ],
  toggleSwitch: (selectedColumnKey: string) => {
    set((state) => {
      const updatedSelectedColumns = [...state.selectedColumns];
      const columnIndex = updatedSelectedColumns.findIndex(
        (column) => column.key === selectedColumnKey
      );

      if (columnIndex === -1) {
        const columnToAdd = state.columnsOptions.find(
          (column) => column.key === selectedColumnKey
        );

        if (columnToAdd) {
          updatedSelectedColumns.push({ ...columnToAdd, selected: true });
        }

      } else {
        updatedSelectedColumns.splice(columnIndex, 1);
      }

      return {
        selectedColumns: updatedSelectedColumns,
      };
    });
  },
  columnsOptions: columns,
}));

export default useSettingsForm;
