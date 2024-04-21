import { useContext, useEffect } from "react";
import { AppContext } from "../Context/AppContext";
import Cards from "./Cards";


function MyPage({user_email}) {
  useEffect({
    getCourses
  } , [])


  const {email, setEmail} = useContext(AppContext);

  let temp ;
  let arr ;
   async function getCourses(){
    const response = await fetch("http://localhost:7000/api/v1/get", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: email}),
    });
    arr=response.courses ;
    console.log(arr)


    
    

  }
  let java = [
    {
      id:0,
      domain: "Java",
      title: "StudySphere Project Network",
      topic: "Master Java Basics and Ace Interviews",
      src: "java.png",
    },
    {
      id:1,
      domain: "Java",
      title: "StudySphere Project Network",
      topic: "Core Java and Fundamentals",
      src: "core-java.png",
    },
    {
      id:2,
      domain: "Java",
      title: "StudySphere Project Network",
      topic: "Advanced Java and Gui implementation",
      src: "java-adv.png",
    },
  ];

  let python = [
    {
      id:3,
      domain: "Python",
      title: "StudySphere Project Network",
      topic: "Learn Python and get a strong hold on AI/ML",
      src: "python.png",
    },

    {
      id:4,
      domain: "Python",
      title: "StudySphere Project Network",
      topic: "Learn Python OOPS for strong fundamentals",
      src: "oops.png",
    },
    {
      id:5,
      domain: "Python",
      title: "StudySphere Project Network",
      topic: "Learn Django for backend expertise",
      src: "django.png",
    },
  ];

  let react = [
    {
      id:6,
      domain: "React JS",
      title: "StudySphere Project Network",
      topic: "ReactJS to build strong and interactive UI",
      src: "react.png",
    },
    {
      id:7,
      domain: "React JS",
      title: "StudySphere Project Network",
      topic: "React Redux to master ReactJS",
      src: "redux.png",
    },
    {
      id:8,
      domain: "React JS",
      title: "StudySphere Project Network",
      topic: "React Recoil to optimise your website",
      src: "recoil.png",
    },
  ];
  let database = [
    {
      id:9,
      domain: "Database",
      title: "StudySphere Project Network",
      topic: "PostgreSQL to strengthen Database concepts",
      src: "postgre.png",
    },
    {
      id:10,
      domain: "Database",
      title: "StudySphere Project Network",
      topic: "MySQL to master scalability in Database",
      src: "mysql.png",
    },
    {
      id:11,
      domain: "Database",
      title: "StudySphere Project Network",
      topic: "MongoDB to fasten your database",
      src: "mongo.png",
    },
  ];


  java=java.filter((item)=>
  {
    return arr.includes(item.topic);
  }
)
python=python.filter((item)=>
{
  return arr.includes(item.topic);
}
)
react=react.filter((item)=>
{
  return arr.includes(item.topic);
}
)
database=database.filter((item)=>
{
  return arr.includes(item.topic);
}
)

  
  let data=[];

  if(java.length!=0) data.push(java);
  if(python.length!=0) data.push(python);
  if(react.length!=0) data.push(react);
  if(database.length!=0) data.push(database);




  return (
    <>
      <div className="bg-black pb-[4rem]">
      <div className="text-[3rem] text-indigo-500 font-semibold bg-black pl-[7.6rem] pt-[6rem] flex">
        Courses
      </div>
      <div className="ml-[7.6rem] w-[80rem] mt-[0.6rem]  h-1 bg-[#ff0031] border-2 border-[#ff0031]"></div>
      </div>
    <div className="flex justify-center items-center flex-col font-sans bg-black  gap-y-14">
      {data.map((items, index) => (
        <Cards key={index} data={items}></Cards>
      ))}
    </div> 
     </>
  );
}

export default MyPage;
