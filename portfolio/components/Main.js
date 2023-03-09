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
           I am a junior developer who is eager to learn
            and grow in the field of web development. I may be new to the game,
            but I am excited to dive into new projects and technologies, and I
            am always looking for ways to improve my skills. On this website,
            you will find a collection of some of my past projects, which showcase my
            abilities in areas such as HTML, CSS, JavaScript, and more. I hope
            you enjoy browsing through my work, and if you have any questions or
            are interested in working with me, please don't hesitate to reach
            out. Happy exploring!
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
              <Link href="/#contact">
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
