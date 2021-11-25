import React from "react";
import Privacy from "./Privacy";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="min-w-screen bg-white  flex justify-center flex-1">
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('/Assets/images/undraw_with_love_re_1q3m.svg')",
            }}
          ></div>
        </div>

        <div className="lg:w-1/2 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl font-bold text-textColor2 mb-3 tracking-widest">
              FRIENDLY
            </h1>
            <p className="text-sm font-medium text-textColor">
              Please complete to create your account.
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
