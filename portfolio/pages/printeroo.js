import React from "react";
import Image from "next/image";
import Link from "next/link";
import printerooImg from "../public/assets/projects/printeroo.png";
import { RiRadioButtonFill } from "react-icons/ri";

const printeroo = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={printerooImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 text-black">Printeroo</h2>
          <h3></h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="py-2 text-gray-600">
            This project was born out of a chance opportunity. I was looking for
            something to do one weekend and came across an ad for Shopify
            offering a 3-month subscription for just £1 per month. I was
            intrigued and decided to give it a try.
          </p>
          <p className="py-2 text-gray-600">
            The project was built using a combination of different technologies,
            including the Shopify add-on Layout hub, which allows for building a
            website with simple drag-and-drop elements. This was a departure
            from my usual method of building projects using Javascript, CSS, and
            HTML in Visual Code, but it was a great opportunity to learn and
            experiment with new tools.
          </p>
          <p className="py-2 text-gray-600">
            What made the project particularly interesting was that everything
            in LayoutHub is written with HTML, CSS, and JavaScript, and I had
            full access to customise all elements throughout the process. This
            allowed me to infuse my own unique style and creativity into the
            website.
          </p>
          <p className="py-2 text-gray-600">
            Additionally, I used the Shopify add-on Gelato, which enabled me to
            integrate a feature that allows customers to add their own images to
            a canvas, mug, or tote bag and see it rendered on screen. This added
            an interactive element to the website that was both fun and engaging
            for users.
          </p>
          <p className="py-2 text-gray-600">
            The site is still a work in progress, but it was a lot of fun to
            build. The project has been added to my portfolio, along with a demo
            link, so that others can see the end result and how it was built. It
            was a great learning experience and I look forward to experimenting
            with more e-commerce platforms and technologies in the future.
          </p>

          <Link href="https://splatbox.myshopify.com/">
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-110">
              Demo
            </button>
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
                Shopify
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Gelato
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                LayoutHub
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

export default printeroo;
