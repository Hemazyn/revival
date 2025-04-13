import { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { Logo } from "../components";
import { links } from "../constants";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = ({ visibleLinks }) => {
     const [nav, setNav] = useState(false);

     const filteredLinks = visibleLinks ? links.filter(link => visibleLinks.includes(link.link)) : links;
     const location = useLocation();
     const navigate = useNavigate();

     const handleScrollOrNavigate = (link) => {
          if (location.pathname !== '/') {
               navigate('/');
               setTimeout(() => {
                    scroller.scrollTo(link, { smooth: true, duration: 500, offset: -70, });
               }, 300);
          } else {
               scroller.scrollTo(link, { smooth: true, duration: 500, offset: -70 });
          }
     };

     return (
          <div className="flex md:flex-row-reverse justify-between md:justify-around items-center w-full h-20 lg:h-30 px-6 lg:px-12 text-white border-b border-gray-400 absolute z-50 font-lato">
               <ul className="hidden md:flex">
                    {filteredLinks.map(({ id, text, link }) => (
                         <li key={id} className="px-4 text-sm cursor-pointer capitalize font-medium text-white hover:text-blue-800 hover:font-bold hover:scale-105 duration-200">
                              {link === 'gallery' ? (<RouterLink to={`/${link}`}>{text}</RouterLink>) : (
                                   <span onClick={() => handleScrollOrNavigate(link)}>{text}</span>
                              )}
                         </li>
                    ))}
               </ul>
               <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-white md:hidden">
                    {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
               </div>
               {nav && (
                    <ul className="flex flex-col justify-center items-start absolute top-0 pt-20 pb-5 gap-3 left-0 w-3/5 h-fit bg-gradient-to-b from-blue-800 to-gray-800 text-white rounded-br-4xl">
                         {filteredLinks.map(({ id, text, link }) => (
                              <li key={id} className="pl-7 cursor-pointer capitalize py-3">
                                   {link === 'gallery' ? (<RouterLink to={`/${link}`} onClick={() => setNav(!nav)}>{text}</RouterLink>
                                   ) : (<span onClick={() => { handleScrollOrNavigate(link); setNav(false); }}>  {text}  </span>)}
                              </li>
                         ))}
                    </ul>
               )}
               <Logo />
          </div>
     );
};

export default Header;