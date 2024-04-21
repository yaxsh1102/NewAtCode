import React, { useContext } from "react";
import  {Navbar}  from "./Navbar";
import {Footer} from "./Footer";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";



const Components = ({topic}) => {

  const {email, setEmail, out, setOut} = useContext(AppContext);

  let str="";

  if(topic.toLowerCase()=="Master Java Basics and Ace Interviews".toLowerCase())
  {
    str="/course1";
  }
  if(topic.toLowerCase()=="Core Java and Fundamentals".toLowerCase())
  {
    str="/course2";
  }
  if(topic.toLowerCase()=="Advanced Java and Gui implementation".toLowerCase())
  {
    str="/course3";
  }
  if(topic.toLowerCase()=="Learn Python and get a strong hold on AI/ML".toLowerCase())
  {
    str="/course4";
  }
  if(topic.toLowerCase()=="Learn Python OOPS for strong fundamentals".toLowerCase())
  {
    str="/course5";
  }
  if(topic.toLowerCase()=="Learn Django for backend expertise".toLowerCase())
  {
    str="/course6";
  }
  if(topic.toLowerCase()=="ReactJS to build strong and interactive UI".toLowerCase())
  {
    str="/course7";
  }
  if(topic.toLowerCase()=="React Redux to master ReactJS".toLowerCase())
  {
    str="/course8";
  }
  if(topic.toLowerCase()=="React Recoil to optimise your website".toLowerCase())
  {
    str="/course9";
  }
  if(topic.toLowerCase()=="PostgreSQL to strengthen Database concepts".toLowerCase())
  {
    str="/course10";
  }
   if(topic.toLowerCase()=="MySQL to master scalability in Database".toLowerCase())
  {
    str="/course11";
  }
  if(topic.toLowerCase()=="MongoDB to fasten your database".toLowerCase())
  {
    str="/course12";
  }

  return (
    <div className="h-full bg-[#161a1d]">
    <Navbar className="mt-[-10rem]" />
    <div className="flex justify-center items-center w-full flex-col bg-[#161a1d] text-white gap-y-8 overflow-hidden">
      <div className="flex mt-[10rem] justify-evenly">
        <div className="flex flex-col gap-y-14 min-w-[40rem]">
          <p className="text-[2rem]  font-semibold">{topic}</p>
          {
            out ? (
              <Link to={str} className="h-[2.6rem] w-[7rem] bg-red-700 text-white text-[1rem] flex items-center justify-center hover:bg-red-600 rounded-sm">
            Open Course
              </Link>
            ) : (<p className="text-2xl text-[#ff0031]">Please Sign or Login</p>)
          }
        </div>

        <div className="flex w-[40%] flex-col gap-y-3">
          <p className="text-[1.4rem] font-medium">Course</p>
          <div className="flex flex-col gap-y-3">
            <p>Gain insight into a topic and learn the fundamentals</p>
            <div className="w-[23rem] h-[1.2px] bg-gray-500"></div>
            <p>Instructor: David Malan</p>
          </div>
        </div>
      </div>
      <div className="w-[66%] shadow-xl shadow-[#4b4b4b] flex justify-evenly items-center gap-x-8 mt-10 border- h-[10rem] bg-black rounded-md">
        <div className="flex justify-center items-center gap-x-2 flex-col">
          <p className="text-[1.5rem] flex justify-center items-center gap-x-2 font-normal">
            4.7
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="red"
              viewBox="0 0 256 256"
            >
              <path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"></path>
            </svg>
          </p>
          <p>(17,009 Reviews)</p>
        </div>

        <div className="flex justify-center items-center flex-col">
          <p className="text-[1.5rem] font-normal">40 hours to complete</p>
          <p>3 weeks at 13 hours a week</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <p className="text-[1.5rem] font-normal">Flexible Schedule</p>
          <p>Learn at your own pace</p>
        </div>
      </div>
      <div className="min-w-[66%] flex flex-col  gap-y-12 mt-12">
        <p className="text-[1.8rem] font-normal">Skills you'll gain</p>
        <div className="flex gap-x-8 text-[1rem]">
          <p className="bg-gray-800 h-[2rem] flex justify-center items-center min-w-[5rem] max-w-[13rem] px-2">
            RDBMS
          </p>
          <p className="bg-gray-800 flex justify-center items-center min-w-[4rem] max-w-[13rem] px-2">
            Database Basics
          </p>
          <p className="bg-gray-800 flex justify-center items-center min-w-[4rem] max-w-[13rem] px-2">
            CRUD
          </p>
          <p className="bg-gray-800 flex justify-center items-center min-w-[4rem] max-w-[13rem] px-2">
            Database Integration
          </p>
        </div>
      </div>

      <div className="w-[66%] flex flex-col gap-y-8 mt-10 mb-6">
        <p className="text-[1.8rem] font-normal">Description</p>
        <p>
          Do you realize that the only functionality of a web application that
          the user directly interacts with is through the web page? Implement it
          poorly and, to the user, the server-side becomes irrelevant! Todays
          user expects a lot out of the web page: it has to load fast, expose
          the desired service, and be comfortable to view on all devices: from a
          desktop computers to tablets and mobile phones
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Components;
