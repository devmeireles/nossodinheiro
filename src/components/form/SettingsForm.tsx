import useSettingsForm from "@/hooks/useSettingsForm";
import React from "react";
import Switch from 'react-switch';

interface SettingsFormProps {

}

const SettingsForm: React.FC<SettingsFormProps> = () => {
  const {
    columnsOptions,
    selectedColumns,
    toggleSwitch,
    itemsPerPage,
    setItemsPerPage
  } = useSettingsForm();

  const isItSelected = (key: string): boolean => {
    return selectedColumns.some((item) => item.key === key && item.selected === true);
  }

  return (
    <div>
      <div className="flex">
        <div className="mb-6">
          <label htmlFor="rowsPerPage" className="mr-2">Itens por página:</label>
          <select
            id="rowsPerPage"
            className="border border-gray-300 rounded px-2 py-1"
            onChange={(event) => setItemsPerPage(Number(event.target.value))}
            value={itemsPerPage}
          >
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="60">60</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {columnsOptions.map((column) => (
          <div key={column.key} className="flex items-center">
            <Switch
              checked={isItSelected(column.key)}
              onChange={() => toggleSwitch(column.key)}
              onColor="#1b2438"
              offColor="#d4d4d4"
              handleDiameter={24}
              uncheckedIcon={false}
              checkedIcon={false}
            />
            <span className="ml-2">{column.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SettingsForm;