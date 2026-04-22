import useIntersectionObserver from "./useIntersectionObserver"

function Step() {
  const {elementRef, isVisible} = useIntersectionObserver({threshold:0});
  return (
    <section className="w-full justify-start h-[100%] p-[60px]">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
        <div>
          <h4 className="text-blueClaire uppercase font-bold">
            Step
          </h4>
          <h2 ref={elementRef} className={`reveal reveal-bottom ${isVisible ? "show" : ""} delay-0 text-[25px] sm:text-[45px] font-bold text-gray-50`}>
            Maximize your returns with a <br className="sm:flex hidden" /> Reserve account that generated.
          </h2>
        </div>
       </div>

      <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-6">
        <div ref={elementRef} className={` reveal reveal-bottom sm:reveal-left ${isVisible ? "show" : ""} delay-0 sm:delay-500 mt-5 bg-blueClaire p-5 rounded-[10px] hover:shadow-lg hover:scale-110 hover:delay-0`}>
            <h2 className='text-primary text-[60px] font-bold opacity-80'>1</h2>
            <h4 className="font-semibold text-[25px] text-white mb-5">Open your account</h4>
            <p className="text-[16px] max-w-[400px] text-gray-100">Create a finacial experienceay and automate repeat purchases</p>
        </div>
        <div ref={elementRef} className={` reveal reveal-bottom sm:reveal-left ${isVisible ? "show" : ""} delay-0 sm:delay-800 mt-5 bg-blueClaire p-5 rounded-[10px] hover:shadow-lg hover:scale-110 hover:delay-0`}>
            <h2 className='text-primary text-[60px] font-bold opacity-80'>2</h2>
            <h4 className="font-semibold text-[25px] text-white mb-5">Transfer your money</h4>
            <p className="text-[16px] max-w-[400px] text-gray-100">Create a finacial experienceay and automate repeat purchases</p>
        </div>
        <div ref={elementRef} className={` reveal reveal-bottom sm:reveal-left ${isVisible ? "show" : ""} delay-0 sm:delay-1100 mt-5 bg-blueClaire p-5 rounded-[10px] hover:shadow-lg hover:scale-110 hover:delay-0`}>
            <h2 className='text-primary text-[60px] font-bold opacity-80'>3</h2>
            <h4 className="font-semibold text-[25px] text-white mb-5">Whatch your balance grow</h4>
            <p className="text-[16px] max-w-[400px] text-gray-100">Create a finacial experienceay and automate repeat purchases</p>
        </div>
      </div>
    </section>
  )
}

export default Step