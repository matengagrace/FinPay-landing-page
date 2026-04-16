import React from "react";
import { CreditCard, Landmark, Shield } from "lucide-react";

function Princing() {
  return (
    <section className="bg-white w-full justify-start h-[100%] p-[60px] rounded-[10px]">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
        <div>
          <h4 className="text-blueClaire uppercase font-bold">
            Future Payment
          </h4>
          <h2 className="opacity-0 animate-fadeInUp text-[35px] sm:text-[45px] font-bold text-blackClaire">
            Experience that grows <br className="sm:flex hidden" /> with your
            scale
          </h2>
        </div>
        <p className="opacity-0 animate-fadeInUp-delay-1 max-w-[370px] text-[18px] mt-5">Design a financial operating system that works for business and streamlined cash flow management</p>
      </div>

      <div className=" flex flex-col sm:flex-row justify-between items-center w-full">
        <div className="opacity-0 animate-fadeInUp-delay-2 mt-5">
            <CreditCard size={50} className="text-blueClaire"/>
            <h4 className="font-semibold text-[25px]">Multiple accounts</h4>
            <p className="text-[16px] max-w-[400px] text-gray-500">Create a finacial experienceay and automate repeat purchases by schudeling recurring payments</p>
        </div>
        <div className="opacity-0 animate-fadeInUp-delay-3 mt-5">
            <Landmark size={50} className="text-blueClaire"/>
            <h4 className="font-semibold text-[25px]">Free transfers</h4>
            <p className="text-[16px] max-w-[400px] text-gray-500">Create a finacial experienceay and automate repeat purchases by schudeling recurring payments</p>
        </div>
        <div className="opacity-0 animate-fadeInUp-delay-4 mt-5">
            <Shield size={50} className="text-blueClaire"/>
            <h4 className="font-semibold text-[25px]">Unmatched security</h4>
            <p className="text-[16px] max-w-[400px] text-gray-500">Create a finacial experienceay and automate repeat purchases by schudeling recurring payments</p>
        </div>
      </div>
    </section>
  );
}

export default Princing;
