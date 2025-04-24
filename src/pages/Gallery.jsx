import { useEffect } from "react";
import { Footer, Header } from "../components";
import { cr1 } from "../assets";
import AOS from "aos";

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // useEffect(() => {
  //   const fetchPrograms = async () => {
  //     try {
  //       const res = await fetch("http://localhost:5000/api/images?folder=gallery");
  //       const data = await res.json();
  //       console.log("Fetched data:", data);
  //       setPrograms(data);
  //     } catch (error) {
  //       console.error("Error fetching gallery:", error);
  //     }
  //   };

  //   fetchPrograms();
  // }, []);

  return (
    <>
      <Header visibleLinks={["home", "youth", "contact"]} />
      <div className="font-fira relative flex h-[85vh] w-full items-center justify-start text-white">
        <img src={cr1} alt="Gallery" className="absolute inset-0 h-full w-full object-cover brightness-75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        <div className="relative z-10 w-fit max-w-4xl space-y-6 px-6 md:px-12">
          {/* prettier-ignore */}
          <h1 className="text-4xl font-bold tracking-wider uppercase md:text-6xl" data-aos="fade-up">Explore Our <span className="text-blue-400">Gallery</span></h1>
          {/* prettier-ignore */}
          <p className="text-lg text-gray-300 md:text-xl" data-aos="fade-up" data-aos-delay="100">Discover the moments of inspiration and revival captured during our gatherings.</p>
          <div className="flex w-fit items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm backdrop-blur-md" data-aos="fade-up" data-aos-delay="200">
            <span className="font-semibold">Home:</span>
            <a href="https://revivalcenter.org/" className="underline transition hover:text-blue-300" target="_blank" rel="noopener noreferrer">
              revivalcenter.org
            </a>
            <span className="text-blue-400">/gallery</span>
          </div>
        </div>
      </div>
      <section className="w-full bg-gray-200 px-5 py-10 md:px-10 lg:px-20">
        {/* prettier-ignore */}
        <h3 className="font-fira text-2xl font-bold text-gray-900 uppercase md:text-3xl" data-aos="fade-up">50 Days Apostolic Encounter</h3>
        {/* prettier-ignore */}
        <p className="mt-2 text-sm text-gray-600 md:text-base" data-aos="fade-up" data-aos-delay="100">A visual journey through our unforgettable revival moments.</p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:gap-8">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg transition duration-300 ease-in-out hover:shadow-2xl" data-aos="fade-up" data-aos-delay={`${(index + 1) * 100}`}>
              <img src={`https://picsum.photos/seed/${index}/800/600`} alt={`Gallery ${index + 1}`} className="h-48 w-full object-cover md:h-72 lg:h-80" />
            </div>
          ))}
        </div>
        {/* <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {gallery.map(({ asset_id, public_id, secure_url }) => (
            <div key={asset_id} className="relative overflow-hidden rounded-lg bg-white shadow-md">
              <div className="h-100">
                <img src={secure_url} alt={public_id} className="h-full w-full object-center" />
              </div>
            </div>
          ))}
        </div> */}
      </section>
      <Footer />
    </>
  );
};

export default Gallery;
