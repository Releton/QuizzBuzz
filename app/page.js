import CategoryPicker from "@/components/CategoryPicker";
import { dummy } from "@/data/data";
import { AiFillLike, AiFillDislike, AiFillEye } from "react-icons/ai";
export default function Home() {
  return (
    <main className="px-3 flex gap-3 flex-col md:flex-row h-full">
      <CategoryPicker />
      <div className="h-[80vh] md:w-[50%] w-[90%] overflow-y-auto relative flex flex-col gap-3 p-3 mx-6 z-40 border-2 px-3 border-white rounded-lg backdrop-filter backdrop-blur-md bg-white bg-opacity-10 mt-6">
        {dummy.ok &&
          dummy.data.map((data, i) => {
            return (
              <div
                key={i}
                className="border-2 shadow-lg border-white justify-between flex rounded-lg p-3 bg-gradient-to-r from-white to-gray-300 bg-opacity-75 text-slate-900"
              >
                <div className="space-y-4 max-w-[85%] min-w-[85%]">
                  <p className="overflow-hidden lg:text-xl text-base font-bold  tracking-widest">
                    {data.heading}
                  </p>
                  <p className="text-gray-500">{data.description}</p>
                  <div className="flex justify-between">
                    <div className="bg-gradient-to-r inline-block p-1 rounded-lg text-white from-blue-500 to-red-500">
                      {data.category}
                    </div>
                    <div className="text-red-500 font-extrabold text-lg items-center">
                      {data.totalMarks + " marks"}
                    </div>
                    <div className="items-center gap-1 flex">
                      <AiFillLike />
                      <p>{data.likes}</p>
                    </div>
                    <div className="items-center gap-1 flex">
                      <AiFillEye />
                      <p>{data.views}</p>
                    </div>
                    <div className="items-center gap-1 flex">
                      <p className="tracking-tighter text-sm font-extralight">{data.author}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-evenly">
                  <AiFillLike fontSize={25} className="text-slate-900 cursor-pointer hover:text-green-500 duration-200" />
                  <AiFillDislike fontSize={25} className="text-slate-900 cursor-pointer hover:text-red-500 duration-200" />
                </div>
              </div>
            );
          })}
      </div>
    </main>
  );
}
