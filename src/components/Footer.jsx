
import { Landmark } from "lucide-react";
import { footerLinks } from "../constants";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

import useIntersectionObserver from "./useIntersectionObserver";

function Footer() {
  const {elementRef, isVisible} = useIntersectionObserver({threshold:0.2,});
  return (
    <section ref={elementRef} className={` reveal reveal-bottom ${isVisible ? "show" : ""} flex justify-center items-center py-6 flex-col gap-5`}>
      <div className=" w-full flex justify-between sm:items-start items-center md:flex-row flex-col mb-8 pt-6 ">
        <div className=" flex justify-center items-center mr-9">
          <Landmark size={35} color="black" />
          <h1 className="font-bold text-uppercase text-[25px] text-blackClaire">
            FinPay
          </h1>
        </div>

        <div className=" flex-[1.5] w-[300px] flex flex-row justify-center gap-6 flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px] "
            >
              <h4 className="font-poppins font-semibold text-[18px] leading-[27px] text-blueFoncee">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-normal font-poppins text-[16px] leading-[24px] text-gray-500  ${index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"} hover:text-blueClaire cursor-pointer`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className=" flex md:mt-0 mt-6 flex-col justify-center items-start gap-6">
          <h4 className="font-poppins text-center font-semibold text-[18px] leading-[27px] text-blueFoncee">
            Follow us
          </h4>
          <div className="flex gap-6 justify-center items-center">
            <FaInstagram size={25} className="text-blueFoncee cursor-pointer" />
            <FaLinkedin size={25} className="text-blueFoncee cursor-pointer" />
            <FaTwitter size={25} className="text-blueFoncee cursor-pointer" />
          </div>
        </div>
      </div>
      <div ref={elementRef} className={`reveal reveal-bottom ${isVisible ? "show" : ""} delay-200 w-full bg-gray-50 flex justify-center items-center py-6 border-t-[1px] border-gray-300`}>
        <p className="text-center text-gray-500 text-sm">
          &copy; 2026 FinPay. All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer;
