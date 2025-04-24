import { useEffect } from "react";
import { Footer, Header, Button } from "../components";
import { cr2 } from "../assets";
import AOS from "aos";

const Youths = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  // useEffect(() => {
  //   const fetchPrograms = async () => {
  //     try {
  //       const res = await fetch("http://localhost:5000/api/images?folder=youths");
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
      <Header visibleLinks={["home", "gallery", "contact"]} />
      <div className="font-fira relative flex h-[90vh] w-full items-center justify-start text-white" data-aos="fade-in">
        <img src={cr2} alt="Youth" className="absolute inset-0 h-full w-full object-cover brightness-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        <div className="relative z-10 w-fit max-w-4xl space-y-6 px-6 md:px-12">
          {/* prettier-ignore */}
          <h1 className="text-gradient text-4xl font-extrabold tracking-wider uppercase md:text-6xl">Welcome to Our <span className="text-blue-400">Youth</span> Page</h1>
          <p className="text-lg text-gray-300 md:text-xl">Empowering the next generation through faith, fun, and friendship. Join us on our journey to grow, lead, and impact the world!</p>
          <div className="flex w-fit items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm backdrop-blur-md">
            <span className="font-semibold">Home:</span>
            <a href="https://revivalcenter.org/" className="underline transition hover:text-blue-300" target="_blank" rel="noopener noreferrer">
              revivalcenter.org
            </a>
            <span className="text-blue-400">/youth</span>
          </div>
        </div>
      </div>
      <section className="relative bg-gradient-to-r from-blue-400 to-blue-600 py-20 text-center text-white" data-aos="fade-up">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex flex-col items-center">
          {/* prettier-ignore */}
          <h2 className="mb-6 text-4xl font-extrabold tracking-wider text-white md:text-5xl">Why Join Our <span className="text-yellow-400">Youth</span> Group?</h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-200 md:text-xl">Our youth group offers a safe space to connect, grow, and thrive in a community centered around faith, fun, and friendship. Join us to serve, learn, and make lasting memories that will change your life!</p>
          <a href="#">
            <Button label="Join the Movement" />
          </a>
        </div>
      </section>
      <section className="bg-gray-200 px-5 py-16 md:px-10 lg:px-20">
        {/* prettier-ignore */}
        <h3 className="mb-10 text-center text-2xl font-bold text-gray-900" data-aos="fade-up">Youth Events & Activities</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:gap-8">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg transition duration-300 ease-in-out hover:shadow-2xl" data-aos="zoom-in" data-aos-delay={index * 100}>
              <img src={`https://picsum.photos/seed/${index}/800/600`} alt={`Youth Event ${index + 1}`} className="h-48 w-full object-cover md:h-72 lg:h-80" />
            </div>
          ))}
        </div>
        {/* <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {youths.map(({ asset_id, public_id, secure_url }) => (
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

export default Youths;
