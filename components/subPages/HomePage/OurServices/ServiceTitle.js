import React from "react";
import { useRouter } from "next/router";

const ServiceTitle = () => {
  const router = useRouter();
  return (
    <div className={"p-5 pt-10 grid grid-cols-12"}>
      <div className={"col-span-9 md:col-span-8"}>
        <p className={"text-primary font-semibold text-xs md:text-sm my-4"}>
          OUR SERVICES
        </p>
        <p className={"font-bold text-xl md:text-3xl"}>We Offer A Wide </p>
        <p className={"font-bold text-xl md:text-3xl"}>Variety Of Services</p>
      </div>
      <div
        className={"col-span-3 md:col-span-4 flex items-end flex-row-reverse "}
      >
        <p
          className={
            "text-right text-primary font-semibold mr-0 md:mr-4 mb-1 text-xs md:text-sm cursor-pointer"
          }
          onClick={() => router.push("/services")}
        >
          view more
        </p>
      </div>
    </div>
  );
};

export default ServiceTitle;
