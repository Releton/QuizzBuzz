"use client";

import { useState } from "react";

function CategoryPicker() {
  const [selectedCategory, setSelectedCategory] = useState();
  const setCategory = (cat) => {
    setSelectedCategory(cat);
  };
  return (
    <div className="flex-col relative md:fixed z-50 w-[90%] items-center flex md:w-[30%] xl:w-[20%] mx-auto bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm shadow-lg h-[80vh] rounded-lg mt-6">
      <div className="h-[30%]"></div>
      <div className="w-full h-[70%] space-y-5 px-3">
        <div
          onClick={() => setCategory("technology")}
          className={`bg-white bg-opacity-20 border-2 border-white w-full h-[20%] rounded-lg shadow-md flex justify-center items-center text-white cursor-pointer hover:scale-105 duration-150 delay-100 ${selectedCategory=="technology" ? 'bg-blue-500 font-bold bg-opacity-80' : ''}`}
        >
          Technology
        </div>
        <div
          onClick={() => setCategory("science")}
          className={`bg-white bg-opacity-20 border-2 border-white w-full h-[20%] rounded-lg shadow-md flex justify-center items-center text-white cursor-pointer hover:scale-105 duration-150 delay-100 ${selectedCategory=="science" ? 'bg-blue-500 font-bold bg-opacity-80' : ''}`}
        >
          Science
        </div>
        <div
          onClick={() => setCategory("literature")}
          className={`bg-white bg-opacity-20 border-2 border-white w-full h-[20%] rounded-lg shadow-md flex justify-center items-center text-white cursor-pointer hover:scale-105 duration-150 delay-100 ${selectedCategory=="literature" ? 'bg-blue-500 font-bold bg-opacity-80' : ''}`}
        >
          Literature
        </div>
        <div
          onClick={() => setCategory("others")}
          className={`bg-white bg-opacity-20 border-2 border-white w-full h-[20%] rounded-lg shadow-md flex justify-center items-center text-white cursor-pointer hover:scale-105 duration-150 delay-100 ${selectedCategory=="others" ? 'bg-blue-500 font-bold bg-opacity-80' : ''}`}
        >
          Others
        </div>
      </div>
    </div>
  );
}

export default CategoryPicker;
