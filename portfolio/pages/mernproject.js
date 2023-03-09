import React from "react";
import Image from "next/image";
import Link from "next/link";
import mernprojectImg from "../public/assets/projects/mernproject.png";
import { RiRadioButtonFill } from "react-icons/ri";

const mernproject = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={mernprojectImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 text-black">MERN User Management Project</h2>
          <h3></h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="py-2 text-gray-600">
          I recently built an incredibly enjoyable MERN project, which comprises of MongoDB, Express, React, and Node. This project allows you to create new users and send their information directly to the MongoDB database. And with the added bonus of an "edit" button, you can easily update or delete users from the database.
          </p>
          <p className="py-2 text-gray-600">
          Throughout the development process, I had a lot of fun exploring the nitty-gritty of all the different technologies required to put this application together. While the project's CSS styling is quite simple, the primary focus was on delving into the backend.
          </p>
          <p className="py-2 text-gray-600">
          To ensure the project runs seamlessly, I hosted it on Heroku for the backend and Vercel for the frontend. This allows for smooth and efficient operation and guarantees that users can experience the full functionality of the MERN stack. Overall, building this project was an incredibly rewarding experience.
          </p>
          <Link href="https://user-management-project-mern.vercel.app">
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-110">Demo</button>
          </Link>
          <Link href="https://github.com/danielknight261/user-management-project-MERN">
            <button className="px-8 py-2 mt-4 hover:scale-110">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Vanilla CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Vercel
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Express
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Node
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Heroku
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

export default mernproject;
