import React from "react";
import Connected from "../../components/subPages/HomePage/Connected";
import AllServices from "../../components/subPages/Services/AllServices";
import ServiceHero from "../../components/subPages/Services/ServiceHero";
import HomeLayout from "../../layouts/HomeLayout";

const index = () => {
  return (
    <HomeLayout>
      <ServiceHero />
      <AllServices />
      <Connected />
    </HomeLayout>
  );
};

export default index;
