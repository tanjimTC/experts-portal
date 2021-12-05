import { AiFillClockCircle, AiFillDollarCircle } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useState } from "react";
import AppointmentBook from "../../subPages/AppointmentBook";

const Index = ({ _id, userImage, name, email, about, category, rate }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="bg-white flex flex-col justify-between rounded-md overflow-hidden relative shadow-md m-2">
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
        <button
          onClick={onOpenModal}
          className="text-white bg-green-400 p-4 rounded-md w-full uppercase"
        >
          Book Appointment
        </button>
      </div>
      <div className="absolute top-0 right-0 mt-4 mr-4 bg-green-400 text-white rounded-full pt-1 pb-1 pl-4 pr-5 text-xs uppercase">
        <span>available</span>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <AppointmentBook
          onCloseModal={onCloseModal}
          name={name}
          id={_id}
          email={email}
          rate={rate}
        />
      </Modal>
    </div>
  );
};

export default Index;
