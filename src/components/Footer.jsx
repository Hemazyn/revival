import React from 'react';
import { Button, Logo, SocialIcons } from "../components";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram, FaLocationCrosshairs, FaMessage } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const Footer = () => {
     return (
          <>
               <div id="contact" className="w-full bg-black">
                    <div className="p-5 md:p-10 lg:p-20 flex flex-col divide-y divide-gray-500">
                         <div className="flex flex-col md:flex-row justify-between pb-10 gap-10 md:gap-0">
                              <div className="flex flex-col w-full md:w-2/5 lg:w-1/2 gap-7">
                                   <Logo />
                                   <p className="text-white text-justify text-sm w-full lg:w-2/5">Nigeria center for world mission Intl. is a fellowship of Believers in Christ Jesus that have the desire to establish the kingdom of our Lord through intense workings of the Holy Spirit in and through men.</p>
                                   <SocialIcons color="white" size={24} className="hover:scale-110 transition mr-4 cursor-pointer" platforms={['facebook', 'twitter', 'instagram', 'telegram']} />
                              </div>
                              <div className="w-full md:w-2/5 lg:w-1/2 flex flex-col gap-7">
                                   <h3 className="text-white font-bold font-fira text-2xl">Contact</h3>
                                   <div className="flex flex-col gap-5">
                                        <div className="flex flex-row gap-x-5 items-center">
                                             <IoCall size={20} color="gray" /> <span className="text-white text-sm">+234 801 234 5678</span>
                                        </div>
                                        <div className="flex flex-row gap-x-5 items-center">
                                             <FaMessage size={20} color="gray" /> <span className="text-white text-sm">revivalcenter@gmail.com</span>
                                        </div>
                                        <div className="flex flex-row gap-x-5 items-center">
                                             <FaLocationCrosshairs size={20} color="gray" /> <span className="text-white text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
                                        </div>
                                   </div>
                                   <a href="#" className="ml-10">
                                        <Button label="Send Us A Mail" onClick={() => console.log("Clicked")} bgColor="bg-blue-800" textColor="text-white" hoverBg="bg-black" iconBg="bg-white" iconColor="text-blue-800" />
                                   </a>
                              </div>
                         </div>
                         <p className="text-white font-fira text-sm text-center md:text-start pt-10">Copyright 2025 RevivalCenter Ministries International. All Rights Reserved.</p>
                    </div>
               </div>
          </>
     );
};

export default Footer;