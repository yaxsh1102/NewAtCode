import React from "react";
import Card from "./Card";

const Cards = ({ data }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-[2rem]">
      <div className=" w-[79rem] mb-4 ">
        
        <p className="font-semibold text-4xl text-white mb-[2rem]">
        {data[0].domain}
        </p>
        
      </div>

      <div className=" w-[92rem] flex gap-x-5 justify-center">
        {data.map((course, index) => (
          <Card key={index} iD={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
