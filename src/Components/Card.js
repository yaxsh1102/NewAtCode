import React from "react";
import { Link } from "react-router-dom";


const Card = ({ course,iD }) => {
  return (
   
      <Link to = {`/enroll${iD}`}  className="w-[28%] h-[24rem] border-2 outline-1 rounded-md pt-2 hover: transition-all  duration-700  hover:scale-[1.1] hover:shadow-black">
      <img
        src={course.src}
        className="w-[90%] h-[16rem] mx-auto rounded-md p-3"
      ></img>
      <div className="flex items-center gap-x-2 ml-[0.8rem] mt-[0.7rem] f">
        <img src="ss.jpg" className="w-[2rem] h-[2rem] ml-[1rem]"></img>
        <p className="text-white text-lg">{course.title}</p>
      </div>
      <p className="ml-[1.6rem] text-lg mt-4 pb-2 text-white font-medium text-wrap:wrap">
        {course.topic}
      </p>
    </Link>
  );
};

export default Card;
