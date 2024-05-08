import HomeLayout from "../../layouts/HomeLayout";
import { useForm } from "react-hook-form";
import ExpertCard from "../../components/Cards/ExpertCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getAllExperts,
  getExpertsByCategory,
} from "../../redux/slices/expertSlice";

const Index = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [expert, setExpert] = useState("All");

  const onSubmit = (data) => {
    console.log(data);
    if (data.category !== "All") {
      dispatch(getExpertsByCategory(data.category));
    }
    if (data.category === "All") {
      getExperts();
    }
    setExpert(data.category);
  };

  const getExperts = () => {
    dispatch(getAllExperts());
  };

  useEffect(() => {
    getExperts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { allExperts } = useSelector((state) => state.expert);

  return (
    <HomeLayout>
      <div className="flex items-center bg-cover bg-sectionBG bg-bottom p-10 md:py-32 md:px-16">
        <form
          className="bg-smoke-dark p-6 md:p-10 rounded w-full shadow-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="font-serif text-2xl md:text-3xl leading-tight text-center font-normal text-white mb-8">
            Find the best experts who can help you!
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
                <option>All</option>
                <option>Economics</option>
                <option>Financial</option>
                <option>Engineering </option>
                <option>Health</option>
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
          <h1 className="text-center text-2xl my-4">{expert} Experts</h1>
          <div className="container grid gap-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {allExperts?.map((data, index) => (
              <ExpertCard {...data} key={index} />
            ))}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Index;
