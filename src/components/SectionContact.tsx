import Link from "next/link";
import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
export const SectionContact = () => {
  return (
    <section id="contact" className=" bg-secondary">
      <div className="flex flex-col xs:flex-row gap-8 sm:items-center justify-around max-w-5xl py-12 md:py-28 mx-auto p-4">
        <div className="">
          <span className="text-primary uppercase font-semibold text-[10px] -tracking-tighter">
            Atendimento
          </span>
          <p className="text-[10px] xs:text-base font-semibold mt-4">
            segunda a sexta 9:00 - 17:00
          </p>
          <p className="text-[10px] xs:text-base font-semibold">
            sabado: 9:00 am - 15:00
          </p>
        </div>
        <div className="">
          <span className="text-primary uppercase font-semibold text-[10px] -tracking-tighter">
            Contato
          </span>
          <div className="flex items-center mt-4 gap-4">
            <Link className="flex items-center gap-4 hover:bg-slate-200 p-1 rounded-sm" href="https://www.instagram.com/_studioingridoliveira/" target="_blank">
              <FaInstagram className="text-primary" />
               <p className="text-[10px] xs:text-base">_studioingridoliveira</p>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link className="flex items-center gap-4 hover:bg-slate-200 p-1 rounded-sm" href="https://wa.me/5586994337055?text=Ol%C3%A1+Estou+interessado%28a%29+em+agendar+um+hor%C3%A1rio+para+coloca%C3%A7%C3%A3o+de+c%C3%ADlios+ou+design+de+sobrancelhas.+Qual+seria+a+disponibilidade+para+os+pr%C3%B3ximos+dias%3F++Obrigado%28a%29%21+" target="_blank">
              <FaWhatsapp className="text-primary " />
              <p className="text-[10px] xs:text-base" >86 99433-7055</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
