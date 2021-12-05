import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogedinuser } from "../../../../redux/slices/authSlice";
import { getAppointmentByEmail } from "../../../../redux/slices/appointmentSlice";

const DeshboardPage = () => {
  const dispatch = useDispatch();
  const { loggedInExpert } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(setLogedinuser());
  }, [dispatch]);

  if (loggedInExpert.email) {
    dispatch(getAppointmentByEmail(loggedInExpert.email));
  }

  return (
    <>
      <div className="header  flex justify-between">
        <div>
          <p className="text-[#707EAE] text-2xl font-bold">
            Hi {loggedInExpert?.name}
          </p>
          <span className="inline-flex items-center justify-center mb-2 px-2 py-0.5 font-semibold text-xs leading-none text-indigo-100 bg-badgeBg rounded">
            {loggedInExpert?.category}
          </span>
          <p className="text-[#2B3674] text-4xl font-bold">
            Welcome to Experts Portal!
          </p>
        </div>
        <div>
          <div className="relative inline-block mr-0 md:mr-4">
            <img
              className="inline-block object-cover w-12 h-12 rounded-full"
              src={loggedInExpert?.userImage?.imageUrl}
              alt="Profile image"
            />
            <span className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
          </div>
        </div>
      </div>
      <div className="mainContent mt-9 mb-5 flex">
        <div className="bg-white p-6 inline-flex justify-between rounded-2xl mr-5 w-full">
          <div className="flex flex-col mr-6">
            <span className="text-gray-500 text-sm font-medium">
              Spent this month
            </span>
            <span className="text-[#1B2559] font-bold text-2xl">$682.5</span>
          </div>
          <img src="/images/graph.svg" alt="" />
        </div>
        <div className="bg-white p-6 inline-flex justify-between rounded-2xl mr-5 items-center w-full">
          <div className="flex">
            <span className="bg-gradient-to-r from-[#868CFF] to-[#4318FF] flex justify-center items-center rounded-full h-14 w-14 mr-4">
              <svg
                width="29"
                height="28"
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.2373 15.3183C21.8356 16.4033 22.9556 17.8733 22.9556 19.8333V23.3333H26.4556C27.0973 23.3333 27.6223 22.8083 27.6223 22.1667V19.8333C27.6223 17.29 23.4573 15.785 20.2373 15.3183Z"
                  fill="white"
                />
                <path
                  d="M11.289 13.9998C13.8664 13.9998 15.9557 11.9104 15.9557 9.3331C15.9557 6.75577 13.8664 4.66643 11.289 4.66643C8.71171 4.66643 6.62238 6.75577 6.62238 9.3331C6.62238 11.9104 8.71171 13.9998 11.289 13.9998Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.289 13.9998C20.8674 13.9998 22.9557 11.9114 22.9557 9.3331C22.9557 6.75476 20.8674 4.66643 18.289 4.66643C17.7407 4.66643 17.2274 4.7831 16.7374 4.94643C17.7057 6.1481 18.289 7.67643 18.289 9.3331C18.289 10.9898 17.7057 12.5181 16.7374 13.7198C17.2274 13.8831 17.7407 13.9998 18.289 13.9998Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.289 15.1665C8.17402 15.1665 1.95569 16.7298 1.95569 19.8331V22.1665C1.95569 22.8081 2.48069 23.3331 3.12236 23.3331H19.4557C20.0974 23.3331 20.6224 22.8081 20.6224 22.1665V19.8331C20.6224 16.7298 14.404 15.1665 11.289 15.1665Z"
                  fill="white"
                />
              </svg>
            </span>
            <div className="flex flex-col mr-6">
              <span className="text-gray-500 text-base font-bold">
                New clients
              </span>
              <span className="text-[#1B2559] font-bold text-2xl">321</span>
            </div>
          </div>
          <span className="-ml-8">
            <svg
              width="62"
              height="32"
              viewBox="0 0 62 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.78906 29.7041C1.78906 29.7041 7.93491 31.4949 14.0806 29.7041C28.4034 25.5305 23.7891 -0.999996 34.7891 6C47.9675 14.3863 58.4453 13.9388 60.2891 2"
                stroke="url(#paint0_linear)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="-35.2109"
                  y1="38"
                  x2="48.3488"
                  y2="-12.866"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4F2CFF" />
                  <stop offset="1" stopColor="#4F2CFF" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
        <div className="bg-white p-6 inline-flex rounded-2xl mr-5 items-center pr-14 w-full">
          <span className="bg-[#F4F7FE] flex justify-center items-center rounded-full h-14 w-14 mr-4">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.07311 13.3134H9.34679C10.4005 13.3134 11.2626 14.1755 11.2626 15.2291V24.808C11.2626 25.8616 10.4005 26.7237 9.34679 26.7237H9.07311C8.01944 26.7237 7.15735 25.8616 7.15735 24.808V15.2291C7.15735 14.1755 8.01944 13.3134 9.07311 13.3134ZM16.7362 7.56609C17.7898 7.56609 18.6519 8.42818 18.6519 9.48185V24.808C18.6519 25.8616 17.7898 26.7237 16.7362 26.7237C15.6825 26.7237 14.8204 25.8616 14.8204 24.808V9.48185C14.8204 8.42818 15.6825 7.56609 16.7362 7.56609ZM24.3992 18.5133C25.4529 18.5133 26.315 19.3754 26.315 20.4291V24.808C26.315 25.8616 25.4529 26.7237 24.3992 26.7237C23.3456 26.7237 22.4835 25.8616 22.4835 24.808V20.4291C22.4835 19.3754 23.3456 18.5133 24.3992 18.5133Z"
                fill="#4318FF"
              />
            </svg>
          </span>
          <div className="flex flex-col mr-6">
            <span className="text-gray-500 text-base font-bold">Earnings</span>
            <span className="text-[#1B2559] font-bold text-2xl">$350.40</span>
          </div>
        </div>
        <div className="bg-white p-6 inline-flex justify-between rounded-2xl mr-5 items-center  bg-gradient-to-r from-[#868CFF] to-[#4318FF] w-full">
          <div className="flex flex-col mr-6">
            <span className="text-white text-base font-bold">Activity</span>
            <span className="text-white font-bold text-2xl">$540.50</span>
          </div>
          <span>
            <img src="/images/graphwhite.svg" alt="" />
          </span>
        </div>
      </div>

      <div className="moreInformation">
        <div className="w-3/5 flex justify-between bg-white rounded-2xl py-7 px-8">
          <div className="">
            <p className="text-[#A3AED0] text-sm font-medium">Total Spent</p>
            <p className="text-[#1B2559] text-4xl font-bold">$682.5</p>
          </div>
          <span className="bg-[#F4F7FE] h-8 w-8 rounded-lg flex justify-center items-center">
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.18906 4.2H2.38906C3.15906 4.2 3.78906 4.83 3.78906 5.6V12.6C3.78906 13.37 3.15906 14 2.38906 14H2.18906C1.41906 14 0.789062 13.37 0.789062 12.6V5.6C0.789062 4.83 1.41906 4.2 2.18906 4.2ZM7.78906 0C8.55906 0 9.18906 0.63 9.18906 1.4V12.6C9.18906 13.37 8.55906 14 7.78906 14C7.01906 14 6.38906 13.37 6.38906 12.6V1.4C6.38906 0.63 7.01906 0 7.78906 0ZM13.3891 8C14.1591 8 14.7891 8.63 14.7891 9.4V12.6C14.7891 13.37 14.1591 14 13.3891 14C12.6191 14 11.9891 13.37 11.9891 12.6V9.4C11.9891 8.63 12.6191 8 13.3891 8Z"
                fill="#4318FF"
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};

export default DeshboardPage;
