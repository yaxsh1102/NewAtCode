import React from 'react'
import photo from '../photo1.png'
import hero from '../hero-img.png'

export const Hero = () => {
  return (
   
    <section  className=" bg-black w-screen h-[40rem] flex items-center justify-center mt-[6rem] ">

            <div className = " flex items-center justify-center w-[80rem] h-[30rem] bg-[#000015] py-[1rem] border-2 rounded-2xl shadow-md shadow-white">
             
                <div className = "flex flex-wrap min-w-[60%] p-8 mt-[-1rem] flex-col justify-center items-center space-y-10">
                    
                    <div className="flex flex-col w-full justify-center items-center lg:max-w-[790px] text-center gap-10">
                        <h1 className="text-gray-50 text-5xl sm:text-[3.5rem] font-semibold">Crack the Code to Success with our <span className='text-[#ff0031] text-5xl sm:text-[3.5rem] font-semibold'>StudySphere</span></h1>
                        <p className="text-gray-400 text-[1.6rem] font-normal sm:max-w-[500px]">Elevate your programming skills, solve challenges, and unlock the world of coding possibilities.</p>
                    </div>
                    

                </div>

              
                <div className="relative place-content-end lg:block hidden min-w-[40%] h-[500px]">
                    <div className = "w-full pb-[5.6rem] mt-[-4.5rem] ">
                        <img  src={hero} alt="Hero Section Image" loading="lazy" />
                    </div>
                </div>

            </div>
    </section>
  )
}
