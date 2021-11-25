import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import AppointmentForm from "./AppointmentForm";

const AppointmentBook = ({ onCloseModal }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [displayPayment, setDisplayPayment] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    console.log(startDate);
    setDisplayPayment(true);
  };

  return (
    <div className="">
      <div
        className="bg-white p-2 md:px-8 md:pt-8"
        style={{ display: displayPayment ? "none" : "block" }}
      >
        <AppointmentForm
          onSubmit={onSubmit}
          startDate={startDate}
          setStartDate={setStartDate}
        />
      </div>
      <div
        className="bg-white p-2 md:px-8 md:pt-8"
        style={{ display: displayPayment ? "block" : "none" }}
      >
        <h1>Payment</h1>
      </div>
    </div>
  );
};

export default AppointmentBook;
