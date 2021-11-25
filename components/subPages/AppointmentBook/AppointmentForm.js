import {
  BsFillPersonFill,
  BsCalendar,
  BsEnvelopeFill,
  BsPhone,
} from "react-icons/bs";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import Error from "./Error";
import { validationSchema } from "./validationSchema ";
import { yupResolver } from "@hookform/resolvers/yup";

const AppointmentForm = ({ onSubmit, startDate, setStartDate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-2xl text-gray-800 text-center">
        Book Your Appointment
      </h2>
      <div className="mt-6 md:mt-12">
        <div className="w-4/5 md:w-550 border-2 border-solid rounded flex items-center">
          <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
            <BsFillPersonFill className="text-gray-500" />
          </div>
          <div className="flex-1">
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Name"
              className="h-10 py-1 pr-3 w-full"
            />
          </div>
        </div>
        <Error message={errors.name?.message} />

        <div className="w-4/5 md:w-550 border-2 border-solid rounded flex items-center">
          <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
            <BsCalendar className="text-gray-500" />
          </div>
          <div className="flex-1">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="h-10 py-1 pr-3 w-full"
            />
          </div>
        </div>

        <div className="w-4/5 md:w-550 border-2 border-solid rounded flex items-center mt-4">
          <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
            <BsEnvelopeFill className="text-gray-500" />
          </div>
          <div className="flex-1">
            <input
              type="text"
              {...register("email", { required: true })}
              placeholder="E-mail"
              className="h-10 py-1 pr-3 w-full"
            />
          </div>
        </div>
        <Error message={errors.email?.message} />

        <div className="w-4/5 md:w-550 border-2 border-solid rounded flex items-center mt-2">
          <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
            <BsPhone className="text-gray-500" />
          </div>
          <div className="flex-1">
            <input
              type="text"
              {...register("phone", { required: true })}
              placeholder="Phone Number"
              className="h-10 py-1 pr-3 w-full"
            />
          </div>
        </div>
        <Error message={errors.phone?.message} />

        <div className="text-right mt-6 md:mt-12">
          <button
            className="bg-sectionBG text-white text-xl py-2 px-4 md:px-6 rounded transition-colors duration-300"
            // onClick={() => onCloseModal()}
          >
            Confirm and Procced to Payment
          </button>
        </div>
      </div>
    </form>
  );
};

export default AppointmentForm;