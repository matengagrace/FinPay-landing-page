import { arrowup, coinbase, instacart, hero } from "../assets";

function Hero() {
  return (
    <section className="w-full flex justify-between items-center md:flex-row flex-col sm:py-2 mt-9 py-6">
      <div className="flex flex-col items-start pr-5">
        <h2 className="opacity-0 animate-fadeInUp text-[35px] sm:text-[70px] text-bold text-blackClaire">
          Get paid early <br className="sm:block hidden" />
          save automatically <br className="sm:block hidden" />
          all your pay.
        </h2>
        <p className="opacity-0 animate-fadeInUp-delay-1 max-w-[450px] mt-5 text-gray-700 text-[18px]">
          Supports small businesses with simple invoicing, poweful integrations,
          and cash flow management tools.
        </p>

        <div className="opacity-0 animate-fadeInUp-delay-2 flex w-full mt-5 sm:w-[90%] justify-between items-center flex-col sm:flex-row  relatve sm:border border-gray-400 rounded-[10px]">
          <input type="text" placeholder="Your business message" className=" bg-white border h-[48px] pl-5 mb-[60px] sm:mb-0 border-gray-400 sm:w-[70%] w-full text-gray-400 rounded-l-[10px] rounded-r-[10px] sm:rounded-r-0 outline-0" />
          
          <button className="btn-primary text-white text-[16px] bg-blueClaire border-0 flex absolute bottom-0 right-[23%] sm:right-0 justify-center items-center">
            Get Started <img src={arrowup} alt="arrow up" className="ml-5" />
          </button>
        </div>
        <div className="opacity-0 animate-fadeInUp-delay-3 flex items-center justify-between gap-5 mt-5 flex-wrap">
          <img src={coinbase} alt="coinbase" className="w-[140px]" />
          <img src={instacart} alt="instacart" className="w-[140px]" />
        </div>
      </div>
      <div className="opacity-0 animate-fadeInUp-delay-4 w-full sm:w-[50%] justify-center items-center">
        <img src={hero} alt="hero" className="w-full"/>
      </div>
    </section>
  );
}

export default Hero;
