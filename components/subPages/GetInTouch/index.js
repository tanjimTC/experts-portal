import style from "./style.module.css";
import ContactUsForm from "../../../components/ContactUsForm";
import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";

const GetInTouch = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 container font-primary my-10">
      <div className="col-span-1 md:col-span-2 text-center w-3/4 mx-auto">
        <p className="text-2xl font-semibold mb-5">Get In Touch</p>
        <p className="text-base mb-5 font-extralight">
          Lets create something great!
        </p>
        <p className="md:text-xl mb-5">
          If you’re looking for a Professional Consultancy Company, then we are
          right here. Please let us know your scope of work and we will get back
          to you soon with our estimate.
        </p>
      </div>
      <div className="px-10 py-10 md:py-24 border-2 shadow-xl">
        <p className="text-2xl font-bold">{"Let's connect"}</p>

        <div className="flex gap-x-4 mt-10">
          <FiMail className="text-3xl font-extralight" />
          <p className="text-lg">info@experts portal</p>
        </div>

        <div className="flex gap-x-4 mt-10">
          <FiPhoneCall className="text-3xl font-extralight" />
          <p className="text-lg">+1-347-849-7449</p>
        </div>

        <div className="flex gap-x-4 mt-10">
          <FiMapPin className="text-3xl font-extralight" />
          <p className="text-lg">19/1, Rajar Goli, Sylhet, Bangladesh</p>
        </div>
      </div>
      <ContactUsForm />
    </div>
  );
};

export default GetInTouch;
