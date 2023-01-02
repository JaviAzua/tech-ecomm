import Image from "next/image";
import Link from "next/link";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import { IoBagHandleSharp } from "react-icons/io5";
import { useState } from "react";
import { useStateContext } from "../context/StateContext";
import { ContextTypes } from "../types";
import Cart from "./Cart";
import toast from "react-hot-toast";

const navBariL = [
  {
    title: "Headphones",
    type: "headphone",
  },
  {
    title: "Notebooks",
    type: "notebook",
  },
  {
    title: "Components",
    type: "component",
  },
  {
    title: "Accessories",
    type: "accessory",
  },
  {
    title: "Tablets",
    type: "tablet",
  },
];

export default function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartOpen, setCartOpen, cartItems, totalQuantities } =
    useStateContext() as ContextTypes;

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCart = () => {
    if (cartItems.length === 0) {
      toast("No cart items", {
        duration: 1500,
        icon: "⛔",
      });
    } else {
      setCartOpen(!cartOpen);
    }
  };

  return (
    <nav className="flex sticky z-50 select-none items-center justify-evenly py-4 bg-lightRed">
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
        className={`md:flex text-white md:text-grey md:items-center md:py-0 py-12 md:text-base md:space-y-0 space-y-6 text-lg absolute md:static bg-lightRed md:bg-opacity-0 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          menuOpen ? "top-20 " : "top-[-500px]"
        }`}
      >
        <Link href={"/"}>
          <li onClick={handleMenu} className="navItem">
            Home
          </li>
        </Link>
        {navBariL.map((navbarItem) => (
          <Link key={navbarItem.type} href={`/category/${navbarItem.type}`}>
            <li onClick={handleMenu} className="navItem">
              {navbarItem.title}
            </li>
          </Link>
        ))}
      </ul>
      {cartOpen && <Cart />}
      <button onClick={handleCart} className="flex relative group">
        <IoBagHandleSharp className="group-hover:scale-105 transition-all duration-100 w-10 h-10 bg-white rounded-full" />
        {totalQuantities! >= 1 ? (
          <div className="absolute group-hover:scale-105 transition-all duration-100 bottom-0 right-0 bg-[#ffec1f] rounded-full w-4 h-4 flex items-center justify-center text-xs ">
            {totalQuantities}
          </div>
        ) : (
          ""
        )}
      </button>
    </nav>
  );
}
