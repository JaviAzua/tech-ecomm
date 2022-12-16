import Image from "next/image";
import { BannerData } from "../types";
import { urlFor } from "../lib/client";

export interface Props {
  bannerData: BannerData | null;
}

function HeroBanner({ bannerData }: Props) {
  const src = urlFor(bannerData?.image).url();

  return (
    <div className=" select-none relative group rounded-2xl mx-auto w-11/12 h-[60vh]  mt-10 shadow-md shadow-darkblack">
      <div className="absolute rounded-2xl inset-0 bg-black " />
      <Image
        alt=""
        src={src}
        className="absolute inset-0 rounded-2xl object-cover opacity-60 group-hover:opacity-100 transition-all duration-300"
        fill
      />
      <h2 className="absolute text-white/20 font-extrabold text-8xl md:text-9xl left-2 md:inset-x-0 md:top-0 lg:text-right ">
        {bannerData?.midText.toUpperCase()}
      </h2>
      <div className=" w-3/4 md:w-full relative h-full"></div>
      <div className="absolute bottom-0 left-2 lg:left-3/4">
        <p className=" text-tightRed">
          {bannerData?.product} - Save up to {bannerData?.discount} %
        </p>
        <p className="text-xs text-lightgrey">{bannerData?.desc}</p>
      </div>
      <div className="absolute left-4 top-1/3 md:top-2/4 lg:top-1/3">
        <h3 className="text-white font-black text-5xl md:text-6xl lg:text-7xl ">
          {bannerData?.smallText.toUpperCase()}
        </h3>

        <button className="text-white cursor-pointer relative  font-semibold py-8 px-20 md:py-10 lg:py-6 md:px-32 lg:px-44 bg-tightRed hover:bg-lightRed hover:text-darkblack duration-700 ">
          {bannerData?.buttonText}
        </button>
      </div>
    </div>
  );
}

export default HeroBanner;
