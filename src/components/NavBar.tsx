"use client";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Link } from 'react-scroll';


type Props = {};

export const NavBar = (props: Props) => {
  const [animationParent] = useAutoAnimate();
  const [showMenu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu(!showMenu);
    console.log("teste")
  }

  return (
    <>
      <ul className="hidden md:flex text-xs uppercase gap-4">
        <li className="hover:text-primary cursor-pointer transition duration-300 ease-in-out">
          <Link onClick={toggleMenu} to="services" smooth duration={500} >Serviços</Link>
        </li>
        <li className="hover:text-primary cursor-pointer transition duration-300 ease-in-out">
          <Link onClick={toggleMenu} to="about" smooth duration={500}>Sobre</Link>
        </li>
        <li className="hover:text-primary cursor-pointer transition duration-300 ease-in-out">
          <Link onClick={toggleMenu} to="price" smooth duration={500}>Preços</Link>
        </li>
        <li className="hover:text-primary cursor-pointer transition duration-300 ease-in-out">
          <Link onClick={toggleMenu} to="gallery" smooth duration={500}>Galeria</Link>
        </li>
        <li className="hover:text-primary cursor-pointer transition duration-300 ease-in-out">
          <Link onClick={toggleMenu} to="contact" smooth duration={500}>Contato</Link>
        </li>
            
      </ul>
      {showMenu && (
        <ul className="fixed bg-white z-50 gap-4 inset-x-0 top-24 mx-4 py-2 flex flex-col items-center rounded-xl border-[2px]  border-primary md:hidden">
         <li className="hover:text-primary cursor-pointer transition text-center">
         
            <Link onClick={toggleMenu} to="services" smooth duration={500} className="p-2 font-semibold rounded-lg">Serviços</Link>
          
        </li>
        <li className="hover:text-primary cursor-pointer transition text-center">
         
            <Link onClick={toggleMenu} to="about" smooth duration={500} className="p-2 font-semibold rounded-lg">Sobre</Link>
          
        </li>
        <li className="hover:text-primary cursor-pointer transition text-center">
         
            <Link onClick={toggleMenu} to="price" smooth duration={500} className="p-2 font-semibold rounded-lg">Preços</Link>
          
        </li>
        <li className="hover:text-primary cursor-pointer transition text-center">
         
         <Link onClick={toggleMenu} to="gallery" smooth duration={500} className="p-2 font-semibold rounded-lg">Galeria</Link>
       
     </li>
     <li className="hover:text-primary cursor-pointer transition text-center">
         
         <Link onClick={toggleMenu} to="contact" smooth duration={500} className="p-2 font-semibold rounded-lg">Contato</Link>
       
     </li>
          
        </ul>
      )}

      <button ref={animationParent} onClick={toggleMenu} className=" md:hidden">
        {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
    </>
  );
};
