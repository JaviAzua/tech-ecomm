import Image from "next/image";
import { BannerData } from "../types";
import { urlFor } from "../lib/client";

export interface Props {
  bannerData: BannerData | null;
}

function HeroBanner({ bannerData }: Props) {
  const src = urlFor(bannerData?.image[0]).url();

  return (
    <div className="z-[-1] md:z-auto select-none relative group rounded-2xl mx-auto w-11/12 h-[50vh] md:h-[40vh] mt-10 shadow-sm shadow-darkblack">
      <div className="absolute rounded-2xl inset-0 bg-black " />
      <Image
        alt=""
        src={src}
        className="absolute inset-0 rounded-2xl object-cover opacity-60 group-hover:opacity-100 transition-all duration-300"
        fill
      />
      <h2 className="absolute text-white/20 font-extrabold text-7xl md:text-8xl left-2 md:inset-x-0 md:top-0 lg:text-right ">
        {bannerData?.midText.toUpperCase()}
      </h2>
      <div className=" w-3/4 md:w-full relative h-full"></div>
      <div className="absolute bottom-0 left-2 lg:right-2 lg:text-right">
        <p className=" text-lightRed">
          {bannerData?.product} - Save up to {bannerData?.discount} %
        </p>
        <p className="text-xs text-lightgrey">{bannerData?.desc}</p>
      </div>
      <div className="absolute left-4 lg:left-5 top-1/3 md:top-1/4 lg:top-1/3">
        <h3 className="text-white font-black text-5xl md:text-6xl lg:text-7xl ">
          {bannerData?.smallText.toUpperCase()}
        </h3>

        <button className="text-white cursor-pointer relative font-semibold py-8 px-20 md:py-6 lg:py-6 md:px-32 lg:px-44  bg-lightRed  duration-700 opacity-80 hover:opacity-100 ">
          {bannerData?.buttonText}
        </button>
      </div>
    </div>
  );
}

export default HeroBanner;
