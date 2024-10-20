import { HeroSection } from "@/components/block/home-page/hero-section/HeroSection";
import { NavigationBar } from "@/components/block/home-page/navigation-bar/NavigationBar";
import { SectionIntroduction } from "@/components/block/home-page/section-introduction/SectionIntroduction";


export default function Home() {
  return (
    <>

      <NavigationBar />
      <HeroSection />
      <SectionIntroduction />

    </>
  );
}
