const Support = () => {
  return (
    <section id="giving" className="relative w-full bg-cover bg-fixed bg-center bg-no-repeat lg:h-screen" style={{ backgroundImage: "url(/support.jpg)" }}>
      <div className="absolute inset-0 z-0 bg-black/70" />
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 py-12 md:px-10">
        <div className="w-full max-w-5xl rounded-xl bg-white/10 p-6 shadow-lg ring-1 ring-white/10 backdrop-blur-sm md:p-12">
          <div className="text-center">
            <p className="text-md font-lato font-bold tracking-wide text-white uppercase">Partner with us today</p>
            <h2 className="mt-2 text-2xl font-extrabold text-gray-200 uppercase md:text-4xl">
              Support <span className="text-blue-800">Our Mission</span>
            </h2>
            <p className="mt-4 text-sm text-gray-400 md:text-base">For your Giving, Donations, Seeds, and Support, kindly use the account details below.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="flex flex-col gap-1 rounded-xl border border-blue-200 bg-blue-50 p-4 text-center text-sm font-medium text-blue-900 shadow-sm hover:shadow-md md:text-base">
                <span className="text-lg font-bold tracking-wider">0123456789</span>
                <span>Revival Center Intl.</span>
                <span>Bank of Bank</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
