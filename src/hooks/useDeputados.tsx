import { IDeputadoRoot, IResponseDeputadosRoot } from "@/interfaces/deputado.interface";
import { create } from "zustand";

interface UseDeputadosStore {
  deputados: IDeputadoRoot[];
  loading: boolean;
  error: any;
  fetchDeputados: () => void;
}

const useDeputados = create<UseDeputadosStore>((set) => ({
  loading: false,
  error: null,
  deputados: [],
  fetchDeputados: async () => {
    try {

      const response = await fetch(
        `api/deputado`,
        {
          method: "GET",
        }
      ).then((item) => item.json());

      const { dados }: IResponseDeputadosRoot = response;

      set(() => {
        return {
          deputados: dados,
          loading: false
        }
      });

    } catch (error) {
      set({ error, loading: false });
    }
  }
}));

export default useDeputados;