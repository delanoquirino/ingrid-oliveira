"use client";
import { useState } from "react";
import { MenuDropDown } from "./MenuDropDown";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Link from "next/link";

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
          <Link href="#services">Serviços</Link>
        </li>
        <li className="hover:text-primary cursor-pointer transition duration-300 ease-in-out">
          <Link href="#about">Sobre</Link>
        </li>
        <li className="hover:text-primary cursor-pointer transition duration-300 ease-in-out">
          <Link href="#price">Preços</Link>
        </li>
        <li className="hover:text-primary cursor-pointer transition duration-300 ease-in-out">
          <Link href="#gallery">Galeria</Link>
        </li>
        <li className="hover:text-primary cursor-pointer transition duration-300 ease-in-out">
          <Link href="#contact">Contato</Link>
        </li>
            
      </ul>
      {showMenu && (
        <ul className="fixed bg-white z-50 gap-4 inset-x-0 top-24 mx-4 py-2 flex flex-col items-center rounded-xl border-[2px]  border-primary md:hidden">
         <li onClick={toggleMenu} className="hover:text-primary cursor-pointer transition duration-300 ease-in-out">
          <Link href="#services">Serviços</Link>
        </li>
        <li onClick={toggleMenu} className="hover:text-primary cursor-pointer transition duration-300 ease-in-out">
          <Link href="#about">Sobre</Link>
        </li>
        <li onClick={toggleMenu} className="hover:text-primary cursor-pointer transition duration-300 ease-in-out">
          <Link href="#price">Preços</Link>
        </li>
        <li onClick={toggleMenu} className="hover:text-primary cursor-pointer transition duration-300 ease-in-out">
          <Link href="#gallery">Galeria</Link>
        </li>
        <li onClick={toggleMenu} className="hover:text-primary cursor-pointer transition duration-300 ease-in-out">
          <Link href="#contact">Contato</Link>
        </li>
          
        </ul>
      )}

      <button ref={animationParent} onClick={toggleMenu} className=" md:hidden">
        {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
    </>
  );
};
