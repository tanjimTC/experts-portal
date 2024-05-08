import HomeLayout from "../../layouts/HomeLayout";
import GetInTouch from "../../components/subPages/GetInTouch";
import Hero from "../../components/Hero";
import { ToastContainer } from "react-toastify";

const index = () => {
  return (
    <HomeLayout>
      <Hero
        className="h-96"
        text="Contact Us"
        image="/images/homepage/hero-bg.webp"
      />
      <GetInTouch />
      <ToastContainer />
    </HomeLayout>
  );
};

export default index;
