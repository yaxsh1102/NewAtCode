import React, { useState } from 'react'
import '../index.css'
import { Navbar } from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'


const CoursePage = ({source,domain,topic,Transcripts}) => {


    let str="";

    if(domain.toLowerCase()=="Java".toLowerCase())
  {
    str="/quiz1";
  }
  if(domain.toLowerCase()=="Core Java".toLowerCase())
  {
    str="/quiz2";
  }
  if(domain.toLowerCase()=="Advanced Java".toLowerCase())
  {
    str="/quiz3";
  }
  if(domain.toLowerCase()=="Python AI/ML".toLowerCase())
  {
    str="/quiz4";
  }
  if(domain.toLowerCase()=="Python OOPS".toLowerCase())
  {
    str="/quiz5";
  }
  if(domain.toLowerCase()=="Python Django".toLowerCase())
  {
    str="/quiz6";
  }
  if(domain.toLowerCase()=="React UI".toLowerCase())
  {
    str="/quiz7";
  }
  if(domain.toLowerCase()=="React Redux".toLowerCase())
  {
    str="/quiz8";
  }
  if(domain.toLowerCase()=="React Recoil".toLowerCase())
  {
    str="/quiz9";
  }
  if(domain.toLowerCase()=="Database Concepts".toLowerCase())
  {
    str="/quiz10";
  }
   if(domain.toLowerCase()=="Database MySql".toLowerCase())
  {
    str="/quiz11";
  }
  if(domain.toLowerCase()=="Database MongoDb".toLowerCase())
  {
    str="/quiz12";
  }

  return (
    <div className='bg-[#282828]'>
    <Navbar/>
    <div className="relative max-w-[100%] mb-[-4rem] w-full h-full flex flex-wrap pt-[4rem] flex-col items-center justify-center bg-[#282828]">
    
        <div className='text-white text-3xl font-semibold mt-[4rem]'>{topic}</div>
        
        <div className="lg:w-[75rem] flex xl:flex-row flex-col lg:items-start justify-center xl:space-x-4 min-h-screen sm:h-full gap-y-6 px-[5rem] xl:px-2 py-[3rem]">

            <div className="w-full xl:w-[60rem] h-[33rem] rounded-3xl p-3">

                <video controls autoplay className='rounded-3xl border-4 shadow-md w-full h-full object-cover'>
                    <source src={source} type="video/mp4"/>
                </video>
            </div>

            <div className="bg-black w-full min-h-[32rem] flex flex-col xl:w-[23rem] rounded-md mt-[0.8rem]">
                <div className="bg-[#ff0031] text-white text-[1rem] font-rubik font-semibold  py-3 px-6 rounded-t-md">

                    <div className="flex w-[15.75rem] min-w-[50%] h-full gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fillColorDetails" width = "20px" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="list-format"><path d="M7,8h14c0.6,0,1-0.4,1-1s-0.4-1-1-1H7C6.4,6,6,6.4,6,7S6.4,8,7,8z M21,11H7c-0.6,0-1,0.4-1,1s0.4,1,1,1h14c0.6,0,1-0.4,1-1
                            S21.6,11,21,11z M21,16H7c-0.6,0-1,0.4-1,1s0.4,1,1,1h14c0.6,0,1-0.4,1-1S21.6,16,21,16z M3.7,6.3C3.6,6.2,3.5,6.1,3.4,6.1
                            C3,5.9,2.6,6,2.3,6.3C2.2,6.4,2.1,6.5,2.1,6.6C2,6.9,2,7.1,2.1,7.4c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.2,0.2,0.3,0.2
                            C2.7,8,2.9,8,3,8c0.3,0,0.5-0.1,0.7-0.3c0.1-0.1,0.2-0.2,0.2-0.3C4,7.1,4,6.9,3.9,6.6C3.9,6.5,3.8,6.4,3.7,6.3z M3.7,11.3
                            C3.4,11,3,10.9,2.6,11.1c-0.1,0.1-0.2,0.1-0.3,0.2c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3
                            c0.1,0.1,0.2,0.2,0.3,0.2C2.7,13,2.9,13,3,13c0.1,0,0.3,0,0.4-0.1c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.2,0.2-0.3
                            c0.1-0.2,0.1-0.5,0-0.8C3.9,11.5,3.8,11.4,3.7,11.3z M3.7,16.3c-0.1-0.1-0.2-0.2-0.3-0.2c-0.2-0.1-0.5-0.1-0.8,0
                            c-0.1,0-0.2,0.1-0.3,0.2c-0.1,0.1-0.2,0.2-0.2,0.3C1.9,17,2,17.4,2.3,17.7c0.1,0.1,0.2,0.2,0.3,0.2C2.7,18,2.9,18,3,18
                            c0.1,0,0.3,0,0.4-0.1c0.1-0.1,0.2-0.1,0.3-0.2C4,17.4,4.1,17,3.9,16.6C3.9,16.5,3.8,16.4,3.7,16.3z"></path></svg>
                        <p>Course Content</p>
                    </div>
                   
                </div>

                    <div  className="flex p-[1rem] border-b-2 border-white w-full gap-1 text-white hover:bg-white hover:text-black transition duration-200"  >
                        {domain} Class-1
                    </div>
                    <div  className="flex p-[1rem] border-b-2 border-white w-full gap-1 text-white hover:bg-white hover:text-black transition duration-200" >
                        {domain} Class-2 
                    </div>
            </div>
        </div>

        <div className="lg:w-[75rem] flex flex-col lg:items-start justify-center xl:space-x-4 min-h-screen sm:h-full gap-y-6 px-[5rem] xl:px-2 py-[5rem]">
            
            <div className='space-y-3'>
                <p className='text-white text-5xl'>Transcript</p>
                <div className='w-[74rem] h-1 bg-[#ff0031]'></div>
            </div>

            <div className='text-white text-lg h-[30rem] overflow-scroll overflow-x-hidden border-2 border-white p-4 shadow-lg shadow-[#777777]'>
                {Transcripts}
                   </div>
        </div>

        <div className='space-y-6'>
            <div className='space-y-3'>
                <p className='text-[#ff0031] text-5xl'>Quiz</p>
                <div className='w-[74rem] h-1 bg-white'></div>
            </div>

            <div className='w-full flex items-center justify-center p-10'>
                <Link to={str} className='bg-[#ff0031] text-center text-2xl text-white p-3 w-[10rem] rounded-2xl'>Quiz</Link>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default CoursePage
