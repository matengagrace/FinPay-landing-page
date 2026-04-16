import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Princing from "./components/Princing";
import Experiences from "./components/Experiences";
import Step from "./components/Step";
import Mission from "./components/Mission";
import CTA from "./components/CTA";
import Footer from "./components/Footer";


function App() {
  
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className=" bg-primary w-[100%] fixed top-0 z-[5]">
        <div className="w-[90%] flex justify-center items-center left-[5%] bg-primary mx-auto">
          <Navbar />
        </div>
      </div>

      <div className="w-[90%] sm:w-[84%] flex justify-center items-center mx-auto mt-15">
        <Hero />
      </div>

      <div className="w-full bg-gray-50 relative h-[1200px] sm:h-[600px]">
        <div className="w-full bg-primary h-[200px]"></div>
        <div id="products"  className=" w-[90%] sm:h-[500px] flex justify-center items-center mx-auto mt-15 bg-white rounded-[10px] shadow-lg absolute top-0 left-[5%]">
          <Princing />
        </div>
      </div>

      <div className="w-full bg-gray-50 flex justify-center items-center">
        <div id="customers" className="w-[80%] flex justify-center items-center mx-auto bg-gray-50 rounded-[10px] py-5">
          <Experiences />
        </div>
      </div>

      <div className="w-full bg-blueFoncee py-5">
        <div id="pricing" className="w-[90%] flex justify-center items-center mx-auto mt-15">
          <Step />
        </div>
      </div>

      <div className="w-full bg-gray-50 flex justify-center items-center py-6">
        <div id="learn" className="w-[80%] flex justify-center items-center mx-auto  bg-white rounded-[10px]">
          <Mission/>
        </div>
      </div>
      <div className="w-full bg-gray-50 flex justify-center flex-col items-center py-6">
        <div className="w-[90%] flex justify-center items-center mx-auto  bg-blueFoncee rounded-[10px]">
          <CTA/>
        </div>
        <div className="w-[90%] pt-9">
          <Footer/>
        </div>
      </div>

    </div>
  );
}

export default App;
