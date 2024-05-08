import { AiFillClockCircle, AiFillDollarCircle } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useEffect, useState } from "react";
import AppointmentBook from "../../subPages/AppointmentBook";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";
import AppointmentBookPhysical from "../../subPages/AppointmentBookPhysical";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index = ({ _id, userImage, name, email, about, category, rate }) => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const onOpenModal2 = () => setOpen2(true);
  const onCloseModal2 = () => setOpen2(false);

  const onOpenModal3 = () => {
    setOpen3(true);
  };
  const onCloseModal3 = () => {
    setOpen3(false);
    toast.success(
      "Request Successful! Keep eye on your user dashboard for update.",
      {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("user_token");
    if (!token) {
      setLoggedIn(false);
    } else {
      const decodedToken = jwt_decode(token);
      const currentTime = new Date().getTime() / 1000;

      if (decodedToken.exp > currentTime) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    }
  }, []);

  const hanlePhycialAppointment = () => {
    onCloseModal();
    onOpenModal3();
  };

  const hanleOnlineAppointment = () => {
    onCloseModal();
    onOpenModal2();
  };

  return (
    <div className="bg-white flex flex-col justify-between rounded-md overflow-hidden relative shadow-md m-3">
      <ToastContainer />
      <div>
        <img
          className="w-full object-contain h-52"
          src={userImage.imageUrl}
          alt="Experts Title"
        />
        <div className="p-4">
          <h2 className="text-2xl text-sectionBG">{name}</h2>
          <div className="flex justify-between mt-4 mb-4 text-gray-500">
            <div className="flex items-center">
              <AiFillClockCircle className="text-xl" />
              <span className="ml-1 lg:text-xl">1h</span>
            </div>
            <div className="flex items-center">
              <AiFillDollarCircle className="text-xl" />
              <span className="ml-1 lg:text-xl">{rate}</span>
            </div>
            <div className="flex items-center">
              <BsFillPersonFill className="text-xl" />
              <span className="ml-1 lg:text-xl">10</span>
            </div>
          </div>
          <span className="inline-flex items-center justify-center my-2 px-2 py-1 font-semibold text-xs leading-none text-indigo-100 bg-badgeBg rounded">
            {category}
          </span>
          <p className="mb-4 text-gray-500">{about}</p>
        </div>
      </div>
      <div className="p-4">
        {loggedIn ? (
          <button
            onClick={onOpenModal}
            className="text-white bg-green-400 p-4 rounded-md w-full uppercase"
          >
            Book Appointment
          </button>
        ) : (
          <button
            onClick={() => router.push("/signin")}
            className="text-white bg-green-400 p-4 rounded-md w-full uppercase"
          >
            Log in to Book Appointment
          </button>
        )}
      </div>
      <div className="absolute top-0 right-0 mt-4 mr-4 bg-green-400 text-white rounded-full pt-1 pb-1 pl-4 pr-5 text-xs uppercase">
        <span>available</span>
      </div>
      <Modal open={open2} onClose={onCloseModal2} center>
        <AppointmentBook
          onCloseModal={onCloseModal2}
          name={name}
          id={_id}
          email={email}
          rate={rate}
        />
      </Modal>

      <Modal open={open3} onClose={onCloseModal3} center>
        <AppointmentBookPhysical
          onCloseModal={onCloseModal3}
          name={name}
          id={_id}
          email={email}
          rate={rate}
        />
      </Modal>

      <Modal open={open} onClose={onCloseModal} center>
        <div className="flex justify-center items-center bg-white p-2 md:px-8 md:pt-8">
          <div className="m-2">
            <button
              className="bg-green-600 px-4 py-2 text-white"
              onClick={hanlePhycialAppointment}
            >
              Physical Appointment
            </button>
          </div>

          <div className="m-2">
            <button
              className="bg-indigo-600 px-4 py-2 text-white"
              onClick={hanleOnlineAppointment}
            >
              Online Appointment
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Index;
