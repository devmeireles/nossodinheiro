"use client";

import { IDeputado } from "@/interfaces/deputado.interface";
import Image from "next/image";
import DeputadoContacts from "./DeputadoContacts";

interface DeputadoHeaderProps {
  deputado: IDeputado
}

const DeputadoHeader: React.FC<DeputadoHeaderProps> = ({ deputado }) => {
  return (
    <>
      <div className="header bg-[#1b2438] w-full px-16">
        <div className="header__content flex justify-start items-start py-6">
          <div className="header__content-image">
            <Image src={deputado.ultimoStatus.urlFoto} alt={deputado.ultimoStatus.nomeEleitoral} width={128} height={256} />
          </div>

          <div className="header__content-title ml-4 w-7/12 text-gray-100">
            <div>
              <h1 className="text-3xl font-semibold mb-2">{deputado.ultimoStatus.nomeEleitoral}</h1>
              {(deputado.ufNascimento && deputado.municipioNascimento) && <p><strong>Naturalidade: </strong>{deputado.municipioNascimento} - {deputado.ufNascimento}</p>}
              {deputado.dataNascimento && <p><strong>Nascimento: </strong>{deputado.dataNascimento}</p>}
              {deputado.escolaridade && <p><strong>Escolaridade: </strong>{deputado.escolaridade}</p>}
              {deputado.ultimoStatus.siglaPartido && deputado.ultimoStatus.siglaUf && <p><strong>Partido: </strong>{deputado.ultimoStatus.siglaPartido} - {deputado.ultimoStatus.siglaUf}</p>}
            </div>

            <div className="pt-4">
              <DeputadoContacts gabinete={deputado.ultimoStatus.gabinete} social={deputado.redeSocial} />
            </div>
          </div>

        </div>
      </div>
    </>

  )
}

export default DeputadoHeader;