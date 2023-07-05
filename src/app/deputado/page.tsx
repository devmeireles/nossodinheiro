"use client";

import Loading from "@/components/defaults/Loading";
import DeputadosList from "@/components/list/DeputadosList";
import useDeputados from "@/hooks/useDeputados";
import { useEffect } from "react";

const DeputadosPage = () => {
  const { deputados, fetchDeputados, loading } = useDeputados();

  useEffect(() => {
    const fetchData = async () => {
      fetchDeputados();
    }

    fetchData();
  }, [fetchDeputados])

  return (
    <div className="container mx-auto overflow-auto pt-6">
      {
        loading ? <Loading /> : <DeputadosList deputados={deputados} />
      }
    </div>
  )
}

export default DeputadosPage;