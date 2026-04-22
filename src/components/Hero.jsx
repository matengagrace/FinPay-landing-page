import { arrowup, coinbase, instacart, hero } from "../assets";


function Hero() {

  return (
    <section className="w-full flex justify-between items-center md:flex-row flex-col sm:py-2 mt-9 py-6">
      <div className="flex flex-col items-start pr-5 font-bold">
        <h2 className={`animation-fade-up text-[40px] delay-150 sm:text-[60px] font-bold  text-blackClaire leading-[1.5] sm:leading-[1.1]`}>
          Get paid early <br className="sm:block hidden" />
          save automatically <br className="sm:block hidden" />
          all your pay.
        </h2>
        <p  className={`animation-fade-up delay-500 max-w-[450px] mt-5 text-gray-700 text-[18px]`}>
          Supports small businesses with simple invoicing, poweful integrations,
          and cash flow management tools.
        </p>

        <div  className={`animation-fade-up delay-1000 flex w-full mt-0 sm:mt-5 sm:w-[90%] justify-between items-center flex-col sm:flex-row  relatve sm:border border-gray-400 rounded-[10px]`}>
          <input type="text" placeholder="Your business message" className=" bg-white border h-[48px] pl-5 mb-[60px] sm:mb-0 border-gray-400 sm:w-[70%] w-full text-gray-400 rounded-l-[10px] rounded-r-[10px] sm:rounded-r-0 outline-0" />
          
          <button className="btn-primary text-white text-[16px] bg-blueClaire border-0 flex absolute bottom-0 right-[23%] sm:right-0 justify-center items-center">
            Get Started <img src={arrowup} alt="arrow up" className="ml-5" />
          </button>
        </div>
        <div  className={`animation-fade-up delay-1500 flex items-center justify-between gap-5 mt-5 flex-wrap`}>
          <img src={coinbase} alt="coinbase" className="w-[140px] cursor-pointer" />
          <img src={instacart} alt="instacart" className="w-[140px] cursor-pointer" />
        </div>
      </div>
      <div  className={`animation-fade-up delay-2000 w-full sm:w-[50%] justify-center items-center`}>
        <img src={hero} alt="hero" className="w-full"/>
      </div>
    </section>
  );
}

export default Hero;
