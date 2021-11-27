import React from "react";
import { useForm } from "react-hook-form";

const SelecInput = ({ onChange, options }) => {
  const { register, handleSubmit } = useForm({});
  return (
    <form onChange={handleSubmit(onChange)}>
      <div
        className={"border bg-white border-gray-300 rounded-md px-1 md:px-2 "}
      >
        <select
          name="selectItem"
          {...register("selectItem")}
          className="mt-1 block w-full py-1 md:py-2 px-1 md:px-3 shadow-sm focus:outline-none text-xs md:text-sm"
        >
          {options?.map((data, index) => (
            <option value={data?.value} key={index}>
              {data?.title}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default SelecInput;
