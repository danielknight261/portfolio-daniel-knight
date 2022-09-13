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
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
            posuere sollicitudin aliquam ultrices. Vestibulum morbi blandit
            cursus risus. Eros donec ac odio tempor. Consectetur adipiscing elit
            pellentesque habitant morbi tristique senectus et. Vitae purus
            faucibus ornare suspendisse sed. Adipiscing commodo elit at
            imperdiet dui accumsan sit amet nulla. Quisque id diam vel quam
            elementum pulvinar etiam non quam. Diam phasellus vestibulum lorem
            sed risus ultricies tristique nulla. Et magnis dis parturient montes
            nascetur ridiculus mus. Sit amet luctus venenatis lectus magna
            fringilla urna porttitor rhoncus.
          </p>
          <p className="py-2 text-gray-600">
            Nulla at volutpat diam ut venenatis tellus in metus vulputate. Et
            ligula ullamcorper malesuada proin libero nunc consequat. Pretium
            lectus quam id leo. Integer malesuada nunc vel risus commodo.
            Ullamcorper morbi tincidunt ornare massa eget egestas purus. Nisi
            porta lorem mollis aliquam ut. Semper viverra nam libero justo
            laoreet sit amet cursus. Sagittis purus sit amet volutpat consequat.
            Eleifend donec pretium vulputate sapien. Nunc consequat interdum
            varius sit amet mattis vulputate enim nulla. Viverra orci sagittis
            eu volutpat odio facilisis mauris sit amet.
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
              This is DanMoji, the result of the first lines of code i ever
              wrote, its meant to be me. Arguably this is cooler though, i cant
              pull off shades like that.
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
