"use client"

import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

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
      <div className="max-w-5xl mx-auto flex gap-8 flex-col p-4 md:flex-row">
        <motion.div className="flex-1 text-wrap" initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          <h2 className={` ${dancing.className} md:text-5xl text-xl text-primary`}>
            Bem-vindo ao nosso estúdio
          </h2>
          <h1 className="md:text-5xl lg:text-6xl text-3xl font-bold">
          Realce a beleza dos seus olhos com cílios lindos e naturais
          </h1>
          <button className=" bg-black mt-10 hover:bg-primary text-white transition duration-300 ease-in-out text-sm uppercase py-4 px-4 ">
            Agendar Consulta
          </button>
        </motion.div>
        <motion.div className="hidden flex-1 md:block pr-14 relative"  initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
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
        </motion.div>
        <motion.div className="md:hidden block relative h-[300px] w-full " initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          <Image
            src="/img/cilios-image.jpg"
            alt="extensão de cilios"
            quality={100}
            fill
            style={{
                objectFit: "cover",
              }}
          
          />
        </motion.div>
      
      </div>
    </section>
  );
};
