import { HiOutlineDocumentDuplicate, HiOutlineDocumentText, HiOutlineSearch } from "react-icons/hi";
import { PiCalendarLight, PiFactory, PiPackageLight } from "react-icons/pi";
import Button from "../Button";
import Input from "../Input";

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = ({ }) => {
  return (
    <div className="p-4 py-8 bg-white border-b border-gray-200 flex flex-col items-start justify-between">
      <div className="flex w-full">
        <div className="flex-grow w-fit">
          <Input placeholder="Fornecedor" icon={<PiFactory />} />
        </div>
        <div className="flex-grow ml-4 w-fit">
          <Input placeholder="Data do Documento" icon={<PiCalendarLight />} />
        </div>
        <div className="flex-grow ml-4 w-fit">
          <Input placeholder="Documento do Fornecedor" icon={<HiOutlineDocumentText />} />
        </div>
        <div className="flex-grow ml-4 w-fit">
          <Input placeholder="Código do Lote" icon={<PiPackageLight />} />
        </div>
        <div className="flex-grow ml-4 w-fit">
          <Input placeholder="Tipo de Documento" icon={<HiOutlineDocumentDuplicate />} />
        </div>
      </div>
      <div className="flex pt-6 justify-end w-full">
        <div className="">
          <Button label="Buscar" onClick={() => { }} bordered icon={<HiOutlineSearch />} />
        </div>
      </div>
    </div>
  )
}

export default Header;