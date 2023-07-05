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

  // const deputado = {
  //   id: 1,
  //   name: "Gabriel Meireles",
  //   image: "https://placekitten.com/200/300",
  //   bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra nisi ex, at aliquet diam ullamcorper eget. Praesent luctus quis lorem id placerat. Curabitur vel lorem neque. Etiam condimentum enim quis sapien scelerisque fringilla. Duis tristique, justo in iaculis aliquam, leo nunc varius mauris, eget sollicitudin nulla arcu eget mi. Mauris condimentum consequat tincidunt. Aliquam erat volutpat. Cras ultrices lacus eget sapien ullamcorper pulvinar. Sed iaculis porttitor ipsum, sit amet hendrerit neque. Duis posuere mattis finibus. Mauris erat neque, finibus a mauris et, fringilla ultricies leo. Nam aliquam dolor vel volutpat gravida. Nunc lectus magna, tincidunt id laoreet at, iaculis in elit. Morbi convallis risus eget volutpat rutrum.",
  // }

  useEffect(() => {
    const fetchData = async () => {
      await fetchDespesasDeputado(params.deputadoId, itemsPerPage);
      await fetchPerfilDeputado(params.deputadoId);
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
            title={deputado.name}
            image={deputado.ultimoStatus.urlFoto}
            bio={deputado.ultimoStatus.urlFoto}
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