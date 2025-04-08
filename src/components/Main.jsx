import React, { useState, useEffect } from "react";
import { Button } from "../components";
import { slides } from "../constants";
import { FiArrowUpRight } from "react-icons/fi";


const Main = () => {
     const [currentIndex, setCurrentIndex] = useState(0);

     useEffect(() => {
          const interval = setInterval(() => {
               setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
          }, 3000);
          return () => clearInterval(interval);
     }, []);

     return (
          <div className="relative w-full h-screen overflow-hidden">
               <div className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {slides.map(({ id, title, text, src }) => (
                         <div key={id} className="w-full h-screen flex-shrink-0 relative">
                              <img src={src} alt={title} className="w-full h-full object-cover" />
                              <div className="absolute inset-0 flex flex-col justify-center items-center text-center gap-2 md:gap-4 text-white p-6">
                                   <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold font-fira mb-2 uppercase font-stretch-100%">{title}</h1>
                                   <p className="text-sm md:text-lg mb-4 font-lato">{text}</p>
                                   <div className="flex justify-center flex-row gap-2 lg:gap-4">
                                        <Button label="Get Involved" onClick={() => console.log("Clicked")} bgColor="bg-blue-800" textColor="text-white" hoverBg="bg-black" iconBg="bg-white" iconColor="text-blue-800" />
                                        <Button label="Get Involved" onClick={() => console.log('Clicked')} />
                                   </div>
                              </div>
                         </div>
                    ))}
               </div>
               <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {slides.map((_, index) => (
                         <div key={index} onClick={() => setCurrentIndex(index)}
                              className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === index ? "bg-blue-800" : "bg-gray-500 hover:bg-gray-700"}`}></div>
                    ))}
               </div>
          </div>
     );
};

export default Main;