import React, { useState } from "react";
import { links } from "../constants";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { Logo } from "../components";

const Header = () => {
     const [nav, setNav] = useState(false);

     return (
          <div className="flex md:flex-row-reverse justify-between md:justify-around items-center w-full h-20 lg:h-30 px-6 lg:px-12 text-white border-b border-gray-400 absolute z-50 font-lato">
               <ul className="hidden md:flex">
                    {links.map(({ id, link }) => (
                         <li key={id} className="px-4 text-sm cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200">
                              <Link to={link} smooth duration={500}>
                                   {link}
                              </Link>
                         </li>
                    ))}
               </ul>
               <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-white md:hidden">
                    {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
               </div>
               {nav && (
                    <ul className="flex flex-col justify-center items-start absolute top-0 pt-20 pb-5 gap-3 left-0 w-3/5 h-fit bg-gradient-to-b from-blue-800 to-gray-800 text-white rounded-br-4xl">
                         {links.map(({ id, link }) => (
                              <li key={id} className="pl-7 cursor-pointer capitalize py-3">
                                   <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                                        {link}
                                   </Link>
                              </li>
                         ))}
                    </ul>
               )}
               <Logo />
          </div>
     );
};

export default Header;