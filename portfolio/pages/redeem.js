import React from "react";
import Image from "next/image";
import Link from "next/link";
import redeemImg from "../public/assets/projects/redeem.jpg";
import { RiRadioButtonFill } from "react-icons/ri";

const redeem = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={redeemImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Redeem Project</h2>
          <h3></h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="py-2 text-gray-600">
            The Redeem Project was the final and most challenging project during
            my time at the School of Code. The project was designed to test our
            skills and ability to develop a functional application that
            addresses a real-world problem. Myself and the team were tasked with
            creating an application that allows users to upload tutorials on
            various topics, such as converting a pallet into a wind turbine, or
            using an empty tin of beans as a BBQ.
          </p>
          <p className="py-2 text-gray-600">
            To develop this application, our team utilised a variety of
            technologies, some of which I had experience with and others that I
            learned specifically for the project. This included front-end
            technologies like HTML, CSS, and JavaScript, as well as back-end
            technologies like Python, Node.js and MongoDB. We also used various
            frameworks and libraries such as React, Express, and Mongoose to
            help us quickly and efficiently build the application.
          </p>
          <p className="py-2 text-gray-600">
            We worked in an agile manner, dividing the project into smaller
            sprints and rotating the role of scrum master on a daily basis. This
            approach allowed us to quickly make adjustments and improvements as
            needed, while also ensuring that all team members were actively
            involved in the development process.
          </p>
          <p className="py-2 text-gray-600">
            The final result of our efforts was a Minimum Viable Product (MVP)
            that had the core functionality we had defined for the application.
            Users could upload tutorials, view them, and rate them. We also
            added some extra features like commenting and account
            registration/login.
          </p>
          <p className="py-2 text-gray-600">
            Overall, the Redeem Project was a challenging and rewarding
            experience. It allowed us to apply the skills we had learned
            throughout the course, while also giving us the opportunity to learn
            new technologies and work together as a team. We are proud of the
            MVP we developed, and we hope that it will be useful for people who
            want to share or learn new skills.
          </p>
          <Link href="https://final-project-front-end-boolean-pirates.vercel.app/">
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-110">
              Demo
            </button>
          </Link>
          <Link href="https://github.com/danielknight261/final-project_front-end-boolean_pirates">
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
                Next.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Vercel
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Heroku
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Mongoose
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Express Server
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Node.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Cloudinary
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Auth0
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

export default redeem;
