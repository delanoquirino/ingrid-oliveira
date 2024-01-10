import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
export const SectionContact = () => {
  return (
    <section className=" bg-secondary">
      <div className="flex flex-col xs:flex-row gap-8 sm:items-center justify-around max-w-5xl py-12 md:py-28 mx-auto p-4">
        <div className="">
          <span className="text-primary uppercase font-semibold text-[10px] -tracking-tighter">
            Atendimento
          </span>
          <p className="text-base sm:text-lg font-semibold mt-4">
            segunda a sexta 9:00 - 17:00
          </p>
          <p className="text-base sm:text-lg font-semibold">
            sabado: 9:00 am - 15:00
          </p>
        </div>
        <div className="">
          <span className="text-primary uppercase font-semibold text-[10px] -tracking-tighter">
            Contato
          </span>
          <div className="flex items-center mt-4 gap-4">
            <FaInstagram className="text-primary" />
            <p>_studioingridoliveira</p>
          </div>
          <div className="flex items-center gap-4">
            <FaWhatsapp className="text-primary " />
            <p>86 99433-7055</p>
          </div>
        </div>
      </div>
    </section>
  );
};
