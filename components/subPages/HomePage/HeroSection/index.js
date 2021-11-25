import React from "react";
import SignUpForm from "./SignUpForm";
import Wave from "react-wavify";
import style from "./style.module.css";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center ">
      <div className="min-w-screen bg-white  flex justify-center flex-1">
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="w-full bg-cover bg-center bg-no-repeat flex justify-center items-center "
            style={{
              backgroundImage: "url('/images/Sign up side image.png')",
              zIndex: 10,
            }}
          >
            <div className="text-center ">
              <button
                type="submit"
                className="bg-gray-100 text-textColor3 text-base font-semibold py-2 px-4 md:px-8  transition-colors duration-300 rounded-md"
              >
                <Link href="/appointment">Get Appointment</Link>
              </button>
            </div>
          </div>
        </div>

        <Wave
          className={style["wave"]}
          fill="#433F7F"
          paused={false}
          options={{
            height: 20,
            amplitude: 45,
            speed: 0.1,
            points: 5,
          }}
        />
        <div className="lg:w-1/2 p-6 sm:p-12 z-10">
          <div className={`${style["intro"]} mt-12 flex flex-col items-center`}>
            <h1 className="text-2xl font-bold text-white mb-2 md:mb-3 tracking-widest">
              Experts Portal
            </h1>
            <p className="text-sm font-medium text-gray-200">
              Your new smile starts here
            </p>
            <div className="w-full flex-1 mt-2 md:mt-3">
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
