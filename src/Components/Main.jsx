import React, { useEffect } from "react";
import Typed from "typed.js"; // Import Typed.js library

import DeveloperImage from "../Components/Images/Developer.png";
import ResumeFile from "../Components/Images/Curriculum vitae - Ali Arshad.pdf";

export default function Main(props) {
  useEffect(() => {
    // Initialize Typed.js when the component mounts
    var typed = new Typed('#element', {
      strings: ['React',"Node Js","HTML"," CSS","Github","Python","React Native","Adobe Illustrator", "Ui/Ux"],
      typeSpeed: 50,
      loop:true
    });

    return () => {
      typed.destroy();
    };
  }, []); 

  return (
    <>
      <section
        id="Home"
        className="flex justify-center items-center lg:justify-around lg:h-screen h-screen lg:flex-row mt-10"
      >
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="text-left text-gray-100">
            <p className="text-lg lg:text-4xl">
              Hello, my name is <span className="text-purple-500">Ali.</span>
              <br /> I'm a  Web Developer
              <br /> Currently working in <span id="element" className="text-purple-500"> React</span>
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href={ResumeFile}
                download="Ali_Resume.pdf"
                className="bg-teal-800 hover:scale-1 ease-in-out duration-500  transition-all w-38 text-sm hover:bg-teal-500 text-white px-4 py-2 rounded"
              >
                Download Resume
              </a>
              <a
                href="https://github.com/Aliarshad0014"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-800 hover:scale-1 ease-in-out duration-500  transition-all w-18 text-sm hover:bg-teal-500 text-white px-4 py-2 rounded"
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center">
          <img
            src={DeveloperImage}
            alt="Developer"
            className=" lg:show max-w-full h-auto lg:max-w-3xl" // Adjusted image size here
          />
        </div>
      </section>
    </>
  );
}
