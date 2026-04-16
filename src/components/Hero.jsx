import { arrowup, coinbase, instacart, hero } from "../assets";

function Hero() {
  return (
    <section className="w-full flex justify-between items-center md:flex-row flex-col sm:py-2 py-6">
      <div className="flex flex-col items-start pr-5">
        <h2 className="opacity-0 animate-fadeInUp text-[45px] sm:text-[70px] text-bold text-blackClaire">
          Get paid early <br className="sm:block hidden" />
          save automatically <br className="sm:block hidden" />
          all your pay.
        </h2>
        <p className="opacity-0 animate-fadeInUp-delay-1 max-w-[450px] mt-5 text-gray-700 text-[18px]">
          Supports small businesses with simple invoicing, poweful integrations,
          and cash flow management tools.
        </p>

        <div className="opacity-0 animate-fadeInUp-delay-2 flex bg-white border border-gray-400 w-full sm:w-[90%] text-gray-400 justify-between items-center pl-4 rounded-[10px] mt-6">
          Your business message
          <button className="btn-primary text-white text-[16px] bg-blueClaire border-0 flex justify-center items-center">
            Get Started <img src={arrowup} alt="arrow up" className="ml-5" />
          </button>
        </div>
        <div className="opacity-0 animate-fadeInUp-delay-3 flex items-center justify-between gap-5 mt-5 flex-wrap">
          <img src={coinbase} alt="coinbase" className="w-[140px]" />
          <img src={instacart} alt="instacart" className="w-[140px]" />
        </div>
      </div>
      <div className="opacity-0 animate-fadeInUp-delay-4 w-full sm:w-[50%]">
        <img src={hero} alt="hero" />
      </div>
    </section>
  );
}

export default Hero;
