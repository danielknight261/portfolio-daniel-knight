import React from "react";
import Image from "next/image";
import Link from "next/link";
import bootcamperImg from "../public/assets/projects/bootcamper.png";
import { RiRadioButtonFill } from "react-icons/ri";

const bootcampersocial = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={bootcamperImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Bootcamper Social</h2>
          <h3></h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="text-gray-700">
            This is a React project created as part of a team during the School
            of Code Bootcamp. The challenge was to create an application that
            would help the boot campers on the course. Following a day of
            discussion, we settled on an application that would help other boot
            campers meet in person by creating events. We worked in an agile way
            throughout the working week and alternated tasks on a daily basis.
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
