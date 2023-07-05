"use client";

import DeputadosList from "@/components/list/DeputadosList";
import useDeputados from "@/hooks/useDeputados";
import { useEffect } from "react";

const DeputadosPage = () => {

  const { deputados, fetchDeputados } = useDeputados();

  useEffect(() => {
    const fetchData = async () => {
      fetchDeputados();
    }

    fetchData();
  }, [fetchDeputados])

  return (
    <div className="container mx-auto overflow-auto">
      <h1>Deputados Page</h1>
      <DeputadosList deputados={deputados} />
    </div>
  )
}

export default DeputadosPage;