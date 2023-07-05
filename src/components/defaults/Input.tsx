import { ReactElement } from "react";

interface InputProps {
  icon?: ReactElement;
  placeholder: string;
}


const Input: React.FC<InputProps> = ({ icon, placeholder }) => {
  return (
    <div className="flex border items-center border-gray-300 rounded px-3 py-2 w-full">
      {icon && <div className="icon pr-2 text-gray-400">{icon}</div>}
      <input id="search" type="text" placeholder={placeholder} className="border-none w-full focus:outline-none" />
    </div>
  );
}

export default Input;