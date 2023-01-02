import Image from "next/image";
import { BannerData } from "../types";
import { urlFor } from "../lib/client";
import Link from "next/link";

export interface Props {
  footerBanner: BannerData;
}

export default function FooterBanner({ footerBanner }: Props) {
  const src = urlFor(footerBanner.image[1]).url();

  return (
    <div className="relative min-h-[32vh]  flex bg-lightRed rounded-md">
      <div className="flex flex-col justify-center pl-1 md:pl-3">
        <h3 className="text-white text-6xl font-black z-10">
          {footerBanner.midText.toUpperCase()}
        </h3>
        <p className="hidden md:flex md:z-auto text-xl font-bold">
          {footerBanner.smallText}
        </p>
        <p className="z-10 md:z-auto text-white text-4xl font-black">
          {footerBanner.discount}% OFF
        </p>
        <Link href={"/category/component"}>
          <button className="bg-lightgrey font-medium text-lg absolute bottom-5 right-2 lg:right-8 p-6 px-12 rounded md:px-36 md:py-8 hover:bg-white duration-500 z-10">
            {footerBanner.buttonText}
          </button>
        </Link>
        <Image
          src={src}
          alt=""
          width={500}
          height={0}
          className="absolute lg:right-[30%] md:right-[20%]"
        />
      </div>
    </div>
  );
}
