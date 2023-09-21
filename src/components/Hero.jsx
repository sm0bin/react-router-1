import Headline from "./Headline";

const Hero = () => {
  return (
    <section className=" max-w-screen-2xl mx-6 md:mx-10 2xl:mx-auto flex h-96 items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to TechHub</h1>
        {/* <Headline headline={"Welcome to TechHub"}></Headline> */}
        <p className="text-lg mb-6">Your One-Stop Hub for All Things Tech</p>
        <button className="px-8 py-3 bg-slate-500 text-slate-200 font-medium text-xl rounded-xl border border-slate-500 hover:border-slate-800 ">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
