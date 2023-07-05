import classnames from "classnames";
import { ReactElement } from "react";

interface ButtonProps {
  label?: string;
  icon?: ReactElement;
  bordered?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ bordered, icon, label, onClick }) => {
  return (
    <button
      type="button"
      className={classnames('bg-transparent text-[#1b2438] px-4 py-2 rounded', {
        'border-2 border-solid border-[#1b2438]': bordered,
      })}
      onClick={onClick}
    >
      <div className="flex items-center">
        {icon && (
          <div className="pr-1">
            {icon}
          </div>
        )}
        {icon && (
          <div>
            {label}
          </div>
        )}
      </div>
    </button>
  )
}

export default Button;