import { ITableColumns } from "@/interfaces/table-columns.interface";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

interface DefaultTableProps {
  items: Record<string, any>;
  columns: ITableColumns[];
}

const DefaultTable: React.FC<DefaultTableProps> = ({ items, columns }) => {
  return (
    <>
      <div className="bg-white shadow overflow-hidden mb-8 sm:rounded-lg">
        <Header />
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <Body items={items} columns={columns} />
        <Footer />
      </div>
    </>
  )
}

export default DefaultTable;