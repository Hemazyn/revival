import { FiArrowUpRight } from "react-icons/fi";
import clsx from "clsx";

const Button = ({ label, onClick, bgColor = "bg-white/10 backdrop-blur-md border border-white/20", textColor = "text-white", hoverBg = "bg-white/20", iconBg = "bg-white/10", hoverIconBg = "bg-white/30", iconColor = "text-white", hoverIconColor = "text-blue-300" }) => {
  return (
    <div onClick={onClick} className={clsx("group relative flex h-fit w-fit cursor-pointer items-center gap-3 overflow-hidden rounded-full py-1 pr-1 pl-4 shadow-md transition-all duration-300 hover:shadow-xl", bgColor)}>
      <div className={clsx("absolute inset-0 h-full w-full origin-left scale-x-0 transform transition-transform duration-300 ease-in-out group-hover:scale-x-100", hoverBg)} />
      <span className={clsx("relative z-10 text-xs font-semibold tracking-wide transition-colors duration-300 md:text-sm lg:text-base", textColor)}>{label}</span>
      <span className={clsx("relative z-10 rounded-full p-3 transition-all duration-500 ease-in-out group-hover:rotate-45", iconBg, hoverIconBg)}>
        <FiArrowUpRight size={20} className={clsx(iconColor, hoverIconColor && `group-hover:${hoverIconColor}`)} />
      </span>
    </div>
  );
};

export default Button;
