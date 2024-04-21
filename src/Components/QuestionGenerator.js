import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import QueCard from './QueCard';
import { Audio } from 'react-loader-spinner'
import Footer from './Footer';
import { Navbar } from './Navbar';

const QuestionGenerator = ({text, title}) => {
  const [generatedText, setGeneratedText] = useState('');
  const [questionList, setQuestionList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answerArray, setAnswerArray] = useState([0,0,0,0])

  useEffect(() => {
    const genAI = new GoogleGenerativeAI("AIzaSyCNsQkeai39OfYFfMRYaaAWEmwHyhDrb5Q");

    const run = async () => {
      // For text-only input, use the gemini-pro model
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = `Create me 4 questions with 4 options of which 1 is correct and give me this in json format with 3 variables 1.correct_answer which should be the index of the correct answer in options array 2.options (array) 3.question and starting with '[' and ending with ']' of this given text : ${text}`;

      try {
        setLoading(true);
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();
        setGeneratedText(text);
        console.log(text)
        const jsonObj = JSON.parse(text)
        console.log(jsonObj)
        setQuestionList(jsonObj)
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    run();

    // Cleanup function to cancel any pending requests
    return () => {
      // Cleanup logic if needed
    };
  }, []); // Empty dependency array to run once when the component mounts

  return (
    <div className=' w-full bg-black'>
      <Navbar/>
        <div className=' text-white text-4xl text-center p-5 pt-[8rem] pb-[3rem]'>QUIZ - <span className='text-white'>{title}</span></div>
        <div className=' w-full h-1 bg-red-700'></div>
        {
            loading ? (<div className='h-screen text-white flex justify-center items-center'>
            <Audio
              height="160"
              width="160"
              radius="10"
              color="green"
              ariaLabel="three-dots-loading"
              wrapperStyle
              wrapperClass
            />
            </div>) :
            (
                <div className={`flex flex-col justify-center text-xl items-center p-10 gap-5 ${showScore ? ' opacity-50 touch-none' : ''}`}>
                    {
                        questionList.map( (data, index) => (<QueCard key={index} id={index} data = {data} answerArray = {answerArray} setAnswerArray = {setAnswerArray}/>) )
                    }
                </div>
            )
        }
        
        <div className='w-full flex items-center justify-center p-[50px] flex-col space-y-10'>
            <button className='text-center text-2xl flex items-center justify-center  bg-red-600 rounded-full w-[8rem] h-[3rem] self-center p-5' onClick={ () => {
              questionList.map( (ans, index) => {
                if(ans.correct_answer == answerArray[index]){
                  setScore(score + 1)
                }
              } )
              setShowScore(true)
            } }>Submit</button>
            {
                showScore && (
                    <div className='text-white text-2xl'>Your score is : {score}</div>
                )
            }
        </div>


      <Footer/>
    </div>
  );
};

export default QuestionGenerator;
