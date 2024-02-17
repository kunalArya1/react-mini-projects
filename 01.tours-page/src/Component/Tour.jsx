import React from "react";

const Tour = () => {
  return (
    <div className=" w-[34%] bg-white shadow-lg rounded-md p-2">
      <div className=" h-[70%] w-full rounded-lg mb-7">
        <img
          className="rounded-lg"
          src="https://www.course-api.com/images/tours/tour-1.jpeg"
          alt=""
        />
      </div>
      <div className=" text-center">
        <h1 className=" text-2xl p-2 font-semibold ">
          Headign First JavaScript
        </h1>
        <p className=" text-left p-4 text-[1.1em]">
          Paris is synonymous with the finest things that culture can offer — in
          art, fashion, food, literature, and ideas. On this tour, your
          Paris-savvy Rick Steves guide will immerse you in the very best of
          <br />
          <button className=" font-bold text-green-400">Read More</button>
        </p>
      </div>
      <button className=" py-3 w-[80%]  text-green-500  font-semibold  text-md border-green-400 border-2 rounded-md ml-[10%] mb-10 mt-5">
        Not Intrested
      </button>
    </div>
  );
};

export default Tour;
