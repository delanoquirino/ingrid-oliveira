"use client";
import { useState } from "react";
import { MenuDropDown } from "./MenuDropDown";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type Props = {};

export const NavBar = (props: Props) => {
  const [animationParent] = useAutoAnimate();
  const [showMenu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu(!showMenu);
  }

  return (
    <>
      <ul className="hidden md:flex text-xs uppercase gap-4">
        <li className="hover:text-primary cursor-pointer transition duration-300 ease-in-out">
          Serviços
        </li>
        <li className="hover:text-primary cursor-pointer transition duration-300 ease-in-out">
          Agendar
        </li>
        <li className="hover:text-primary cursor-pointer transition duration-300 ease-in-out">
          Galeria
        </li>
        <li className="hover:text-primary cursor-pointer transition duration-300 ease-in-out">
          Contato
        </li>
        <li>
          <MenuDropDown />
        </li>
      </ul>
      {showMenu && (
        <ul className="fixed bg-white z-50 gap-4 inset-x-0 top-24 mx-4 py-2 flex flex-col items-center rounded-xl border-[2px]  border-primary md:hidden">
          <li className="hover:text-primary cursor-pointer transition duration-300 ease-in-out">
            Serviços
          </li>
          <li className="hover:text-primary cursor-pointer transition duration-300 ease-in-out">
          Sobre
          </li>
          <li className="hover:text-primary cursor-pointer transition duration-300 ease-in-out">
          Preço
          </li>
          <li className="hover:text-primary cursor-pointer transition duration-300 ease-in-out">
          Galeria
          </li>
          <li className="hover:text-primary cursor-pointer transition duration-300 ease-in-out">
          FeedBack
          </li>
          <li className="hover:text-primary cursor-pointer transition duration-300 ease-in-out">
          Contato
          </li>
          <li className="hover:text-primary cursor-pointer transition duration-300 ease-in-out">
          Agendar
          </li>
          
        </ul>
      )}

      <button ref={animationParent} onClick={toggleMenu} className=" md:hidden">
        {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
    </>
  );
};
