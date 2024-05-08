import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validationSchema ";
import Error from "./Error";
import Sider from "./Sider";
import { useState } from "react";
import { useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import AxiosConfig from "../../../AxiosConfig/AxiosConfig";
import {
  loggedInExpertInfo,
  loggedInUserInfo,
} from "../../../redux/slices/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignInPage = () => {
  const [processing, setProcessing] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleCheckbox = (e) => {
    setChecked(e.target.checked);
  };

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    setProcessing(true);
    if (checked) {
      console.log("handle sign in as Expert");
      handleExpertSignIn(data);
    } else {
      console.log("handle sign in as normal user");
      handleUserSignIn(data);
    }
  };

  const handleExpertSignIn = (data) => {
    AxiosConfig.post("/auth/login", data)
      .then((json) => {
        const { data } = json;
        console.log("json", data);
        if (data.success) {
          console.log("data", data);
          dispatch(loggedInExpertInfo(data.data));
          toastSuccessNotification();
          localStorage.setItem("expert_token", data.data.token);
        } else {
          toastErrorNotification(data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleUserSignIn = (data) => {
    AxiosConfig.post("/auth/user/login", data)
      .then((json) => {
        const { data } = json;
        console.log("json", data);
        if (data.success) {
          console.log("data", data);
          dispatch(loggedInUserInfo(data.data));
          toastSuccessNotification();
          localStorage.setItem("user_token", data.data.token);
        } else {
          toastErrorNotification(data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  const toastSuccessNotification = () => {
    toast.success("🦄 Logged in successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    reset();
    setProcessing(false);
  };

  const toastErrorNotification = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setProcessing(false);
  };

  return (
    <div className="lg:flex">
      <div className="lg:w-1/2 xl:max-w-screen-sm">
        <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12"></div>
        <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
          <div className="flex items-center justify-center w-full mb-12">
            <label
              htmlFor="toogleA"
              className="flex items-center cursor-pointer"
            >
              <div className="relative">
                <input
                  id="toogleA"
                  type="checkbox"
                  className="sr-only"
                  onClick={handleCheckbox}
                />
                <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
              </div>
              <div className="ml-3 text-gray-700 font-medium">
                Sign in as Expert
              </div>
            </label>
          </div>
          <h2
            className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold"
          >
            Log in{" "}
            <span className="text-sm italic ">
              {" "}
              as {checked ? "Expert" : "User"}{" "}
            </span>
          </h2>
          <div className="mt-12">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Email Address
              </div>
              <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text"
                name="email"
                {...register("email", { required: true })}
                placeholder="mike@gmail.com"
              />
              <Error message={errors.email?.message} />

              <div className="mt-6">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Password
                </div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="password"
                  name="password"
                  {...register("password", { required: true })}
                  placeholder="Enter your password"
                />
              </div>
              <Error message={errors.password?.message} />

              <div className="mt-8">
                <button
                  type="submit"
                  className={` ${
                    processing
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-sectionBG cursor-pointer"
                  }  text-white text-base py-2 px-4 md:px-8  transition-colors duration-300 rounded-md flex items-center mx-auto text-center`}
                  disabled={processing}
                >
                  {!processing ? "Submit" : "Loading"}
                  {processing ? (
                    <ClipLoader
                      className="ml-2"
                      color={"#fff"}
                      loading={true}
                      size={20}
                    />
                  ) : null}
                </button>
              </div>
            </form>
            <ToastContainer />

            <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
              have an account ?{" "}
              <Link
                href="/signup"
                className="cursor-pointer text-indigo-600 hover:text-indigo-800"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center bg-signBg flex-1 h-screen">
        <Sider />
      </div>
    </div>
  );
};

export default SignInPage;
