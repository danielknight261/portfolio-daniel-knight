import React from "react";
import Image from "next/image";
import Link from "next/link";
import bootcamperImg from "../public/assets/projects/bootcamper.png";
import { RiRadioButtonFill } from "react-icons/ri";

const bootcampersocial = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={bootcamperImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 text-black">Bootcamper Social</h2>
          <h3></h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="py-2 text-gray-600">
          Our team, comprising of members from the School of Code Bootcamp, embarked on a project to create a useful application for our fellow bootcampers. After a day of brainstorming and discussions, we settled on the idea of developing an application that would help bootcampers connect and meet in person by creating events.
          </p>
          <p className="py-2 text-gray-600">
          We adopted an agile methodology for the duration of the project, which allowed for flexibility and adaptability as we progressed. To ensure efficient collaboration, we rotated tasks on a daily basis, allowing each team member to take on different roles and responsibilities throughout the week.
          </p>
          <p className="py-2 text-gray-600">
          By utilizing the popular JavaScript library, React, we were able to create a user-friendly and responsive interface for the application. The application allows users to easily create and manage events, invite other bootcampers, and track attendance. Additionally, users can also join existing events, view upcoming events and RSVP.
          </p>
         
          <Link href="https://front-end-bootcamper-social.netlify.app/">
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-110" >Demo</button>
          </Link>
          <Link href="https://github.com/danielknight261/w9_frontend-project-joe-klakus-the-wailers">
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
                CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                PostgresSQL
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

export default bootcampersocial;
