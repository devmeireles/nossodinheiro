import { IDeputado, IResponseDeputado } from "@/interfaces/deputado.interface";
import { IDespesas, IResponseDespesas } from "@/interfaces/despesas.interface";
import { create } from "zustand";

interface UseDeputadoProfileStore {
  quantidadeDespesas: number;
  totalDespesas: number;
  despesas: IDespesas[];
  loading: boolean;
  error: any;
  deputado: IDeputado | null;
  fetchDespesasDeputado: (deputadoId: number, itemsPerPage: number) => void;
  fetchPerfilDeputado: (deputadoId: number) => void;
  reset: () => void
}

const useDeputadoProfile = create<UseDeputadoProfileStore>((set, get) => ({
  quantidadeDespesas: 0,
  totalDespesas: 0,
  despesas: [],
  loading: false,
  error: null,
  fetchDespesasDeputado: async (deputadoId: number, itemsPerPage: number) => {
    set({ loading: true });
    try {
      const response = await fetch(
        `/api/deputado/despesas/${deputadoId}?limit=${itemsPerPage}`,
        {
          method: "GET",
        }
      ).then((item) => item.json());

      const { dados }: IResponseDespesas = response;

      set((state) => {

        const sumTotalDespesas = dados.reduce((total, item) => total + item.valorDocumento, 0);

        return {
          despesas: dados,
          quantidadeDespesas: dados.length,
          totalDespesas: sumTotalDespesas,
          loading: false
        }
      });
    } catch (error) {
      set({ error, loading: false });
    }
  },
  deputado: null,
  fetchPerfilDeputado: async (deputadoId: number) => {
    try {
      get().reset();

      const perfil = await fetch(
        `/api/deputado/perfil/${deputadoId}`,
        {
          method: "GET",
        }
      ).then((item) => item.json());

      const { dados }: IResponseDeputado = perfil;

      set((state) => {
        return {
          deputado: dados,
          loading: false
        }
      });
    } catch (error) {
      set({ error, loading: false });
    }
  },
  reset: () => {
    set({ deputado: null });
  },
}));

export default useDeputadoProfile;