import React from "react";
import Image from "next/image";
import Link from "next/link";
import coinpaprikaImg from "../public/assets/projects/coinpaprika.png";
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
          src={coinpaprikaImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 text-black">Coin Paprika API</h2>
          <h3></h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>

          <p className="py-2 text-gray-600">
            This was a really enjoyable tech test that I've decided to include
            in my portfolio. The task was to build a widget that fetched data
            from the CoinPaprika API and displaying the values of Bitcoin and
            Ethereum cryptocurrencies in both USD and GBP.
          </p>
          <p className="py-2 text-gray-600">
            There's a lot that can be done with this API, so I will likely
            revisit it for a new project and attempt to manipulate the data in a
            more advanced manner.
          </p>
          <Link href="https://coin-paprika-api.vercel.app/">
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-110">
              Demo
            </button>
          </Link>
          <Link href="https://github.com/danielknight261/CoinPaprika-api">
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
                Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Vercel
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Axios
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
