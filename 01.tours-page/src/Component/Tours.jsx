import React from "react";
import Tour from "./Tour";

const Tours = () => {
  return (
    <>
      <div className="w-[80%] m-auto bg-white p-7 ">
        <div className="text-center mb-10">
          <h1 className=" text-center text-3xl font-bold">Our Tour</h1>
          <div className="h-[3px] left-[47.5%] mt-2 absolute w-[5%] bg-green-400"></div>
        </div>
        <div className="flex">
          <Tour />
        </div>
      </div>
    </>
  );
};

export default Tours;
