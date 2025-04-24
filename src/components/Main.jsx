import { Button } from "../components";
import { FiArrowUpRight } from "react-icons/fi";
import { slides } from "../constants";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map(({ id, title, text, src }) => (
          <div key={id} className="relative h-screen w-full flex-shrink-0">
            <img src={src} alt={title} className="h-full w-full object-cover brightness-[0.6]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 z-10 flex max-w-3xl flex-col items-start justify-center space-y-5 px-6 text-white md:px-16">
              <h1 className="font-lato text-4xl leading-tight font-bold tracking-tight uppercase drop-shadow-md md:text-6xl lg:text-7xl">{title}</h1>
              <p className="text-md text-gray-200 drop-shadow-sm md:text-xl">{text}</p>
              <div className="flex flex-wrap gap-4">
                <Link to="about" smooth duration={500}>
                  <Button label="About Us" />
                </Link>
                <Link to="contact" smooth duration={500}>
                  <Button label="Contact Us" bgColor="bg-gradient-to-r from-green-400 to-blue-500" hoverBg="bg-gradient-to-r from-blue-600 to-green-600" iconBg="bg-white" iconColor="text-white" hoverIconColor="text-green-500" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 transform gap-2">
        {slides.map((_, index) => (
          <button key={index} onClick={() => setCurrentIndex(index)} className={`h-3 w-3 rounded-full transition-all duration-300 ${currentIndex === index ? "scale-110 bg-blue-800" : "bg-gray-400 hover:bg-gray-600"}`} />
        ))}
      </div>
    </div>
  );
};

export default Main;
