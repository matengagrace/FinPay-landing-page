import { Landmark, ArrowLeftRight } from "lucide-react";
import { x, stats } from "../assets";
import useIntersectionObserver from "./useIntersectionObserver";

function Experiences() {
const {elementRef, isVisible} = useIntersectionObserver({threshold:0.2,});

  return (
    <section className="bg-gray-50 w-full justify-center h-[100%] pb-6">
      <div className="justify-center items-center flex-col flex ">
        <h4 className={`text-blueClaire uppercase font-bold`}>Why us</h4>
        <h2 ref={elementRef} className={` reveal reveal-bottom ${isVisible ? "show" : ""} delay-0 text-[30px] sm:text-[45px] font-bold text-blackClaire`}>
          Why they prefer Finpay
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10 w-full">
        <div ref={elementRef} className={` reveal reveal-left ${isVisible ? "show" : ""} delay-0 sm:delay-50 bg-primary rounded-[10px] p-9`}>
          <h4 className="text-blueClaire uppercase font-bold text-[40px] sm:text-[60px]">
            3k+
          </h4>
          <p className={`font-semibold text-[20px] max-w-[250px] text-blackClaire mt-9`}>
            Businesses already running on Finpay
          </p>
        </div>
        <div ref={elementRef} className={`reveal reveal-right ${isVisible ? "show" : ""} delay-0 sm:delay-70 bg-primary rounded-[10px] p-9`}>
          <p className="font-semibold text-[20px] max-w-[300px] text-blackClaire mb-6 sm:mb-0">
            Instant Withdraw your funds at any time
          </p>
          <div className="flex justify-around items-center mt-9">
            <img src={x} alt="x" />
            <ArrowLeftRight className="text-gray-800" />
            <div className="bg-blackClaire p-5 rounded-full">
              <Landmark size={35} className="text-white " />
            </div>
          </div>
        </div>
        <div ref={elementRef} className={` reveal reveal-bottom ${isVisible ? "show" : ""} delay-0 sm:delay-90 bg-primary rounded-[10px] p-5 w-full col-span-2 flex justify-around items-center flex-col sm:flex-row`}>
          <div>
            <h2 className="text-[25px] sm:text-[30px] font-semibold text-blackClaire">
              No asset volatility
            </h2>
            <p className="text-gray-800 mt-5 max-w-[350px]">
              Finpay is not a cryptocurrency, so you don't have to worry about
              the volatility. Your funds are always.
            </p>
          </div>
          <div className="w-[100%] sm:w-[60%] rounded-[10px] mt-5 sm:mt-0 overflow-hidden">
            <img src={stats} className="w-[100%]" alt="stats" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
