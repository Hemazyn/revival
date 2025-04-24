import { Button, Logo, SocialIcons } from "../components";
import { FaTelegram, FaLocationCrosshairs, FaMessage } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-neutral-900 text-white">
      <div className="flex flex-col divide-y divide-gray-700 px-6 py-10 md:px-16 lg:px-24">
        <div className="flex flex-col gap-12 pb-10 md:flex-row md:justify-between">
          <div className="flex w-full flex-col gap-6 md:w-1/2">
            <Logo />
            <p className="text-sm leading-relaxed text-gray-300 lg:max-w-md">Revival Center Intl. is a fellowship of Believers in Christ Jesus that have the desire to establish the kingdom of our Lord through intense workings of the Holy Spirit in and through men.</p>
            <SocialIcons size={26} className="transition-transform" platforms={["facebook", "twitter", "instagram", "telegram", "tiktok"]} />
          </div>
          <div className="flex w-full flex-col gap-6 md:w-1/2">
            <h3 className="text-xl font-semibold tracking-wide text-white uppercase">Contact</h3>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <IoCall size={18} className="text-green-400" />
                <span>+234 801 234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMessage size={18} className="text-blue-400" />
                <span>revivalcenter@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaLocationCrosshairs size={18} className="text-yellow-400" />
                <span>Lorem ipsum dolor sit amet, consectetur elit.</span>
              </div>
            </div>
            <div className="pt-4">
              <Button label="Send Us A Mail" onClick={() => console.log("Clicked")} bgColor="bg-gradient-to-r from-green-400 to-blue-500" hoverBg="bg-gradient-to-r from-blue-600 to-green-600" iconBg="bg-white" iconColor="text-white" hoverIconColor="text-green-500" />
            </div>
          </div>
        </div>
        <div className="pt-8 text-center text-xs text-gray-500 md:text-left">&copy; {new Date().getFullYear()} Revival Center International. All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
