import { Link } from "react-scroll";
import { About, Button, Footer, Header, Main, Programs, Pastorate, Support } from "../components";
import { iconMoveRight } from "../assets";

const Home = () => {
  return (
    <>
      <div id="home">
        <Header />
        <Main />
        <Pastorate />
        <About />
        <Programs />
        <div className="w-full bg-gradient-to-br from-blue-800 to-blue-900 py-5 md:py-10">
          <div className="mx-auto flex max-w-[90%] flex-col items-center justify-between gap-8 px-6 md:flex-row md:px-12">
            <div className="text-center md:text-left">
              {/* prettier-ignore */}
              <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl font-fira leading-snug">Join our <span className="text-green-400">Telegram group</span><br className="hidden md:block" />  to download life-changing messages </h2>
              <p className="mt-2 max-w-md text-sm text-gray-300">Get exclusive access to impactful audio and video messages that can inspire and transform your journey.</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={iconMoveRight} alt="arrow" className="animate-move-left-right hidden h-10 w-10 md:block" />
              <Link to="about" smooth duration={500}>
                <Button label="Join group" bgColor="bg-gradient-to-r from-green-400 to-blue-500" hoverBg="bg-gradient-to-r from-blue-600 to-green-600" iconBg="bg-white" iconColor="text-white" hoverIconColor="text-green-500" />
              </Link>
            </div>
          </div>
        </div>
        <Support />
        <div className="w-full bg-gradient-to-br from-blue-800 to-blue-900 py-10">
          <div className="mx-auto flex max-w-[90%] flex-col items-center justify-between gap-8 px-6 md:flex-row md:px-12">
            <div className="text-center md:text-left">
              {/* prettier-ignore */}
              <h2 className="font-fira text-2xl leading-snug font-bold text-white md:text-3xl lg:text-4xl">Get to know our <span className="text-green-400">Apostolic Centres</span> <br className="hidden md:block" />their locations and contact information</h2>
              <p className="mt-2 max-w-md text-sm text-gray-300">Explore our growing network of Apostolic Centres and find one near you to connect and fellowship with us.</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={iconMoveRight} alt="icon move right" className="animate-move-left-right hidden h-10 w-10 md:block" />
              <Link to="about" smooth duration={500}>
                <Button label="View Apostolic Centers" bgColor="bg-gradient-to-r from-green-400 to-blue-500" hoverBg="bg-gradient-to-r from-blue-600 to-green-600" iconBg="bg-white" iconColor="text-white" hoverIconColor="text-green-500" />
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
