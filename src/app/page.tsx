import { HeroSection } from "@/components/block/home-page/section-hero/HeroSection";
import { NavigationBar } from "@/components/block/home-page/navigation-bar/NavigationBar";
import { SectionIntroduction } from "@/components/block/home-page/section-introduction/SectionIntroduction";
import { SectionStatistic } from "@/components/block/home-page/section-statistic/SectionStatistic";
import { SectionInformationGate } from "@/components/block/home-page/section-informationGate/SectionInfromationGate";
import { SectionMnF } from "@/components/block/home-page/section-Mnf/SectionMnF";
import { SectionStores } from "@/components/block/home-page/section-stories/SectionStores";


export default function Home() {
  return (
    <>

      <NavigationBar />
      <HeroSection />
      <SectionIntroduction />
      <SectionStatistic />
      <SectionInformationGate />
      <SectionMnF />
      <SectionStores />
    </>
  );
}
