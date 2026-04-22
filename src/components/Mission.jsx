
import { ArrowUp } from "lucide-react";
import useIntersectionObserver from "./useIntersectionObserver";


function Mission() {
  const {elementRef, isVisible} = useIntersectionObserver({threshold:0.0});
  return (
    <section className="bg-gray-50 w-full justify-center h-[100%] py-10">
      <div className=" justify-center items-center flex-col flex ">
        <h4 className="text-blueClaire uppercase font-bold mt-5">Our mission</h4>
        <h2 ref={elementRef} className={` reveal reveal-bottom ${isVisible ? "show" : ""} text-[30px] sm:text-[45px] font-bold text-blackClaire text-center`}>
          We've helped <br className='sm:flex hiddens' /> innovation companies
        </h2>
        <p ref={elementRef} className={`reveal reveal-bottom ${isVisible ? "show" : ""} delay-40 text-gray-800 mt-5 max-w-[350px] text-center `}>
          Our mission is to provide a secure and reliable platform for businesses to manage.
        </p>
      </div>

      <div ref={elementRef} className={`reveal reveal-bottom ${isVisible ? "show" : ""} delay-60 flex justify-around items-center mt-6 flex-col sm:flex-row gap-5`}>
        <div className='flex flex-col items-center justify-center'>
            <h4 className='text-[50px] font-bold text-blackClaire'>24%</h4>
            <p className='text-[18px]'>Revenue business</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h4 className='text-[50px] font-bold text-blackClaire'>180K</h4>
            <p className='text-[18px]'>In annuel Revenue </p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h4 className='text-[50px] font-bold text-blackClaire'>10+</h4>
            <p className='text-[18px]'>Months of runway</p>
        </div>
      </div>

      <div ref={elementRef} className={`reveal reveal-bottom ${isVisible ? "show" : ""} delay-100 justify-center items-center flex-col flex py-5 mt-5`}>
        <h4 className="text-blueClaire uppercase font-bold mt-5">Choose plan:</h4>
        <div className=" w-full flex justify-around items-center gap-6 mt-5 flex-col sm:flex-row">
            <div className="bg-primary text-blackClaire px-6 p-4 flex flex-col justify-between rounded-md w-full h-[200px] hover:shadow-lg duration-1000 hover:scale-105">
                <h5 className="font-bold text-[40px]">Plus</h5>
                <div className='flex justify-between items-center'>
                    <p className="text-lg font-bold">$2.99/month</p>
                    <ArrowUp className="text-gray-800" />
                </div>
            </div>
            <div className=" bg-blueClaire text-white px-6 p-4 flex flex-col justify-between rounded-md w-full h-[200px] hover:shadow-lg duration-1000 hover:scale-105">
                <h5 className="font-bold text-[40px]">Premium</h5>
                <div className='flex justify-between items-center'>
                    <p className="text-lg font-bold">$19.99/month</p>
                    <ArrowUp className="text-white" />
                </div>
            </div>
            
        </div>
      </div>
     
    </section>
  )
}

export default Mission