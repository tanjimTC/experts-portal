import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validationSchema ";
import Error from "./Error";
import SendEmail from "../../../../tools/EmailJs/SendEmail";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data, e) => {
    alert(JSON.stringify(data));
    SendEmail(e.target);
  };
  return (
    <form
      className="flex flex-col items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mt:4 md:mt-6 ">
        <div className="border-b border-white border-solid   mb-1">
          <div className="flex-1">
            <input
              type="text"
              name="name"
              {...register("name", { required: true })}
              placeholder="Name"
              className="h-10 py-1 pr-3 w-full focus:outline-none bg-transparent"
            />
          </div>
        </div>
        <Error message={errors.name?.message} />

        <div className="flex flex-wrap ">
          <div className="w-full md:w-1/2 mb-1 pr-0 md:pr-2">
            <input
              type="text"
              name="email"
              {...register("email", { required: true })}
              placeholder="E-mail"
              className="h-10 py-1 pr-3 w-full border-b focus:outline-none bg-transparent border-white"
            />
            <Error message={errors.email?.message} />
          </div>
          <div className="w-full md:w-1/2 mb-1 pl-0 md:pl-2">
            <input
              type="text"
              name="phone"
              {...register("phone", { required: true })}
              placeholder="Phone"
              className="h-10 py-1 pr-3 w-full border-b border-white focus:outline-none bg-transparent"
            />
            <Error message={errors.phone?.message} />
          </div>
        </div>

        <div className="border-b border-white border-solid   mb-1">
          <div className="flex-1">
            <input
              type="text"
              name="company"
              {...register("company")}
              placeholder="Company"
              className="h-10 py-1 pr-3 w-full focus:outline-none bg-transparent"
            />
          </div>
        </div>
        <Error message={errors.company?.message} />

        <div className="border-b border-white border-solid   mb-1">
          <div className="flex-1">
            <textarea
              type="password"
              name="message"
              {...register("message")}
              placeholder="Message..."
              className="h-10 py-1 pr-3 w-full focus:outline-none bg-transparent"
            />
          </div>
        </div>
        <Error message={errors.message?.message} />
        <div className="text-center mt-4 md:mt-7">
          <button
            type="submit"
            className="bg-gray-100 text-textColor3 text-base py-2 px-4 md:px-8  transition-colors duration-300 rounded-md"
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
