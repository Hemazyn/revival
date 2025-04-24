import { infoBg } from "../assets";
import { FaPeopleGroup, FaPersonPraying } from "react-icons/fa6";
import { FaPrayingHands, FaSadCry } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div id="about" className="w-full bg-gray-100">
        <div className="flex flex-col gap-10 px-3 py-0 pb-5 lg:flex-row lg:gap-20 lg:p-20 lg:py-5">
          <div className="relative flex w-full items-center justify-center lg:w-1/2">
            <div className="relative w-full max-w-[500px] overflow-hidden rounded-br-[70px]">
              <img src={infoBg} alt="pastorate" className="w-full rounded-br-[70px] object-cover" />
              <img src={infoBg} alt="pastorate" className="wfull absolute top-0 right-0 h-3/5 rounded-br-[70px] bg-white object-cover pb-2 pl-2" />
            </div>
          </div>
          {/* section another */}
          <div className="flex h-fit w-full flex-col lg:w-1/2">
            <p className="font-lato pl-5 text-sm font-bold text-blue-800 uppercase">about us</p>
            <h2 className="md:text-head font-fira text-xl font-bold uppercase">
              prayer, <span className="text-blue-800">purity,</span> power
            </h2>
            <div className="font-lato mt-3 flex flex-col gap-5 lg:mt-7">
              <p className="text-md text-justify text-gray-700">Revival Center Intl. is a fellowship of Believers in Christ Jesus that have the desire to establish the kingdom of our Lord through intense workings of the Holy Spirit in and through men.</p>
              <p className="text-md text-justify text-gray-700">
                We believe in the power of prayer, labor, travails, burdens, spiritual hunger, and discipleship.
                <br /> We understand that the project of God can only be executed by Sons therefore, our major focus is to provide God with useable vessels for His project in this end time. Our focus is on raising Sons for God – Sons is gender inclusive and do not necessarily mean “male”.
              </p>
            </div>
            <div className="font-lato mt-3 flex flex-col text-gray-800 lg:mt-7">
              <p>Some of our prominent meetings include;</p>
              <ol className="list-decimal pl-10">
                <li>Weekly Birthpangs (Tuesday - Thursdays) 5:00pm daily</li>
                <li>50 Days of Pentecost</li>
                <li>24 Hours with Jesus</li>
                <li>Prayer and Prophetic Conference</li>
                <li>International Sonship Conference</li>
              </ol>
            </div>
            <div className="font-fira mt-5 grid grid-cols-2 gap-y-5 lg:mt-10">
              <div className="flex flex-row items-center gap-4">
                <FaPeopleGroup size={40} style={{ color: "gray" }} className="rounded-full bg-red-100 p-3" />
                <span className="font-semibold capitalize">prayers</span>
              </div>
              <div className="flex flex-row items-center gap-4">
                <FaPersonPraying size={40} style={{ color: "gray" }} className="rounded-full bg-red-100 p-3" />
                <span className="font-semibold capitalize">labours</span>
              </div>
              <div className="flex flex-row items-center gap-4">
                <FaPrayingHands size={40} style={{ color: "gray" }} className="rounded-full bg-red-100 p-3" />
                <span className="font-semibold capitalize">travails</span>
              </div>
              <div className="flex flex-row items-center gap-4">
                <FaSadCry size={40} style={{ color: "gray" }} className="rounded-full bg-red-100 p-3" />
                <span className="font-semibold capitalize">burdens</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
