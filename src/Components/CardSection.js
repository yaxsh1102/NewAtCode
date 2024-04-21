import Cards from "./Cards";

function CardSection() {
  const java = [
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

  const python = [
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

  const react = [
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
  const database = [
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

  const data = [java, python,react,database];

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

export default CardSection;
