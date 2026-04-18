import React from "react";
import {arrowup} from "../assets"

import useIntersectionObserver from "./useIntersectionObserver";

function CTA() {
  const {elementRef, isVisible} = useIntersectionObserver({threshold:0.2});
  return (
    <section className="flex flex-col sm:flex-row p-[50px] justify-between  w-[90%] items-center gap-9">
      <div ref={elementRef} className={`reveal reveal-left ${isVisible ? "show" : ""} w-full flex-col flex ga-5`}>
        <h2 className="text-blueClaire uppercase font-bold">Try it now</h2>
        <h4  className={` text-white font-bold mt-5 text-[20px] sm:text-[40px]`}>
          Ready to level up your payement process?
        </h4>
        <p className="opacity-0 animate-fadeInUp-delay-2 text-white mt-4 text-[16px] sm:text-[20px]">
          Join thousands of satisfied users and experience the difference today!
        </p>
      </div>

      <div ref={elementRef} className={`reveal reveal-left ${isVisible ? "show" : ""} delay-1000  flex justify-center sm:justify-end items-end gap-2 sm:gap-6 w-full`}>
        <button className=" btn-primary text-white text-[16px] bg-blueClaire border-0 flex justify-center items-center">
          Get Started
        </button>
        <button className=" btn-primary border text-blueClaire text-[16px] bg-transparent border-blueClaire text-blueClaire hover:bg-blueClaire hover:text-white flex justify-center items-center">
          Get Started <img src={arrowup} alt="arrow up" className="ml-5" />
        </button>
      </div>
    </section>
  );
}

export default CTA;
