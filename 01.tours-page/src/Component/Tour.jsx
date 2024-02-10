import React from "react";

const Tour = () => {
  return (
    <>
      <div className="flex  flex-wrap">
        <div className="w-[26%] m-auto border">
          <div className="w-[100%] bg-red-500">
            <img
              className="h-full w-full object-cover"
              src="https://www.course-api.com/images/tours/tour-1.jpeg"
              alt=""
            />
            <div className=" text-center font-semibold text-white p-1 h-8 w-24 bg-green-500  -top-[0%]">
              $ 109.2
            </div>
          </div>

          <h1 className="text-black text-center mt-5 mb-5 font-semibold text-2xl">
            Name of the place
          </h1>
          <p className=" text-black text-sm p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            consequuntur soluta, sunt ducimus architecto dolor mollitia aperiam
            voluptas eaque incidunt animi vel? Numquam placeat assumenda,
            suscipit eveniet eligendi deleniti magni, perferendis ipsa cumque
            enim dolorem reiciendis facilis, sequi asperiores odit quas. Veniam
            tenetur in perferendis eveniet nesciunt! Corrupti voluptates
            eligendi perspiciatis omnis, voluptatibus aspernatur ipsum et?
            Dolorum, explicabo quidem! Fuga, dignissimos distinctio aliquid
            veritatis repellat error, officiis nihil quo omnis, unde fugiat!
            Voluptatibus, maiores dignissimos. Consequatur, obcaecati velit,
            ullam ad quos sunt accusantium repudiandae asperiores numquam
            adipisci consectetur harum natus molestiae commodi mollitia
            exercitationem nesciunt ipsa aliquam atque recusandae voluptas!
          </p>
        </div>
      </div>
    </>
  );
};

export default Tour;
