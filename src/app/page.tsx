import { Header } from "@/components/Header";
import { SectionAbout } from "@/components/SectionAbout";
import { SectionGallery } from "@/components/SectionGallery";
import { SectionHero } from "@/components/SectionHero";
import { SectionPrice } from "@/components/SectionPrice";
import { SectionServices } from "@/components/SectionServices";

export default function Home() {
  return (
    <main className="bg-white">
      <SectionHero />
      <SectionServices/>
      <SectionAbout/>
      <SectionPrice/>
      <SectionGallery/>
    </main>
  );
}
