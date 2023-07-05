"use client"


import Loading from "@/components/defaults/Loading";
import SectionHeader from "@/components/defaults/SectionHeader";
import Tabs from "@/components/defaults/Tabs";
import { ITabSelection } from "@/components/defaults/Tabs/types";
import DespesasDeputado from "@/components/sections/DespesasDeputado";
import useDeputadoProfileStore from "@/hooks/useDeputadoProfile";
import useSettingsForm from "@/hooks/useSettingsForm";
import React, { useEffect, useState } from "react";

interface DeputadoPageParams {
  params: Record<string, any>;
}

const DeputadoPage: React.FC<DeputadoPageParams> = ({ params }) => {
  const [openTab, setOpenTab] = useState(1);
  const { selectedColumns, itemsPerPage } = useSettingsForm();
  const { despesas, fetchDespesasDeputado, deputado, fetchPerfilDeputado, loading } = useDeputadoProfileStore();

  useEffect(() => {
    const fetchData = async () => {
      fetchDespesasDeputado(params.deputadoId, itemsPerPage);
      fetchPerfilDeputado(params.deputadoId);
    };

    fetchData()
  }, [params, itemsPerPage, fetchDespesasDeputado, fetchPerfilDeputado]);

  const tabContents = [
    {
      id: 1,
      content: <DespesasDeputado items={despesas} columns={selectedColumns} />
    },
  ];

  const tabItems: ITabSelection[] = [
    {
      id: 1,
      text: 'Despesas',
    },
  ];

  return (
    <div className="deputado">
      {loading && <Loading />}
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

export default DeputadoPage;