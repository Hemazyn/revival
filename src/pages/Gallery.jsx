import { Footer, Header } from '../components';
import { cr1 } from "../assets";

const Gallery = () => {
     return (
          <>
               <Header visibleLinks={["home", "centers", "contact"]} className="text-black" />
               <div className="relative w-full">
                    <div className="flex transition-transform duration-500 ease-in-out">
                         <div className="w-full h-fit flex-shrink-0 relative">
                              <img src={cr1} alt="pastor" className="w-full h-100 md:h-200 object-cover" />
                              <div className="absolute inset-0 flex flex-col justify-center items-center text-center gap-2 md:gap-4 text-white p-6">
                                   <h1 className="text-3xl md:text-5xl lg:text-8xl font-bold font-fira mb-2 uppercase font-stretch-100%">Gallery</h1>
                                   <div className="flex flex-row items-center font-fira text-lg bg-white px-3 py-2 gap-x-2 rounded-xl">
                                        <span className="text-black">Home:</span>
                                        <p className="text-black">https://ncwm.org/</p>
                                        <span className="text-blue-800">gallery</span>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="w-full flex flex-col gap-5 px-5 md:px-10 lg:px-20 py-5 md:py-10">
                    <h3 className="uppercase font-bold font-fira text-xl md:text-3xl">50 days apostolic encounter</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt10">
                         {[...Array(12)].map((_, index) => (
                              <img key={index} src={`https://picsum.photos/seed/${index}/800/600`} alt={`Gallery ${index + 1}`} className="w-full h-40 md:h-80 object-cover rounded-xl shadow-lg" />
                         ))}
                    </div>
               </div>
               <Footer />
          </>
     );
};
export default Gallery;