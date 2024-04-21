import React, { useContext } from 'react'
import Login from './Login'
import Signup from './Signup'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AppContext } from '../Context/AppContext'

// const java = [
//     {
//       id:0,
//       domain: "Java",
//       title: "StudySphere Project Network",
//       topic: "Master Java Basics and Ace Interviews",
//       src: "java.png",
//     },
//     {
//       id:1,
//       domain: "Java",
//       title: "StudySphere Project Network",
//       topic: "Core Java and Fundamentals",
//       src: "core-java.png",
//     },
//     {
//       id:2,
//       domain: "Java",
//       title: "StudySphere Project Network",
//       topic: "Advanced Java and Gui implementation",
//       src: "java-adv.png",
//     },
//   ];

//   const python = [
//     {
//       id:3,
//       domain: "Python",
//       title: "StudySphere Project Network",
//       topic: "Learn Python and get a strong hold on AI/ML",
//       src: "python.png",
//     },

//     {
//       id:4,
//       domain: "Python",
//       title: "StudySphere Project Network",
//       topic: "Learn Python OOPS for strong fundamentals",
//       src: "oops.png",
//     },
//     {
//       id:5,
//       domain: "Python",
//       title: "StudySphere Project Network",
//       topic: "Learn Django for backend expertise",
//       src: "django.png",
//     },
//   ];

//   const react = [
//     {
//       id:6,
//       domain: "React JS",
//       title: "StudySphere Project Network",
//       topic: "ReactJS to build strong and interactive UI",
//       src: "react.png",
//     },
//     {
//       id:7,
//       domain: "React JS",
//       title: "StudySphere Project Network",
//       topic: "React Redux to master ReactJS",
//       src: "redux.png",
//     },
//     {
//       id:8,
//       domain: "React JS",
//       title: "StudySphere Project Network",
//       topic: "React Recoil to optimise your website",
//       src: "recoil.png",
//     },
//   ];
//   const database = [
//     {
//       id:9,
//       domain: "Database",
//       title: "StudySphere Project Network",
//       topic: "PostgreSQL to strengthen Database concepts",
//       src: "postgre.png",
//     },
//     {
//       id:10,
//       domain: "Database",
//       title: "StudySphere Project Network",
//       topic: "MySQL to master scalability in Database",
//       src: "mysql.png",
//     },
//     {
//       id:11,
//       domain: "Database",
//       title: "StudySphere Project Network",
//       topic: "MongoDB to fasten your database",
//       src: "mongo.png",
//     },
//   ];


export const Navbar = () => {

    const navigate=useNavigate();
    const{sign , setSign}=useContext(AppContext) ;
    const{log,setLog}=useContext(AppContext);
    const{out,setOut} =useContext(AppContext);
    const[mylearning,setMyLearning] = useState(true);

    function handler()
    {
        setLog(true);
        setSign(true);
        setOut(false);
    }

    function handleKey(event)
    {
        if(event.key=="Enter")
        {
            if(event.target.value.toLowerCase()=="Master Java Basics and Ace Interviews".toLowerCase())
            {
                navigate("/enroll0");
            }
            if(event.target.value.toLowerCase()=="Core Java and Fundamentals".toLowerCase())
            {
                navigate("/enroll1");
            }
            if(event.target.value.toLowerCase()=="Advanced Java and Gui implementation".toLowerCase())
            {
                navigate("/enroll2");
            }
            if(event.target.value.toLowerCase()=="Learn Python and get a strong hold on AI/ML".toLowerCase())
            {
                navigate("/enroll3");
            }
            if(event.target.value.toLowerCase()=="Learn Python OOPS for strong fundamentals".toLowerCase())
            {
                navigate("/enroll4");
            }
            if(event.target.value.toLowerCase()=="Learn Django for backend expertise".toLowerCase())
            {
                navigate("/enroll5");
            }
            if(event.target.value.toLowerCase()=="ReactJS to build strong and interactive UI".toLowerCase())
            {
                navigate("/enroll6");
            }
            if(event.target.value.toLowerCase()=="React Redux to master ReactJS".toLowerCase())
            {
                navigate("/enroll7");
            }
            if(event.target.value.toLowerCase()=="React Recoil to optimise your website".toLowerCase())
            {
                navigate("/enroll8");
            }
            if(event.target.value.toLowerCase()=="PostgreSQL to strengthen Database concepts".toLowerCase())
            {
                navigate("/enroll9");
            }
             if(event.target.value.toLowerCase()=="MySQL to master scalability in Database".toLowerCase())
            {
                navigate("/enroll10");
            }
            if(event.target.value.toLowerCase()=="MongoDB to fasten your database".toLowerCase())
            {
                navigate("/enroll11");
            }
           event.target.value="";
        }
    }

    return (
    <div className='w-screen h-[5rem] bg-[#000015] flex justify-center border-b-2 items-center fixed z-10'>
        <div className='relative w-[80rem] h-[3rem]  flex items-center'>
            <Link to="/" className='text-[#FF0031] text-[2rem] font-moul ml-[1.4rem]'>
                StudySphere
            </Link>
            <label className='flex items-center'>
            <input className="w-[20rem] h-[2.5rem] ml-[3rem] text-white text-[1.2rem] pl-[1rem] border-2 border-white rounded-lg flex items-center bg-black" placeholder='Search Course' onKeyDown={(event)=>handleKey(event)}/>
            <svg xmlns="http://www.w3.org/2000/svg" className='ml-[1rem]' width="1.7rem" height="1.7rem" fill="#ffffff" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" ></path></svg>
            </label>
            <div className='flex absolute right-[1rem] gap-4'>
            {log && <Login setLog={setLog} setSign={setSign} setOut={setOut}/>}
            {sign && <Signup setSign={setSign} setLog={setLog} setOut={setOut}/>}
            {out &&  <Link onClick={handler} to="/" className='min-w-[5rem] h-[2.5rem] rounded-lg flex items-center bg-[#ff0031] text-white text-[1.2rem] font-semibold px-[1rem] font-oswald hover:bg-white hover:text-[#ff0031]'>LogOut</Link>}
           
            </div>
        </div>
    </div>
  )
}
