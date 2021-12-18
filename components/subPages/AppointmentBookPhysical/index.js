import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import AppointmentForm from "./AppointmentForm";
import { dateFormat } from "../../../utils";
import { useDispatch } from "react-redux";
import { reqAppointment } from "../../../redux/slices/appointmentSlice";

const AppointmentBookPhysical = ({ onCloseModal, name, id, email, rate }) => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    data.expertName = name;
    data.expertId = id;
    data.expertEmail = email;
    data.rate = rate;
    const fomatedDate = dateFormat(startDate, "DD-MM-YYYY");
    data.date = fomatedDate;
    dispatch(reqAppointment(data));
    onCloseModal();
  };

  return (
    <div className="bg-white p-2 md:px-8 md:pt-8">
      <AppointmentForm
        onSubmit={onSubmit}
        startDate={startDate}
        setStartDate={setStartDate}
        name={name}
        id={id}
        email={email}
      />
    </div>
  );
};

export default AppointmentBookPhysical;
