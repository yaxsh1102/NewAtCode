import React, { useContext } from 'react'
import '../index.css';
import { useState } from 'react';
import {FcGoogle} from 'react-icons/fc'
import Login from './Login';
import { AppContext } from '../Context/AppContext';


const Signup = ({   setLog,setSign}) => {

    const [signin,  setSignin] = useState(false);
    const [signup,setSignUp] = useState(false);

    const {email, setEmail, out, setOut} = useContext(AppContext);
    

    const [formData, setFormData] = useState({
        fullName:"", email: "", password:""
    });

    function changeHandler(event){
        const {name, value} = event.target;
        setFormData( (prev) => ( {...prev, [name]:value}) );
    }

    function submitHandler(event){
        event.preventDefault();
        setSignin(true);
        signUP()
        console.log(formData);
    }

    const clickHandler = () => {
        setSignin(!signin);
    }

    function closeHandler(){
        setSignin(!signin);
    }

    function closeHandler2(){
        setSignin(!signin);
        setSignUp(true);
    }
    async function signUP(e)
    {
       const response = await fetch("http://localhost:7000/api/v1/signup", {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ username : formData.fullName , email: formData.email, password: formData.password }),
        });
 
 
        console.log(response) 
        const d = await response.json()
        console.log(d)
        
 
        if(response.status==401)
        {
          //No user found
          //show back to signup
        }
        else if(response.status===403)
        {
          //Password does not match
         }
     if(response.status===200) 
        {
         console.log("done in")
         //navigate to menu
         setLog(false);
         setSign(false);
         setOut(true);
         closeHandler2();
         setEmail(formData.email);
        }
    }

    return (
        <div>
        <button onClick={clickHandler} className='min-w-[5rem] h-[2.5rem] rounded-lg flex items-center bg-[#ff0031] text-white text-[1.2rem] font-semibold px-[1rem] font-oswald hover:bg-white hover:text-[#ff0031]'>SignUp</button>

        <form onSubmit={submitHandler}>
            {signin && (
                <div className='login flex overflow-hidden items-center place-content-center z-20 justify-center w-[50rem] text-center overlay'>
                    <div className='relative text-black w-[30rem] flex-col self-center rounded-tl-lg rounded-bl-lg h-[85%] bg-white overflow-x-hidden flex items-center place-content-center justify-start p-7 space-y-4'>

                        
                    <span className='absolute w-10 h-10 flex items-center justify-center text-xl left-8 bg-slate-300 rounded-full p-3 cursor-pointer' onClick={closeHandler}>&#x2715;</span>

                        <div className='flex flex-col'>
                            <span className='text-[30px] text-[#1f1f1f]'>Sign Up</span>
                            <span className='max-w-[15rem]'>Welcome to StudySphere</span>
                        </div>

                        <fieldset className='w-[20rem] space-y-2'>
                            <legend className='text-left text-sm font-semibold'> FULL NAME </legend>
                            
                            <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={ changeHandler } className ="border p-6 h-5 text-xl w-full font-thin" placeholder='Enter your full name'/>
                        </fieldset>

                        <fieldset className='w-[20rem] space-y-2'>
                            <legend className='text-left text-sm font-semibold'> EMAIL </legend>
                            
                            <input type="email" name="email" id="email" value={formData.email} onChange={ changeHandler } className ="border p-6 h-5 text-xl w-full font-thin" placeholder='name@email.com'/>
                        </fieldset>

                        <fieldset className='w-[20rem] space-y-2'>
                            <legend className='text-left text-sm font-semibold'> PASSWORD </legend>
                            
                            <div className='space-y-1'>
                                <input type="password" name="password" id="password" value={formData.password} onChange={ changeHandler } className ="border p-6 h-5 text-xl w-full font-thin" placeholder='Enter your password'/>
                                <div className='text-sm text-left text-slate-400'>Between 8 and 72 characters</div>
                            </div>
                        </fieldset>

                        <button className='bg-[#0056d2] font-bold text-white text-center p-3 w-[20rem] rounded-md'>Sign Up</button>

                        <div className=' flex w-[20rem] items-center my4 gap-x-2'>
                            <div className=' h-[1px] bg-slate-800 w-full'></div>
                            <p className=' text-slate-800 font-medium leading-[1.375rem]'>OR</p>
                            <div className=' h-[1px] bg-slate-800 w-full'></div>
                        </div>

                        <button 
                        className=' w-[20rem] flex justify-center items-center rounded-[8px] font-medium text-white bg-[#353535] border border-slate-700 px-[12px] py-[8px] gap-x-2 mt-6'
                        >
                        <FcGoogle/>
                            <p>Continue with Google</p>
                        </button>

                    </div>
                </div>
            )}
        </form>
        
        </div>
    )
}

export default Signup
