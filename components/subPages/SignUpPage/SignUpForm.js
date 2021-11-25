import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validationSchema ";
import Error from "./Error";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <form
      className="flex flex-col items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mt-6 ">
        <div className="flex flex-wrap ">
          <div className="w-full md:w-1/2 mb-1 pr-0 md:pr-2">
            <input
              type="text"
              name="firstName"
              {...register("firstName", { required: true })}
              placeholder="First name"
              className="h-10 py-1 pr-3 w-full border-b focus:outline-none border-gray-600"
            />
            <Error message={errors.firstName?.message} />
          </div>
          <div className="w-full md:w-1/2 mb-1 pl-0 md:pl-2">
            <input
              type="text"
              name="lastName"
              {...register("lastName", { required: true })}
              placeholder="Last name"
              className="h-10 py-1 pr-3 w-full border-b border-gray-600 focus:outline-none"
            />
            <Error message={errors.lastName?.message} />
          </div>
        </div>

        <div className="border-b border-gray-600 border-solid   mb-1">
          <div className="flex-1">
            <input
              type="text"
              name="email"
              {...register("email", { required: true })}
              placeholder="E-mail"
              className="h-10 py-1 pr-3 w-full focus:outline-none"
            />
          </div>
        </div>
        <Error message={errors.email?.message} />

        <div className="border-b border-gray-600 border-solid   mb-1">
          <div className="flex-1">
            <input
              type="password"
              name="password"
              {...register("password", {
                required: true,
                maxLength: 20,
                minLength: 8,
              })}
              placeholder="Password"
              className="h-10 py-1 pr-3 w-full focus:outline-none"
            />
          </div>
        </div>
        <Error message={errors.password?.message} />

        <div className="border-b border-gray-600 border-solid   mb-1">
          <div className="flex-1">
            <input
              type="password"
              name="confirmPassword"
              {...register("confirmPassword", {
                required: true,
                maxLength: 20,
                minLength: 8,
              })}
              placeholder="Confirm Password"
              className="h-10 py-1 pr-3 w-full focus:outline-none"
            />
          </div>
        </div>
        <Error message={errors.confirmPassword?.message} />

        <div className={"flex items-center mt-2"}>
          <input
            className={"mr-2 mt-1 py-1 text-lg cursor-pointer"}
            type="checkbox"
            name="acceptTerms"
            {...register("acceptTerms", { required: true })}
          />
          <p className="text-gray-500">I agree with terms and conditions</p>
        </div>
        <Error message={errors.acceptTerms?.message} />
        <div className="text-center mt-8">
          <button
            type="submit"
            className="bg-textColor2 hover:bg-gray-700  text-white text-base py-2 px-4 md:px-8  transition-colors duration-300 rounded-md"
          >
            Sign up
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
