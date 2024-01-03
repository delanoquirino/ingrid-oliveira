import { Header } from "@/components/Header";
import { SectionHero } from "@/components/SectionHero";
import { SectionServices } from "@/components/SectionServices";

export default function Home() {
  return (
    <main className="bg-white">
      <SectionHero />
      <SectionServices/>
    </main>
  );
}
