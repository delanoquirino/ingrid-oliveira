import React from "react";
import { Dancing_Script } from "next/font/google";
import { CardService } from "./CardService";
import services from "@/utils/services";

const dancing = Dancing_Script({ weight: "400", subsets: ["latin"] });

type Props = {};

export const SectionServices = (props: Props) => {
  return (
    <div className="max-w-6xl py-28 mx-auto p-4">
      <div className="flex gap-8">
        <h2
          className={` ${dancing.className} text-3xl sm:text-7xl text-primary flex-1`}
        >
          Serviços
        </h2>
        <div>
          <h3 className="text-2xl sm:text-4xl font-bold">O que nós fazemos</h3>
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
    </div>
  );
};
