import React from "react";
import Image from "next/image";


const Skills = () => {
  return (
    <div id='skills' className="w-fill lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/icons/html.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div>
                <h3 className="flex flex-col items-center justify-center">
                  HTML
                </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/icons/css.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div>
                <h3 className="flex flex-col items-center justify-center">
                  CSS
                </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/icons/javascript.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div>
                <h3 className="flex flex-col items-center justify-center">
                  JavaScript
                </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/icons/github1.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div>
                <h3 className="flex flex-col items-center justify-center">
                  GitHub
                </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/icons/react.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div>
                <h3 className="flex flex-col items-center justify-center">
                  React
                </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/icons/nextjs.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div>
                <h3 className="flex flex-col items-center justify-center">
                  Next.js
                </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/icons/node.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div>
                <h3 className="flex flex-col items-center justify-center">
                  Node
                </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/icons/tailwind.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div>
                <h3 className="flex flex-col items-center justify-center">
                  Tailwind
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
