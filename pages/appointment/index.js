import HomeLayout from "../../layouts/HomeLayout";
import { useForm } from "react-hook-form";
import DoctorCard from "../../components/Cards/DoctorCard";
import { doctorsData } from "../../Assets/Data/data";

const Index = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <HomeLayout>
      <div className="flex items-center bg-cover bg-sectionBG bg-bottom p-10 md:py-32 md:px-16">
        <form
          className="bg-smoke-dark p-6 md:p-10 rounded w-full shadow-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="font-serif text-2xl md:text-3xl leading-tight text-center font-normal text-white mb-8">
            Find your dream accommodation today
          </h1>

          <div className="flex flex-wrap items-start mx-auto">
            <div className="w-full md:w-2/4 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                Category
              </label>
              <select
                className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey"
                {...register("category")}
              >
                <option>Hotel</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Room</option>
              </select>
            </div>
            <div className="w-full md:w-2/4 px-3 md:mb-0 mt-6">
              <button className="font-bold leading-tight bg-red-600 hover:bg-red-light border border-red hover:border-red-light w-full text-white uppercase tracking-wide py-3 px-4 rounded">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="bg-gradient-to-b from-gray-200 to-gray-400 bg-fixed h-full">
        <div className="container mx-auto p-4">
          <h1 className="text-center text-2xl my-4">
            Available Appointments on November 8, 2021
          </h1>
          <div className="container grid gap-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {doctorsData.map((data, index) => (
              <DoctorCard {...data} key={index} />
            ))}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Index;
