"use client";


function CategoryItem({children, setCategory, selectedCategory, value, url}) {
  return (
    <div
      onClick={() => setCategory(value)}
      className={`bg-white bg-opacity-20 border-2 border-white w-full h-full rounded-lg shadow-md flex justify-center items-center text-white cursor-pointer hover:scale-105 duration-150 delay-100 ${
        selectedCategory == value
          ? "bg-blue-500 font-bold bg-opacity-80 text-slate-900 bg-gradient-to-r from-blue-500 to-purple-500"
          : ""
      }`}
    >
      {children}
    </div>
  );
}

export default CategoryItem;
