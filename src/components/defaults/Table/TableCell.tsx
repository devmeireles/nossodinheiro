interface TableCellProps {
  index: number;
  value: string | number;
  type?: string;
}

const getValueByType = (value: string | number, type?: string): string | number => {
  let res;

  switch (type) {
    case "id":
      res = "#"
      break;
    default:
      res = value;
      break;
  }

  return res;
}

const TableCell: React.FC<TableCellProps> = ({ index, type, value }) => {
  return (
    <td
      key={index}
      className="px-6 py-4 whitespace-nowrap"
    >
      <div className="text-sm text-gray-900">
        {getValueByType(value, type)}
      </div>
    </td>
  )
}

export default TableCell;