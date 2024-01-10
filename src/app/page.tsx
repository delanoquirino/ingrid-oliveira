import { Footer } from "@/components/Footer";
import { SectionAbout } from "@/components/SectionAbout";
import { SectionContact } from "@/components/SectionContact";
import { SectionGallery } from "@/components/SectionGallery";
import { SectionHero } from "@/components/SectionHero";
import { SectionPrice } from "@/components/SectionPrice";
import { SectionServices } from "@/components/SectionServices";


export default function Home() {
  return (
    <main className="bg-white">
      <SectionHero />
      <SectionServices />
      <SectionAbout />
      <SectionPrice />
      <SectionGallery />
      <SectionContact />
      <Footer />
    </main>
  );
}
