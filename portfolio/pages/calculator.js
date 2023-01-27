import React from "react";
import Image from "next/image";
import Link from "next/link";
import calculatorImg from "../public/assets/projects/logiccalculator.png";
import { RiRadioButtonFill } from "react-icons/ri";

const calculator = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={calculatorImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 text-black">Open Weather API</h2>
          <h3></h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="py-2 text-gray-600">
            I was motivated to undertake this project because I wanted to gain a
            deeper understanding of how to build a calculator using JavaScript
            logic. Instead of relying on pre-built packages or libraries, I was
            more interested in exploring the underlying logic and concepts that
            drive calculator functionality. I wanted to challenge myself to
            build something from scratch and learn about the different
            Comparison and Logical Operators that are used in JavaScript.
          </p>
          <p className="py-2 text-gray-600">
            Throughout the process, I encountered various challenges and
            roadblocks, but I persisted and was able to create a functional
            calculator that can perform all the basic mathematical operations.
            The final product, which can be viewed in the demo, is a simple
            calculator that can perform addition, subtraction, multiplication,
            and division.
          </p>
          <Link href="https://react-logic-calculator.vercel.app/">
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-110">
              Demo
            </button>
          </Link>
          <Link href="https://github.com/danielknight261/react-logic-calculator">
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

export default calculator;
