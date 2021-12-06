import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AboutUs from "../components/subPages/HomePage/AboutUs";
import HeroSection from "../components/subPages/HomePage/HeroSection";
import LegendSection from "../components/subPages/HomePage/LegendSection";
import HomeLayout from "../layouts/HomeLayout/index";
import { setLoggedInExpert } from "../redux/slices/authSlice";
import { getAllExperts } from "../redux/slices/expertSlice";

export default function Home() {
  const dispatch = useDispatch();
  // const { allExperts } = useSelector((state) => state.expert);

  useEffect(() => {
    dispatch(getAllExperts());
    dispatch(setLoggedInExpert());
  }, [dispatch]);

  return (
    <HomeLayout className={"text-center"}>
      <HeroSection />
      <LegendSection />
      <AboutUs />
    </HomeLayout>
  );
}
