import { ButtonProps } from "@/interface";

const Button = ({ buttonLabel, buttonSize, buttonBackgroundColor, action }: ButtonProps) => {
  const backgroundColorClass = buttonBackgroundColor
    ? {
        red: 'bg-red-500',
        blue: 'bg-blue-500',
        orange: 'bg-orange-500',
        green: 'bg-green-500',
      }[buttonBackgroundColor]
    : 'bg-slate-500';

  const hoverBackgroundColorClass = buttonBackgroundColor
    ? {
        red: 'hover:bg-red-600',
        blue: 'hover:bg-blue-600',
        orange: 'hover:bg-orange-600',
        green: 'hover:bg-green-600',
      }[buttonBackgroundColor]
    : 'hover:bg-slate-600';

  return (
    <button
      onClick={action}
      className={`${backgroundColorClass} ${hoverBackgroundColorClass} ${buttonSize} px-6 py-2 text-sm font-semibold rounded-lg transition duration-300 text-white`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
