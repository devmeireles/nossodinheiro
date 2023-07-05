"use client"

import SectionHeader from "@/components/defaults/SectionHeader";
import Tabs from "@/components/defaults/Tabs";
import { ITabSelection } from "@/components/defaults/Tabs/types";
import DespesasDeputado from "@/components/sections/DespesasDeputado";
import useDeputadoProfileStore from "@/hooks/useDeputadoProfile";
import useSettingsForm from "@/hooks/useSettingsForm";
import React, { useEffect, useState } from "react";

interface DeputadoItemParams {
  params: Record<string, any>;
}

const DeputadoItem: React.FC<DeputadoItemParams> = ({ params }) => {
  const [openTab, setOpenTab] = useState(1);
  const { selectedColumns, itemsPerPage } = useSettingsForm();
  const { despesas, fetchDespesasDeputado, deputado, fetchPerfilDeputado } = useDeputadoProfileStore();

  useEffect(() => {
    const fetchData = async () => {
      fetchDespesasDeputado(params.deputadoId, itemsPerPage);
      fetchPerfilDeputado(params.deputadoId);
    };

    fetchData()
  }, [params, itemsPerPage]);

  const tabContents = [
    {
      id: 1,
      content: <DespesasDeputado items={despesas} columns={selectedColumns} />
    },
    {
      id: 2,
      content: <div>CONTENT 2</div>
    },
    {
      id: 3,
      content: <div>CONTENT 3</div>
    },
    {
      id: 4,
      content: <div>CONTENT 4</div>
    }
  ];

  const tabItems: ITabSelection[] = [
    {
      id: 1,
      text: 'Visão Geral',
    },
    {
      id: 2,
      text: 'Despesas',
    },
    {
      id: 3,
      text: 'Votações',
    },
    {
      id: 4,
      text: 'Noticias',
    }
  ];

  return (
    <div className="deputado">
      {(deputado && despesas) && (
        <>
          <SectionHeader
            title={deputado.ultimoStatus.nomeEleitoral}
            image={deputado.ultimoStatus.urlFoto}
            bio={""}
          />

          <Tabs
            openTab={openTab}
            setOpenTab={setOpenTab}
            tabItems={tabItems}
            tabContents={tabContents}
          />
        </>
      )}
    </div>
  )

}

export default DeputadoItem;