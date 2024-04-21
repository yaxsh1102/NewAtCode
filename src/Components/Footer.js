import React from 'react'


export const Footer = () => {
  return (
    <div>
        <footer className="w-full min-w-screen sm:min-h-fit h-full min-h-screen mx-auto flex flex-col items-center justify-center bg-black mt-[10rem] p-[4rem] border-t-2 border-white">
            
            <div className="w-full text-white mx-auto flex flex-col items-center justify-center gap-y-8">
                <div className="flex w-full flex-col items-center md:items-start gap-x-24 gap-y-12 md:flex-row md:justify-around md:gap-0 my-6">
                    <div className="flex flex-col items-center sm:items-start gap-y-3 px-4 text-center md:text-start">
                        <div className="flex justify-center items-center gap-x-3">
                            <div className="font-semibold text-4xl text-center md:text-left text-[#ff0031]">StudySphere
                            </div>
                        </div>
                        <span className="text-lg max-w-[300px] font-normal">Empowering Minds, Shaping Futures.
                        </span>
                    </div>
                    <div className="flex flex-col gap-y-7 mt-2 text-center text-base md:text-left ">
                        <p className="font-medium text-center text-lg md:text-left">Quick Links</p>
                        <div className="flex flex-col gap-y-8 ">
                            <div>
                                <span className="text-lg font-normal hover:text-[#ff0031] cursor-pointer">Home
                                </span>
                            </div>
                            <div>
                                <span className="text-lg font-normal hover:text-[#ff0031] cursor-pointer">Courses
                                </span>
                            </div>
                            <div>
                                <span className="text-lg font-normal hover:text-[#ff0031]  cursor-pointer">Contact
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-7 mt-2 text-center text-base md:text-left">
                        <span className="font-medium text-center text-lg md:text-left">Legal</span>
                        <div className="flex flex-col  gap-y-8">
                            <div>
                                <span className="text-lg font-normal text-shark-300 hover:text-[#ff0031] cursor-pointer">Privacy Policy
                                </span>
                            </div>
                            <div>
                                <span className="text-lg font-normal text-shark-300 hover:text-[#ff0031] cursor-pointer">Terms of use
                                </span>
                            </div>
                            <div>
                                <span className="text-lg font-normal text-shark-300 hover:text-[#ff0031] cursor-pointer">Refund &amp; Cancellation Policy
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-7 mt-2 text-center text-base md:text-left">
                        <p className="font-medium text-center text-lg md:text-left">GET IN TOUCH</p>
                        <div className="flex items-center gap-x group cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" className="w-5 h-5 fill-white group-hover:fill-[#ff0031]">
                                <path d="m1.895 5.026 8.136 8.136c.504.503 1.3.534 1.84.094l.105-.094 8.13-8.13q.04.15.054.308l.007.16v11c0 .967-.748 1.759-1.697 1.829l-.137.005H3.667a1.833 1.833 0 0 1-1.829-1.697l-.005-.137v-11q0-.165.028-.32zm16.438-1.359q.167 0 .326.029l.155.035-7.81 7.81L3.192 3.73q.15-.041.312-.055l.163-.007z">
                                </path>
                            </svg>
                            <p className="font-medium text-shark-300 group-hover:text-[#ff0031]">
                                <div className='text-lg'>Support@studysphere.in</div>
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="w-full h-[1px] bg-slate-400 my-5 mt-[3rem] mb-[3rem]"></div>
            <div className="text-lg text-center text-white justify-center items-center flex mt-2">Copyright © 2024 Study Sphere Technologies Pvt Ltd. All Rights Reserved.
            </div>
        </footer>
    </div>
  )
}

export default Footer
