import { FiArrowUpRight } from 'react-icons/fi';
import clsx from 'clsx';

const Button = ({ label, onClick, bgColor = 'bg-white', textColor = 'text-blue-800', hoverBg = 'bg-black', iconBg = 'bg-blue-800', hoverIconBg, iconColor = 'text-white', hoverIconColor }) => {
     return (
          <div onClick={onClick} className={clsx('w-fit h-fit relative group flex items-center pl-4 pr-1 py-1 gap-3 rounded-full overflow-hidden cursor-pointer', bgColor)}>
               <div className={clsx('absolute inset-0 w-full h-full transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300', hoverBg)}></div>
               <span className={clsx('relative z-10 font-bold text-xs lg:text-base transition-colors duration-300', textColor)}>
                    {label}
               </span>
               <span className={clsx('relative z-10 rounded-full p-3 transition-all duration-500 group-hover:rotate-45', iconBg, hoverIconBg)}>
                    <FiArrowUpRight size={20} className={clsx(iconColor, hoverIconColor && `group-hover:${hoverIconColor}`)} />
               </span>
          </div>
     );
};

export default Button;