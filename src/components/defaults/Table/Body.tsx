import useDeputadoProfileStore from "@/hooks/useDeputadoProfile";
import useSettingsModal from "@/hooks/useSettingsModal";
import { ITableColumns } from "@/interfaces/table-columns.interface";
import { getAverageTicket, getFormatedCurreny } from "@/utils/formarter.utils";
import { CiSettings } from "react-icons/ci";
import Button from "../Button";
import TableCell from "./TableCell";

interface BodyProps {
  items: Record<string, any>;
  columns: ITableColumns[]
}

const Body: React.FC<BodyProps> = ({ items, columns }) => {
  const settingsModal = useSettingsModal();
  const { quantidadeDespesas, totalDespesas } = useDeputadoProfileStore()

  return (
    <div>
      <div className="bg-gray-50 text-gray-900 px-6 pt-4 pb-6 flex justify-between">
        <div className="text-sm">
          <p><strong>{quantidadeDespesas}</strong> despesas em um total de <strong>{getFormatedCurreny(totalDespesas)}</strong></p>
          <p>Ticket médio de <strong>{getAverageTicket(totalDespesas, quantidadeDespesas)}</strong></p>
        </div>

        <div>
          <Button icon={<CiSettings size={25} />} onClick={settingsModal.onOpen} />
        </div>
      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-gray-900 uppercase tracking-wider"
                >
                  {column.name}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {items.map((item: any, index: number) => (
              <tr key={index}>
                {columns.map((column: ITableColumns, columnIndex: number) => (
                  <TableCell key={columnIndex} index={columnIndex} value={item[column.key]} type={column.type} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Body;