import React from "react";
import { NavBar } from "./NavBar";
import { SocialMedial } from "./SocialMedial";

import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({ weight: "400", subsets: ["latin"] });

type Props = {};

export const Header = (props: Props) => {
  return (
    <header style={{
      background: "linear-gradient(to right, #F9F9F9 60%, #DCC7DA 40%)",
    }}>
      <div className="max-w-6xl mx-auto h-16 py-4 px-2 " >
        <div className="flex w-full h-full justify-between items-center gap-2">
          <div className={` ${dancing.className} `}>Ingrid Oliveira</div>
          <div className="flex items-center gap-4 md:order-last">
            <SocialMedial />
            <button className=" bg-black hover:bg-primary text-white transition duration-300 ease-in-out text-[10px] md:text-xs uppercase py-1 px-2 md:py-2 md:px-4">
              Marcar Consulta
            </button>
          </div>
          <div>
            <NavBar />
          </div>
        </div>
      </div>
    </header>
  );
};
