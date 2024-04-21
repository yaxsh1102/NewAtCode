import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './index.css';
import App from './App';
import Enroll from './Components/Enroll.js';
import CoursePage from './Components/CoursePage.js';
import Transcripts from './Components/Transcript.js';
import QuestionGenerator from './Components/QuestionGenerator.js';
import AppContextProvider from './Context/AppContext.js';
import MyPage from './Components/MyPage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
const java = [
  {
    domain: "Java",
    title: "StudySphere Project Network",
    topic: "Master Java Basics and Ace Interviews",
    src: "java.png",
  },
  {
    domain: "Java",
    title: "StudySphere Project Network",
    topic: "Core Java and Fundamentals",
    src: "core-java.png",
  },
  {
    domain: "Java",
    title: "StudySphere Project Network",
    topic: "Advanced Java and Gui implementation",
    src: "java-adv.png",
  },
];

const python = [
  {
    domain: "Python",
    title: "StudySphere Project Network",
    topic: "Learn Python and get a strong hold on AI/ML",
    src: "python.png",
  },

  {
    domain: "Python",
    title: "StudySphere Project Network",
    topic: "Learn Python OOPS for strong fundamentals",
    src: "oops.png",
  },
  {
    domain: "Python",
    title: "StudySphere Project Network",
    topic: "Learn Django for backend expertise",
    src: "django.png",
  },
];

const react = [
  {
    domain: "React JS",
    title: "StudySphere Project Network",
    topic: "ReactJS to build strong and interactive UI",
    src: "react.png",
  },
  {
    domain: "React JS",
    title: "StudySphere Project Network",
    topic: "React Redux to master ReactJS",
    src: "redux.png",
  },
  {
    domain: "React JS",
    title: "StudySphere Project Network",
    topic: "React Recoil to optimise your website",
    src: "recoil.png",
  },
];
const database = [
  {
    domain: "Database",
    title: "StudySphere Project Network",
    topic: "PostgreSQL to strengthen Database concepts",
    src: "postgre.png",
  },
  {
    domain: "Database",
    title: "StudySphere Project Network",
    topic: "MySQL to master scalability in Database",
    src: "mysql.png",
  },
  {
    domain: "Database",
    title: "StudySphere Project Network",
    topic: "MongoDB to fasten your database",
    src: "mongo.png",
  },
];


