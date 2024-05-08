import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AboutUs from "../components/subPages/HomePage/AboutUs";
import Connected from "../components/subPages/HomePage/Connected";
import ContactUS from "../components/subPages/HomePage/ContactUS";
import Experience from "../components/subPages/HomePage/Experience";
import HeroSection from "../components/subPages/HomePage/HeroSection";
import LegendSection from "../components/subPages/HomePage/LegendSection";
import OurServices from "../components/subPages/HomePage/OurServices";
import HomeLayout from "../layouts/HomeLayout/index";
import { setLoggedInExpert, setLoggedInUser } from "../redux/slices/authSlice";
import { getAllExperts } from "../redux/slices/expertSlice";

export default function Home() {
  const dispatch = useDispatch();
  // const { allExperts } = useSelector((state) => state.expert);

  useEffect(() => {
    dispatch(getAllExperts());
    dispatch(setLoggedInExpert());
    dispatch(setLoggedInUser());
  }, [dispatch]);

  return (
    <HomeLayout className={"text-center"}>
      <HeroSection />
      <LegendSection />
      <Experience />
      <AboutUs />
      <OurServices />
      <Connected />
      <ContactUS />
    </HomeLayout>
  );
}
