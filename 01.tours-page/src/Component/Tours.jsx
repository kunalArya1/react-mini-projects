import React from "react";
import Tour from "./Tour";

const Tours = () => {
  return (
    <div className="  w-full bg-gray-300 p-20">
      <div className=" text-center">
        <h1 className=" font-semibold text-4xl mb-2">Ours Tours</h1>
        <div className=" h-1 w-[9em] bg-green-400 relative top-2 left-[44.5%] mb-14"></div>
      </div>

      <Tour />
    </div>
  );
};

export default Tours;
