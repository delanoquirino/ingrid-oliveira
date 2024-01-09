import { Gallery } from "./Gallery";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({ weight: "400", subsets: ["latin"] });

export const SectionGallery = () => {
  return (
    <section className="flex flex-col gap-8 justify-center items-center max-w-5xl py-12 md:py-28 mx-auto p-4">
      <h2 className={` ${dancing.className} text-3xl sm:text-7xl text-primary`}>
        Galeria
      </h2>
      <Gallery />
    </section>
  );
};
