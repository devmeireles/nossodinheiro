import { IDeputadoRoot } from "@/interfaces/deputado.interface";

import { windowSize } from "@/utils/window-size.utils";
import React, { useEffect, useRef, useState } from "react";
import DeputadoCard from "../card/DeputadoCard";

interface DeputadosListProps {
  deputados: IDeputadoRoot[];
}

const DeputadosList: React.FC<DeputadosListProps> = ({ deputados }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleDeputados, setVisibleDeputados] = useState<IDeputadoRoot[]>([]);

  useEffect(() => {
    setVisibleDeputados(deputados.slice(0, 24));

    const handleScroll = () => {
      const { docHeight, windowBottom } = windowSize();

      if (windowBottom >= docHeight) {
        setVisibleDeputados((prevDeputados) => [
          ...prevDeputados,
          ...deputados.slice(prevDeputados.length, prevDeputados.length + 24),
        ]);
      }
    }

    if (containerRef.current) {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [deputados]);

  return (
    <div ref={containerRef} className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-12">
      {visibleDeputados.map((deputado) => (
        <DeputadoCard key={deputado.id} deputado={deputado} />
      ))}
    </div>
  );
};

export default DeputadosList;
