"use client"

import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const dancing = Dancing_Script({ weight: "400", subsets: ["latin"] });

type Props = {};

export const SectionHero = (props: Props) => {
  return (
    <section
      className="flex justify-center items-center py-14 md:min-h-screen"
      style={{
        background: "linear-gradient(to right, #F9F9F9 60%, #DCC7DA 40%)",
      }}
    >
      <div id="hero" className="max-w-5xl mx-auto flex gap-8 flex-col p-4 md:flex-row">
        <div className="flex-1 text-wrap" >
          <h2 className={` ${dancing.className} md:text-5xl text-xl text-primary`}>
            Bem-vindo ao nosso estúdio
          </h2>
          <h1 className="md:text-5xl lg:text-6xl text-3xl font-bold">
          Realce a beleza dos seus olhos com cílios lindos e naturais
          </h1>
          <button className=" bg-black mt-10 hover:bg-primary text-white transition duration-300 ease-in-out text-sm uppercase py-4 px-4 ">
          <Link href="https://wa.me/5586994337055?text=Ol%C3%A1+Estou+interessado%28a%29+em+agendar+um+hor%C3%A1rio+para+coloca%C3%A7%C3%A3o+de+c%C3%ADlios+ou+design+de+sobrancelhas.+Qual+seria+a+disponibilidade+para+os+pr%C3%B3ximos+dias%3F++Obrigado%28a%29%21+" target="_blank">Agendar Consulta</Link>

          </button>
        </div>
        <div className="hidden flex-1 md:block pr-14 relative" >
          <Image
            src="/img/cilios-image.jpg"
            alt="extensão de cilios"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="md:hidden block relative h-[300px] w-full " >
          <Image
            src="/img/cilios-image.jpg"
            alt="extensão de cilios"
            quality={100}
            fill
            style={{
                objectFit: "cover",
              }}
          
          />
        </div>
      
      </div>
    </section>
  );
};
