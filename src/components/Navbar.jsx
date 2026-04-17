import {useState} from "react";
import { Landmark } from "lucide-react";
import { navLinks } from "../constants";

import { menu, close } from "../assets";


function Navbar() {
    const [toggle, setToggle] = useState(false)
  return (
    <nav className="w-full flex py-6 justify-between items-center">
      <div className="flex justify-center items-center gap-10">
        <div className="flex justify-center items-center mr-9">
          <Landmark size={35} color="black" />
          <h1 className="font-bold text-uppercase text-[25px] text-blackClaire">
            FinPay
          </h1>
        </div>

        <ul className="list-none hidden justify-center items-center flex-1 md:flex">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-semibold cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} text-blackClaire`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden sm:flex justify-center items-center gap-6">
        <button className="btn-primary bg-transparent border-blueClaire text-blackClaire hover:bg-blueClaire hover:text-white">Login</button>
        <button className="btn-primary bg-blueClaire text-primary border-0">Sign Up</button>
      </div>

       <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt="menu" className='w-[30px] h-[30px] rounded-[5px]' onClick={()=>{setToggle(!toggle)}}/>

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-blueClaire absolute top-20 right-[-35px] mx-4 my-2 min-w-[240px] h-screen rounded-xl flex flex-col justify-end items-end text-right`}>
          <ul className='list-none flex flex-col items-end text-right flex-1 gap-4 w-full pr-2'>
            {navLinks.map((nav,index)=>(
              <li key={nav.id} className={`font-poppins font-semibold text-right rounded-xl px-4 py-1 hover:bg-primary w-full hover:text-blueClaire cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mb-4'} text-white`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <button className="btn-primary bg-transparent border-primary mr-3 text-white hover:bg-primary hover:text-blackClaire">Login</button>
           <button className="btn-primary bg-primary text-blueClaire border-0 mr-3 hover:border hover:border-primary hover:bg-blueClaire hover:text-white">Sign Up</button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
