import { BsCartCheckFill } from "react-icons/bs";
import { useEffect } from "react";
import { runFireworks } from "../lib/utils";
import Link from "next/link";
import Head from "next/head";

export default function Succes() {
  useEffect(() => {
    runFireworks();
  }, []);

  return (
    <div className="py-10">
      <Head>
        <title>Tech Ecomm - Succesfull purchase</title>
        <meta
          name="tech_ecommerce"
          content="tech ecommerce made by Javier Azua in NEXTjs with Tailwind, Ts and Sanity"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="rounded-xl bg-lightRed min-h-[20vh] w-[80%] mx-auto">
        <div className="flex items-center justify-center gap-2 flex-wrap py-2">
          <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center">
            <BsCartCheckFill className="text-[#19d12f] w-8 h-8 " />
          </div>
          <h2 className="text-white text-2xl font-semibold py-8">
            Thank you for your purchase
          </h2>
        </div>
        <div className="flex justify-center text-sm w-[90%] mx-auto">
          <p>
            The package will be seended in 2/3 working days. If u have any
            problems please contact the:&nbsp;
            <span className="underline cursor-pointer text-[#2a30e8]">
              support center
            </span>
          </p>
        </div>
        <div className="flex justify-center py-8">
          <Link href={"/"}>
            <button className="bg-white font-bold px-8 py-2 rounded hover:scale-105 duration-500 text-lightRed text-center">
              CONTINUE SHOPPING
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
