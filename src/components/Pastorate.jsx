import { FiArrowUpRight } from "react-icons/fi";
import { Button, SocialIcons, PastorCard } from "../components";
import { pastors } from "../constants";

const Pastorate = () => {
  return (
    <>
      <section className="bg-gray-200 px-4 py-10 lg:px-20">
        <h2 className="font-fira mb-10 text-center text-3xl font-bold text-blue-900 uppercase">Meet Our Pastors</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pastors.map((pastor, idx) => (
            <PastorCard key={idx} {...pastor} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Pastorate;
