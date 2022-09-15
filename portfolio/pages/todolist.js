import React from "react";
import Image from "next/image";
import Link from "next/link";
import todolistImg from "../public/assets/projects/todolist.png";
import { RiRadioButtonFill } from "react-icons/ri";

const todolist = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={todolistImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">TypeScript Todo List</h2>
          <h3></h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="py-2 text-gray-600">
            A simple Todo list made using TypeScript, I was curious to try and
            understand a little more the differences between JavaScript and
            TypeScript.
          </p>

          <Link href="https://todo-list-in-react-typescript.vercel.app/">
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-110">
              Demo
            </button>
          </Link>
          <Link href="https://github.com/danielknight261/Todo-list-in-react-typescript">
            <button className="px-8 py-2 mt-4 hover:scale-110">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Vercel
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Go Back</p>
        </Link>
      </div>
    </div>
  );
};

export default todolist;
