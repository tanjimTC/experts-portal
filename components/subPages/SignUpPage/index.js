import React from "react";
import Privacy from "./Privacy";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="min-w-screen bg-white  flex justify-center flex-1">
        <div className="flex-1 bg-signBg text-center hidden lg:flex">
          <div
            className="w-full md:w-2/4 mx-auto bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/undraw_with_love_re_1q3m.svg')",
            }}
          ></div>
        </div>

        <div className="lg:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl font-bold text-textColor2 mb-3 tracking-widest">
              Experts Portal
            </h1>
            <p className="text-sm font-medium text-textColor">
              Please complete to create your account as an Expert.
            </p>
            <div className="w-full flex-1 mt-3">
              <SignUpForm />
              <Privacy />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
