"use client"
import React from "react";
import { Dancing_Script } from "next/font/google";
import { CardService } from "./CardService";
import services from "@/utils/services";

const dancing = Dancing_Script({ weight: "400", subsets: ["latin"] });

type Props = {};

export const SectionServices = (props: Props) => {
  return (
    <section className="max-w-5xl py-12 md:py-28 mx-auto p-4">
      <div className="flex flex-col md:flex-row md:gap-24 gap-4 " >
        <h2
          className={` ${dancing.className} text-3xl sm:text-7xl text-primary`}
        >
          Serviços
        </h2>
        <div className="flex-1">
          <h3 className="text-xl sm:text-4xl font-semibold">O que nós fazemos</h3>
          <p className="text-base sm:text-lg">
            Ter uma boa aparência só pode fazer você se sentir melhor
          </p>
        </div>
      </div>
      <div>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 mt-10 gap-4 ">
            {services.map((project, index) => (
              <CardService
                key={index}
                title={project.title}
                tag={project.tag}
                imageSrc={project.imageSrc}
              />
            ))}
          </div>
      </div>
    </section>
  );
};
