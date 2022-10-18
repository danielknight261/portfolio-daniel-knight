import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#166c96]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">Full-Stack Developer</p>
          <p className="py-2 text-gray-600">Hi</p>
          <p className="py-2 text-gray-600">
            I've recently completed a 16-week intensive software development
            course with the School of Code. The primary technologies used were
            Javascript and React with a heavy focus on working in teams, pair
            programming and real-life workplace skills.
          </p>
          <p className="py-2 text-gray-600">
            Below you will find the tech stack we all spent a lot of time
            working with and if you look further into the projects, you'll find some of the technologies ive begun to apply to my of projects.
          </p>
          <p className="py-2 text-gray-600">
            I'm now looking for a full-time role as a junior software engineer.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-110 duration-300">
          <div>
            <p className="py-2 text-gray-600">
              This is DanMoji, the product of some of the first lines of code I ever
              wrote, part of the School of Code application process.
            </p>
            <img
              className="rounded-xl"
              src="https://i.ibb.co/r3kjCz7/danmoji12.jpg"
              alt="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
