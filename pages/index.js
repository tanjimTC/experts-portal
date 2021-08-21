import HeroSection from "../components/subPages/HomePage/HeroSection";
import HomeLayout from "../layouts/HomeLayout/index";
export default function Home() {
  return (
    <HomeLayout className={"text-center"}>
      <HeroSection />
    </HomeLayout>
  );
}
