import React from 'react';
import { infoBg } from '../assets';
import { FaPeopleGroup, FaPersonPraying } from "react-icons/fa6";
import { FaPrayingHands, FaSadCry } from "react-icons/fa";

const About = () => {
     return (
          <>
               <div id="about" className="w-full">
                    <div className="px-3 py-0 pb-5 lg:py-5 lg:p-20 flex flex-col lg:flex-row gap-10 lg:gap-20">
                         <div className="flex items-center justify-center w-full lg:w-1/2 relative">
                              <div className="relative rounded-br-[70px] overflow-hidden w-full max-w-[500px]">
                                   <img src={infoBg} alt="pastorate" className="w-full object-cover rounded-br-[70px]" />
                                   <img src={infoBg} alt="pastorate" className="absolute top-0 right-0 wfull h-3/5 object-cover pl-2 pb-2 bg-white rounded-br-[70px]" />
                              </div>
                         </div>
                         {/* section another */}
                         <div className="flex flex-col h-fit w-full lg:w-1/2">
                              <p className="uppercase text-blue-800 font-bold text-sm pl-5 font-lato">about us</p>
                              <h2 className="uppercase font-bold text-xl md:text-head font-fira">prayer, <span className="text-blue-800">purity,</span> power</h2>
                              <div className="flex flex-col gap-5 mt-3 lg:mt-7 font-lato">
                                   <p className="text-gray-700 text-md text-justify">Nigeria center for world mission Intl. is a fellowship of Believers in Christ Jesus that have the desire to establish the kingdom of our Lord through intense workings of the Holy Spirit in and through men.</p>
                                   <p className="text-gray-700 text-md text-justify">We believe in the power of prayer, labor, travails, burdens, spiritual hunger, and discipleship.<br /> We understand that the project of God can only be executed by Sons therefore, our major focus is to provide God with useable vessels for His project in this end time. Our focus is on raising Sons for God – Sons is gender inclusive and do not necessarily mean “male”.</p>
                              </div>
                              <div className="flex flex-col mt-3 lg:mt-7 text-gray-800 font-lato">
                                   <p>Some of our prominent meetings include;</p>
                                   <ol className="list-decimal pl-10">
                                        <li>Weekly Birthpangs (Tuesday - Thursdays) 5:00pm daily</li>
                                        <li>50 Days of Pentecost</li>
                                        <li>24 Hours with Jesus</li>
                                        <li>Prayer and Prophetic Conference</li>
                                        <li>International Sonship Conference</li>
                                   </ol>
                              </div>
                              <div className="grid grid-cols-2 mt-5 lg:mt-10 gap-y-5 font-fira">
                                   <div className="flex flex-row items-center gap-4">
                                        <FaPeopleGroup size={40} style={{ color: "gray" }} className="p-3 rounded-full bg-red-100" />
                                        <span className="font-semibold capitalize">prayers</span>
                                   </div>
                                   <div className="flex flex-row items-center gap-4">
                                        <FaPersonPraying size={40} style={{ color: "gray" }} className="p-3 rounded-full bg-red-100" />
                                        <span className="font-semibold capitalize">labours</span>
                                   </div>
                                   <div className="flex flex-row items-center gap-4">
                                        <FaPrayingHands size={40} style={{ color: "gray" }} className="p-3 rounded-full bg-red-100" />
                                        <span className="font-semibold capitalize">travails</span>
                                   </div>
                                   <div className="flex flex-row items-center gap-4">
                                        <FaSadCry size={40} style={{ color: "gray" }} className="p-3 rounded-full bg-red-100" />
                                        <span className="font-semibold capitalize">burdens</span>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default About;
