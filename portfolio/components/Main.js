import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#166c96]">Dan</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Full-Stack Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%]  m-auto">
            I'm a full-stack web developer, that enjoys playing around with new
            technologies and building full-stack applications, I'm excited to 
            develop, learn and contribute to projects and the team in my next role. If you've got some time take a look around.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto pu-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 marker:cursor-pointer hover:scale-125 ease-in duration-75:">
              <Link href="https://www.linkedin.com/in/daniel-knight-developer/">
                <FaLinkedinIn className="text-4xl" />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 marker:cursor-pointer hover:scale-125 ease-in duration-75:">
              <Link href="https://github.com/danielknight261">
                <FaGithub className="text-4xl" />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 marker:cursor-pointer hover:scale-125 ease-in duration-75:">
              <Link href='/#contact'>
              <AiOutlineMail className="text-4xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
