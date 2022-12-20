import Image from "next/image";
import Link from "next/link";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import { IoBagHandleSharp } from "react-icons/io5";
import { useState } from "react";

export default function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex z-50 select-none items-center justify-evenly py-4 bg-tightRed/20">
      <Link href={"/"}>
        <Image
          className="cursor-pointer resizeMini"
          src={"/logoCircle.svg"}
          width={40}
          height={40}
          alt="TechEcomm logo"
        />
      </Link>
      <button onClick={handleMenu} className="md:hidden">
        {menuOpen ? (
          <VscChromeClose className="w-10 h-10 md:hidden cursor-pointer" />
        ) : (
          <VscMenu className="w-10 h-10 md:hidden cursor-pointer" />
        )}
      </button>
      <ul
        className={`md:flex md:items-center md:py-0 py-12 md:text-base md:space-y-0 space-y-6 text-lg absolute md:static bg-lightRed md:bg-opacity-0 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          menuOpen ? "top-20 " : "top-[-500px]"
        }`}
      >
        <li className="navItem">Home</li>
        <li className="navItem">Headphones</li>
        <li className="navItem">Notebooks</li>
        <li className="navItem">Components</li>
        <li className="navItem">Accessories</li>
        <li className="navItem">Tablets</li>
      </ul>
      <button className="flex relative group">
        <IoBagHandleSharp className="group-hover:scale-105 transition-all duration-100 w-10 h-10 bg-white rounded-full" />
        <span className="absolute group-hover:scale-105 transition-all duration-100 bottom-0 right-0 bg-lightRed rounded-full w-6 h-6 flex items-center justify-center">
          2
        </span>
      </button>
    </nav>
  );
}
