import { useEffect, useState } from "react";

const Programs = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/images?folder=programs");
        const data = await res.json();
        console.log("Fetched data:", data);
        setPrograms(data);
      } catch (error) {
        console.error("Error fetching programs:", error);
      }
    };

    fetchPrograms();
  }, []);

  return (
    <div id="programs" className="border4 w-full border-green-900 bg-gray-200">
      <div className="flex px-5 py-6">
        <div className="flex h-full w-full flex-col">
          <h2 className="font-fira lg:text-head text-center text-[20px] font-bold uppercase">
            upcoming <span className="text-blue-800">programs</span>
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
            {programs.map(({ asset_id, public_id, secure_url }) => (
              <div key={asset_id} className="relative overflow-hidden rounded-lg bg-white shadow-md">
                <div className="h-100">
                  <img src={secure_url} alt={public_id} className="h-full w-full object-center" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
