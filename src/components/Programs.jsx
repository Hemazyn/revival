import React from 'react';
import { programList } from '../constants';

const Programs = () => {
     return (
          <>
               <div id="programs" className="w-full">
                    <div className="mx-3 m-5 lg:m-10 flex">
                         <div className="flex flex-col h-full w-full mt-5">
                              <h2 className="font-fira uppercase text-center font-bold text-[20px] lg:text-head">upcoming <span className="text-blue-800">programs</span></h2>
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 lg:mt-10">
                                   {programList.map(({ id, title, text, image }) => (
                                        <div key={id} className="relative rounded-lg shadow-md overflow-hidden">
                                             <img src={image} alt={title} className="w-full h-100 object-cover" />
                                             <div className="absolute flex flex-col bottom-0 p-4">
                                                  <span className="text-sm font-semibold text-white">{title}</span>
                                                  <span className="text-xs text-white font-bold font-fira">{text}</span>
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}

export default Programs;