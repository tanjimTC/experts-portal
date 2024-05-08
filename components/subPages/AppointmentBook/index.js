import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Router from "next/router";
import AppointmentForm from "./AppointmentForm";
import { dateFormat } from "../../../utils";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import { confirmBooking, makePayment } from "../../../redux/slices/expertSlice";
import { addAppointment } from "../../../redux/slices/appointmentSlice";

const AppointmentBook = ({ onCloseModal, name, id, email, rate }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [displayPayment, setDisplayPayment] = useState(false);
  const [appointmentInfo, setAppointmentInfo] = useState({});
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    data.expertName = name;
    data.expertId = id;
    data.expertEmail = email;
    data.rate = rate;
    const fomatedDate = dateFormat(startDate, "DD-MM-YYYY");
    data.date = fomatedDate;
    setAppointmentInfo(data);
    setDisplayPayment(true);
  };

  const onToken = async (token) => {
    if (token) {
      const paymentData = {
        tokenID: token.id,
        ...appointmentInfo,
      };
      const res = await dispatch(makePayment(paymentData));
      console.log(res);
      if (res.payload?.status === "succeeded") {
        dispatch(
          confirmBooking({
            ...res.meta.arg,
            trxId: res.payload.balance_transaction,
            receipt_url: res.payload.receipt_url,
          })
        );
        dispatch(
          addAppointment({
            ...res.meta.arg,
            trxId: res.payload.balance_transaction,
            receipt_url: res.payload.receipt_url,
          })
        );
        onCloseModal();
        Router.push("/success");
      }
    }
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
          name={name}
          id={id}
          email={email}
        />
      </div>
      <div
        className="bg-white p-2 md:px-8 md:pt-8"
        style={{ display: displayPayment ? "block" : "none" }}
      >
        <StripeCheckout
          token={onToken}
          stripeKey="pk_test_51H2WPVJ0iICkOAizoTlJJ4ImEaEVMrGpN8CvR842BS0JoAxJ4v4a0seySHmZBffdQuwNSI5UGZiqcX8CSWFjRfQM00lHcTiPdI"
          currency="BDT"
        />
      </div>
    </div>
  );
};

export default AppointmentBook;
