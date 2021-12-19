import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validationSchema";
import Error from "./Error";
import ImageUpload from "../../Input/ImageUpload";
import AxiosConfig from "../../../AxiosConfig/AxiosConfig";
import { uploadImages } from "../../Image/ImageUploadCloud";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch } from "react-redux";
import { getAllExperts } from "../../../redux/slices/expertSlice";

const SignUpForm = () => {
  const [userImage, setUserImage] = useState("");
  const [processing, setProcessing] = useState(false);
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
    const checkEmail = {
      email: data.email,
    };
    AxiosConfig.post("/auth/email", checkEmail).then(async (res) => {
      if (res.data.success) {
        const uploadedPhoto = await uploadImages(userImage);
        data.userImage = uploadedPhoto;
        console.log("object", data);

        AxiosConfig.post("/auth/signup", data)
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
            setUserImage("");
            reset();
            setProcessing(false);
            dispatch(getAllExperts());
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
        setProcessing(false);
      }
    });
  };
  return (
    <form
      className="flex flex-col items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <ToastContainer />
      <div className="mt-6 ">
        <div className="mb-1">
          <ImageUpload
            onOutput={(e) => console.log(e.target)}
            name={"profile"}
            handleChange={(e) => setUserImage(e.target.files[0])}
            userImg={userImage}
          />
        </div>
        <div className="flex flex-wrap ">
          <div className="w-full md:w-1/2 mb-1 pr-0 md:pr-2">
            <input
              type="text"
              name="firstName"
              {...register("name", { required: true })}
              placeholder="Name"
              className="h-10 py-1 pr-3 w-full border-b focus:outline-none border-gray-600"
            />
            <Error message={errors.name?.message} />
          </div>
          <div className="w-full md:w-1/2 mb-1 pl-0 md:pl-2">
            <select
              className="h-10 py-1 pr-3 w-full border-b border-gray-600 focus:outline-none"
              {...register("category")}
            >
              <option>Economics</option>
              <option>Financial</option>
              <option>Engineering </option>
              <option>Health</option>
            </select>
            <Error message={errors.category?.message} />
          </div>
        </div>

        <div className="flex flex-wrap ">
          <div className="w-full md:w-1/2 mb-1 pr-0 md:pr-2">
            <input
              type="text"
              name="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="h-10 py-1 pr-3 w-full border-b focus:outline-none border-gray-600"
            />
            <Error message={errors.email?.message} />
          </div>

          <div className="w-full md:w-1/2 mb-1 pl-0 md:pl-2">
            <select
              className="h-10 py-1 pr-3 w-full border-b border-gray-600 focus:outline-none"
              {...register("rate")}
            >
              <option>500</option>
              <option>1000</option>
              <option>1500</option>
              <option>2000</option>
            </select>
            <Error message={errors.rate?.message} />
          </div>
        </div>

        <div className="border-b border-gray-600 border-solid   mb-1">
          <div className="flex-1">
            <textarea
              type="text"
              name="about"
              {...register("about", { required: true })}
              placeholder="About"
              className="h-10 py-1 pr-3 w-full focus:outline-none"
            />
          </div>
        </div>
        <Error message={errors.about?.message} />

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
      </div>
    </form>
  );
};

export default SignUpForm;
