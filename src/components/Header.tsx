import React from "react";
import { NavBar } from "./NavBar";
import { SocialMedial } from "./SocialMedial";
type Props = {};

export const Header = (props: Props) => {
  return (
    <header style={{
      background: "linear-gradient(to right, #F9F9F9 60%, #DCC7DA 40%)",
    }}>
      <div className="container mx-auto h-16 py-4 px-2 " >
        <div className="flex w-full h-full justify-between items-center gap-2">
          <div className="">ingrid oliveira</div>
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