const router= createBrowserRouter([
  {
    path:'/',
    element:<App/>,
  },
  {
    path:'/course1',
    element:<CoursePage source={"Java1.mp4"} Transcripts={Transcripts[0]} domain={"Java"} topic={"Master Java Basics and Ace Interviews"}/>
  },
  {
    path:'/course2',
    element:<CoursePage source={"Java2.mp4"} Transcripts={Transcripts[1]} domain={"Core Java"} topic={"Core Java and Fundamentals"}/>
  },
  {
    path:'/course3',
    element:<CoursePage source={"Java3.mp4"} Transcripts={Transcripts[2]}  domain={"Advance Java"} topic={"Advanced Java and Gui implementation"}/>
  },
  {
    path:'/course4',
    element:<CoursePage source={"Python1.mp4"} domain={"Python AIML"} Transcripts={Transcripts[3]} topic={"Learn Python and get a strong hold on AI/ML"}/>
  },
  {
    path:'/course5',
    element:<CoursePage source={"Python2.mp4"} domain={"Python Oops"} Transcripts={Transcripts[4]} topic={"Learn Python OOPS for strong fundamentals"}/>
  },
  {
    path:'/course6',
    element:<CoursePage source={"Python3.mp4"} domain={"Python Django"} Transcripts={Transcripts[5]} topic={"Learn Django for backend expertise"}/>
  },
  {
    path:'/course7',
    element:<CoursePage source={"React1.mp4"} domain={"React UI"} Transcripts={Transcripts[6]} topic={"ReactJS to build strong and interactive UI"}/>
  },
  {
    path:'/course8',
    element:<CoursePage source={"React2.mp4"} domain={"React Redux"} Transcripts={Transcripts[7]} topic={"React Redux to master ReactJS"}/>
  },
  {
    path:'/course13',
    element:<CoursePage source={"React21.mp4"} domain={"React Redux"} Transcripts={Transcripts[7]} topic={"React Redux to master ReactJS"}/>
  },
  {
    path:'/course9',
    element:<CoursePage source={"React3.mp4"} domain={"React Recoil"} Transcripts={Transcripts[8]} topic={"React Recoil to optimise your website"}/>
  },
  {
    path:'/course10',
    element:<CoursePage source={"Database1.mp4"} domain={"Database Concepts"} Transcripts={Transcripts[9]} topic={"PostgreSQL to strengthen Database concepts"}/>
  },
  {
    path:'/course11',
    element:<CoursePage source={"Database2.mp4"} domain={"Database MySql"} Transcripts={Transcripts[10]} topic={"MySQL to master scalability in Database"}/>
  },
  {
    path:'/course12',
    element:<CoursePage source={"Database.mp4"} domain={"Database MongoDb"} Transcripts={Transcripts[11]} topic={"MongoDB to fasten your database"}/>
  },
  {
    path:'/enroll0',
    element:<Enroll topic={java[0].topic}/>
  },
  {
    path:'/enroll1',
    element:<Enroll topic={java[1].topic}/>
  },
  {
    path:'/enroll2',
    element:<Enroll topic={java[2].topic}/>
  },
  {
    path:'/enroll3',
    element:<Enroll topic={python[0].topic}/>
  },
  {
    path:'/enroll4',
    element:<Enroll topic={python[1].topic}/>
  },
  {
    path:'/enroll5',
    element:<Enroll topic={python[2].topic}/>
  },
  {
    path:'/enroll6',
    element:<Enroll topic={react[0].topic}/>
  },
  {
    path:'/enroll7',
    element:<Enroll topic={react[1].topic}/>
  },
  {
    path:'/enroll8',
    element:<Enroll topic={react[2].topic}/>
  },
  {
    path:'/enroll9',
    element:<Enroll topic={database[0].topic}/>
  },
  {
    path:'/enroll10',
    element:<Enroll topic={database[1].topic}/>
  },
  {
    path:'/enroll11',
    element:<Enroll topic={database[2].topic}/>
  },
  {
    path:'/quiz1',
    element:<QuestionGenerator text = {Transcripts[0]} title={"Java 1"}/>
  },
  {
    path:'/quiz2',
    element:<QuestionGenerator text = {Transcripts[1]} title={"Core Java 1"}/>
  },
  {
    path:'/quiz3',
    element:<QuestionGenerator text = {Transcripts[2]} title={"Advance Java 1"}/>
  },
  {
    path:'/quiz4',
    element:<QuestionGenerator text = {Transcripts[3]} title={"Python AIML 1"}/>
  },
  {
    path:'/quiz5',
    element:<QuestionGenerator text = {Transcripts[4]} title={"Python Oops 1"}/>
  },
  {
    path:'/quiz6',
    element:<QuestionGenerator text = {Transcripts[5]} title={"Python Django 1"}/>
  },
  {
    path:'/quiz7',
    element:<QuestionGenerator text = {Transcripts[6]} title={"React UI 1"}/>
  },
  {
    path:'/quiz8',
    element:<QuestionGenerator text = {Transcripts[7]} title={"React Redux 1"}/>
  },
  {
    path:'/quiz9',
    element:<QuestionGenerator text = {Transcripts[8]} title={"React Recoil 1"}/>
  },
  {
    path:'/quiz10',
    element:<QuestionGenerator text = {Transcripts[9]} title={"Database Concepts 1"}/>
  },
  {
    path:'/quiz11',
    element:<QuestionGenerator text = {Transcripts[10]} title={"Database MySql 1"}/>
  },
  {
    path:'/quiz12',
    element:<QuestionGenerator text = {Transcripts[11]} title={"Database MongoDb 1"}/>
  },
  {
    path:"/mylearning",
    element:<MyPage/>
  }
])

root.render(
  <React.StrictMode>
    <AppContextProvider>
        <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);


