import Link from "next/link";
import React from "react";
import { FaInstagram, FaClock, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Open_Sans } from "next/font/google";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({ weight: "400", subsets: ["latin"] });

const opens = Open_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const Footer = () => {
  return (
    <section className={`${opens.className} bg-[#282828]`}>
      <div className="flex flex-col xs:flex-row items-start gap-4 sm:items-start justify-start max-w-5xl py-10 md:py-12 mx-auto p-4">
        <div className="flex flex-col gap-4">
          <h3 className={` ${dancing.className} text-white  text-lg sm:text-3xl`}>Ingrid Oliveira</h3>
          <p className="text-white text-[12px]  md:text-base">
          Fornecemos extensões de Cilíos com técnicas avançadas para lhe dar a aparência bonita que você deseja.
          </p>
          <div className="flex items-center gap-4">
            <FaInstagram className="text-white hover:text-primary " />
            <FaWhatsapp className="text-white hover:text-primary" />
          </div>
        </div>
        <div className="flex flex-col gap-2 text-white ">
          <Link href="#home" className="text-[12px] md:text-base hover:text-primary">
            Home
          </Link>
          <Link href="#service" className="text-[12px] md:text-base hover:text-primary">
            Serviços
          </Link>
          <Link href="#about" className="text-[12px] md:text-base hover:text-primary">
            Sobre
          </Link>
          <Link href="#price" className="text-[12px] md:text-base hover:text-primary">
            Preços
          </Link>
          <Link href="#gallery" className="text-[12px] md:text-base hover:text-primary">
            Galeria
          </Link>
        </div>
        <div className="">
          <p className="font-bold text-white">Contato</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-start gap-2 whitespace-nowrap mt-2">
              <FaLocationDot className="text-primary" />
              <p className="text-white text-[12px] md:text-base">
                Bairro Campestre
              </p>
            </div>
            <div className="flex items-center justify-start gap-2 xs:whitespace-nowrap">
              <FaClock className="text-primary" />
              <p className="text-white text-[12px] md:text-base">
                seg-sexta 9:00 - 17:00 /sab 9:00 - 15:00
              </p>
            </div>
            <div className="flex items-center justify-start gap-2 xs:whitespace-nowrap">
              <FaWhatsapp className="text-primary" />
              <p className="text-white text-[12px] md:text-base">
                86 99433-7055
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-4">
            <p className="font-bold text-white">Agendar</p>
          <button className=" bg-primary hover:bg-[#282828] border-2 border-[#282828] hover:border-primary hover:text-primary text-white transition duration-300 ease-in-out text-[10px] md:text-xs uppercase py-1 px-2 md:py-2 md:px-4 ">
            Consulta
          </button>
        </div>
      </div>
    </section>
  );
};
