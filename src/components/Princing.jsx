
import { CreditCard, Landmark, Shield } from "lucide-react";
import useIntersectionObserver from "./useIntersectionObserver";

function Princing() {
  const {elementRef, isVisible} = useIntersectionObserver({threshold:0.2,});

  return (
    <section className="bg-white w-full justify-start h-[100%] p-[60px] rounded-[10px]">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
        <div>
          <h4 ref={elementRef} className={`reveal reveal-right ${isVisible ? "show" : ""} delay-0 text-blueClaire uppercase font-bold`}>
            Future Payment
          </h4>
          <h2 ref={elementRef} className={` reveal reveal-bottom ${isVisible ? "show" : ""} delay-0 text-[30px] sm:text-[45px] font-bold text-blackClaire`}>
            Experience that grows <br className="sm:flex hidden" /> with your
            scale
          </h2>
        </div>
        <p ref={elementRef} className={`reveal reveal-bottom ${isVisible ? "show" : ""} delay-0  max-w-[370px] text-[18px] mt-5`}>Design a financial operating system that works for business and streamlined cash flow management</p>
      </div>

      <div className=" flex flex-col sm:flex-row justify-between items-center w-full">
        <div ref={elementRef} className={`reveal reveal-bottom ${isVisible ? "show" : ""} delay-0 sm:delay-500 mt-5`} >
            <CreditCard size={50} className="text-blueClaire"/>
            <h4 className="font-semibold text-[25px]">Multiple accounts</h4>
            <p className="text-[16px] max-w-[400px] text-gray-500">Create a finacial experienceay and automate repeat purchases by schudeling recurring payments</p>
        </div>
        <div ref={elementRef} className={`reveal reveal-bottom ${isVisible ? "show" : ""} delay-0 sm:delay-700 mt-5`}>
            <Landmark size={50} className="text-blueClaire"/>
            <h4 className="font-semibold text-[25px]">Free transfers</h4>
            <p className="text-[16px] max-w-[400px] text-gray-500">Create a finacial experienceay and automate repeat purchases by schudeling recurring payments</p>
        </div>
        <div ref={elementRef} className={`reveal reveal-bottom ${isVisible ? "show" : ""} delay-0 sm:delay-900 mt-5`}>
            <Shield size={50} className="text-blueClaire"/>
            <h4 className="font-semibold text-[25px]">Unmatched security</h4>
            <p className="text-[16px] max-w-[400px] text-gray-500">Create a finacial experienceay and automate repeat purchases by schudeling recurring payments</p>
        </div>
      </div>
    </section>
  );
}

export default Princing;
