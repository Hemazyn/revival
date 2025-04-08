import React from 'react';
import { About, Button, Footer, Header, Main, Programs, Pastorate, Support } from '../components';
import { iconMoveRight } from "../assets";

const Home = () => {
     return (
          <>
               <Header />
               <Main />
               <Pastorate />
               <About />
               <Programs />
               <div className="w-full bg-blue-800 py-5 md:py-10">
                    <div className="flex flex-col md:flex-row items-start md:items-center mx-5 md:mx-15 justify-between gap-5">
                         <h2 className="uppercase w-fit text-white font-bold text-[20px] lg:text-head font-fira">Join our telegram group to download life <br /> changing messages</h2>
                         <div className="flex h-fit">
                              <img src={iconMoveRight} alt="icon move right" className="hidden md:block animate-move-left-right" />
                              <a href="#">
                                   <Button label="Join Group" onClick={() => console.log("Clicked")} bgColor="bg-white" textColor="text-blue-800" hoverBg="bg-black" iconBg="bg-blue-800" iconColor="text-white" />
                              </a>
                         </div>
                    </div>
               </div>
               <Support />
               <div className="w-full bg-blue-800 py-5 md:py-10">
                    <div className="flex flex-col md:flex-row items-start md:items-center mx-5 md:mx-15 justify-between gap-5">
                         <h2 className="uppercase w-fit text-white font-bold text-[20px] lg:text-head font-fira">Get to Know our Apostolic Centres, their <br /> locations and Contact Informations</h2>
                         <div className="flex h-fit">
                              <img src={iconMoveRight} alt="icon move right" className="hidden md:block animate-move-left-right" />
                              <a href="#">
                                   <Button label="View Apostolic Centers" onClick={() => console.log("Clicked")} bgColor="bg-white" textColor="text-blue-800" hoverBg="bg-black" iconBg="bg-blue-800" iconColor="text-white" />
                              </a>
                         </div>
                    </div>
               </div>
               <Footer />
          </>
     );
};

export default Home;