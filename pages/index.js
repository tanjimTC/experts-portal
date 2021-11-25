import AboutUs from "../components/subPages/HomePage/AboutUs";
import HeroSection from "../components/subPages/HomePage/HeroSection";
import LegendSection from "../components/subPages/HomePage/LegendSection";
import HomeLayout from "../layouts/HomeLayout/index";
export default function Home() {
  return (
    <HomeLayout className={"text-center"}>
      <HeroSection />
      <LegendSection />
      <AboutUs />
    </HomeLayout>
  );
}
