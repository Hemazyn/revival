import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { scroller } from "react-scroll";
import { Logo } from "../components";
import { links } from "../constants";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const desktopVisible = ["home", "gallery", "youth"];

  const handleScrollOrNavigate = (link) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(link, { smooth: true, duration: 500, offset: -70 });
      }, 300);
    } else {
      scroller.scrollTo(link, { smooth: true, duration: 500, offset: -70 });
    }
    setNavOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${!hasScrolled ? "fixed top-0" : "relative"} z-50 w-full overflow-hidden border-b border-gray-50 bg-transparent transition-all duration-300`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-16">
        <div className="z-50">
          <Logo />
        </div>
        <ul className="hidden items-center gap-10 md:flex">
          {links
            .filter(({ link }) => desktopVisible.includes(link))
            .map(({ id, text, link }) => (
              <li key={id} className="cursor-pointer text-sm font-medium text-white uppercase transition-all hover:text-blue-400">
                {["gallery", "youth"].includes(link) ? <RouterLink to={`/${link}`}>{text}</RouterLink> : <span onClick={() => handleScrollOrNavigate(link)}>{text}</span>}
              </li>
            ))}
        </ul>
        <div className="z-50 text-white md:hidden" onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>
      <div className={`bg-opacity-90 fixed top-0 left-0 z-50 h-screen w-full transform bg-gradient-to-br from-blue-900 via-black/80 to-blue-800 px-6 py-6 backdrop-blur-lg transition-transform duration-300 ease-in-out ${navOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
        <div className="flex justify-end">
          <button onClick={() => setNavOpen(false)} className="text-2xl font-bold text-white transition hover:text-blue-400">
            &times;
          </button>
        </div>
        <div className="mt-10 flex flex-col items-start gap-6">
          {links.map(({ id, text, link }) => (
            <div key={id} onClick={() => (["gallery", "youth"].includes(link) ? (navigate(`/${link}`), setNavOpen(false)) : handleScrollOrNavigate(link))} className="group relative cursor-pointer text-xl font-semibold tracking-wide text-white uppercase transition hover:text-blue-300">
              {text}
              <span className="absolute bottom-[-4px] left-0 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
