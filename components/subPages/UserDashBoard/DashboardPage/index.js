import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedInUser } from "../../../../redux/slices/authSlice";
import {
  getAppointmentByClientEmail,
  getRequstedAppointmentByClientEmail,
} from "../../../../redux/slices/appointmentSlice";
import { dateFormat } from "../../../../utils";

const DeshboardPage = () => {
  const [allExperts, setAllExperts] = useState([]);
  const dispatch = useDispatch();
  const { loggedInUser } = useSelector((state) => state.auth);
  const { allAppointmentCleint, allPhysicalAppointmentClient } = useSelector(
    (state) => state.appointment
  );

  useEffect(() => {
    dispatch(setLoggedInUser());
    const email = JSON.parse(localStorage.getItem("userInfoLocal")).email;
    dispatch(getAppointmentByClientEmail(email));
    dispatch(getRequstedAppointmentByClientEmail(email));
  }, [dispatch]);

  const date = allAppointmentCleint?.filter((appointment) => {
    return appointment.date == dateFormat(new Date());
  });

  const date2 = allPhysicalAppointmentClient?.filter((appointment) => {
    return (
      appointment.date == dateFormat(new Date()) && appointment.status === true
    );
  });

  let myLength = date?.length + date2?.length;

  const onlyPhysicalAppointment = allPhysicalAppointmentClient?.filter(
    (appointment) => {
      return appointment.status === true;
    }
  );

  useEffect(() => {
    setAllExperts([...allAppointmentCleint, ...allPhysicalAppointmentClient]);
  }, [allAppointmentCleint, allPhysicalAppointmentClient]);

  let result = allExperts?.filter((e, i) => {
    return (
      allExperts.findIndex((x) => {
        return x.expertEmail == e.expertEmail;
      }) == i
    );
  });

  return (
    <>
      <div className="header  flex justify-between">
        <div>
          <p className="text-[#707EAE] text-2xl font-bold">
            Hi {loggedInUser?.name} !
          </p>
          <p className="text-[#707EAE] text-xs font-semibold italic">
            {loggedInUser?.email}
          </p>
          <span className="inline-flex items-center justify-center mb-2 px-2 py-0.5 font-semibold text-xs leading-none text-indigo-100 bg-badgeBg rounded">
            {loggedInUser?.category}
          </span>
          <p className="text-[#2B3674] text-4xl font-bold">
            Welcome to Experts Portal!
          </p>
        </div>
        <div>
          <div className="relative inline-block mr-0 md:mr-4">
            <img
              className="inline-block object-cover w-12 h-12 rounded-full"
              src={
                "https://cdn0.iconfinder.com/data/icons/seo-web-4-1/128/Vigor_User-Avatar-Profile-Photo-01-512.png"
              }
              alt="Profile image"
            />
            <span className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
          </div>
        </div>
      </div>
      <div className="mainContent mt-9 mb-5 flex">
        <div className="bg-white p-6 inline-flex justify-between rounded-2xl mr-5 w-full">
          <div className="flex flex-col mr-6">
            <span className="text-gray-500 text-sm font-semibold">
              {"Today's Appointments"}
            </span>
            <span className="text-[#1B2559] font-bold text-2xl">
              {myLength}
            </span>
          </div>
          {/* <img src="/images/graph.svg" alt="" /> */}
        </div>

        <div className="bg-white p-6 inline-flex justify-between rounded-2xl mr-5 items-center  bg-gradient-to-r from-[#777deb] to-[#4318FF] w-full">
          <div className="flex flex-col mr-6">
            <span className="text-white text-base font-bold">
              Total Experts
            </span>
            <span className="text-white font-bold text-2xl">
              {result?.length}
            </span>
          </div>
          <span>
            <img src="/images/graphwhite.svg" alt="" />
          </span>
        </div>
      </div>

      <div className="moreInformation mb-5">
        <div className="w-3/5 flex justify-between bg-gradient-to-r from-[#6067e9] to-[#4318FF]  rounded-2xl py-7 px-8">
          <div className="text-white">
            <p className=" text-sm font-medium">Total Spent</p>
            <p className=" text-4xl font-bold">
              {`
              ${
                allAppointmentCleint
                  .map((appointment) => appointment.rate)
                  .reduce((acc, curr) => parseInt(acc) + parseInt(curr), 0) +
                onlyPhysicalAppointment
                  .map((appointment) => appointment.rate)
                  .reduce((acc, curr) => parseInt(acc) + parseInt(curr), 0)
              }
                `}
            </p>
          </div>
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
        </div>
      </div>

      <div className="moreInformation">
        <div className="w-3/5 flex justify-between bg-gradient-to-r from-[#4318FF] to-[#565de9]   rounded-2xl py-7 px-8">
          <span className="bg-gradient-to-r from-[#868CFF] to-[#5636e6] flex justify-center items-center rounded-full h-14 w-14 mr-4 shadow-xl border border-indigo-200">
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
          <div className="text-white">
            <p className=" text-sm font-medium">Total Appointment</p>
            <p className=" text-4xl font-bold">
              {[...allAppointmentCleint, ...onlyPhysicalAppointment]?.length}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeshboardPage;
