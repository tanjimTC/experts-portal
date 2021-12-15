import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema2 } from "./validationSchema2";
import Error from "./Error";
import AxiosConfig from "../../../AxiosConfig/AxiosConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";

const UserSignUpForm = () => {
  const [processing2, setProcessing2] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema2),
  });

  const onSubmit2 = async (data) => {
    console.log("data", data);
    setProcessing2(true);
    const checkEmail = {
      email: data.email,
    };
    AxiosConfig.post("/auth/user/email", checkEmail).then(async (res) => {
      if (res.data.success) {
        console.log("object", data);

        AxiosConfig.post("/auth/user/signup", data)
          .then((json) => {
            console.log("json", json);
            toast.success("🦄 Accout created successfully!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            reset();
            setProcessing2(false);
          })
          .catch((err) => console.log(err));
      } else {
        toast.error("This email already registered!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setProcessing2(false);
      }
    });
  };
  return (
    <form
      className="flex flex-col items-center"
      onSubmit={handleSubmit(onSubmit2)}
    >
      <ToastContainer />
      <div className="mt-6 ">
        <div className="flex flex-wrap ">
          <input
            type="text"
            name="name"
            {...register("name", { required: true })}
            placeholder="Name"
            className="h-10 py-1 pr-3 w-full border-b focus:outline-none border-gray-600"
          />
          <Error message={errors.name?.message} />
        </div>

        <div className="flex flex-wrap ">
          <input
            type="text"
            name="email"
            {...register("email", { required: true })}
            placeholder="Email"
            className="h-10 py-1 pr-3 w-full border-b focus:outline-none border-gray-600"
          />
          <Error message={errors.email?.message} />
        </div>

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
            className={` ${
              processing2
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-sectionBG cursor-pointer"
            }  text-white text-base py-2 px-4 md:px-8  transition-colors duration-300 rounded-md flex items-center mx-auto text-center`}
            disabled={processing2}
          >
            {!processing2 ? "Submit" : "Loading"}
            {processing2 ? (
              <ClipLoader
                className="ml-2"
                color={"#fff"}
                loading={true}
                size={20}
              />
            ) : null}
          </button>
        </div>
      </div>
    </form>
  );
};

export default UserSignUpForm;
