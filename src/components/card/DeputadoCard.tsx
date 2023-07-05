import { IDeputadoRoot } from "@/interfaces/deputado.interface";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface DeputadoCardProps {
  deputado: IDeputadoRoot
}

const DeputadoCard: React.FC<DeputadoCardProps> = ({ deputado }) => {
  const router = useRouter();
  const { nome, siglaPartido, siglaUf, urlFoto, id } = deputado;

  const handClick = (id: number) => {
    router.push(`/deputado/${id}`);
  }

  return (
    <div onClick={() => handClick(id)} className="deputado-card flex flex-col items-center py-2 cursor-pointer">
      <div>
        <Image src={urlFoto} alt={nome} width={149} height={112} />
      </div>

      <div className="text-center pt-2">
        <h2 className="font-semibold text-[17px]">{nome}</h2>
        <p className="text-sm">{siglaPartido} - {siglaUf}</p>
      </div>
    </div>
  );
};

export default DeputadoCard;