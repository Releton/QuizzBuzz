"use client";

import { useState } from "react";
import CategoryItem from "./sub/categoryItem";
import { categories } from "@/data/data";

function CategoryPicker() {
  const [selectedCategory, setSelectedCategory] = useState();
  const setCategory = (cat) => {
    setSelectedCategory(cat);
  };
  return (
    <div className="flex-col relative  z-40 w-[90%] items-center flex md:w-[30%] xl:w-[20%] mx-auto md:mx-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm shadow-lg h-[80vh] rounded-lg mt-6">
      <div className="h-[30%] pt-3 flex flex-col justify-between pb-10 w-full items-center px-3">
        {/* TODO: Replace with real things */}
        <div className="w-20 aspect-square rounded-full bg-red-300 text-sm flex items-center justify-center">
          Profile pic
        </div>
        <div className="w-full h-1 bg-green-500 rounded-lg"></div>
      </div>
      <div className="w-full h-[70%] flex flex-col gap-2 pb-5 px-3">
        {Object.keys(categories).map((cat) => {
          const category = categories[cat];
          return (
            <CategoryItem
              value={category.value}
              url={category.url}
              setCategory={setCategory}
              selectedCategory={selectedCategory}
            >
              {category?.text}
            </CategoryItem>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryPicker;
