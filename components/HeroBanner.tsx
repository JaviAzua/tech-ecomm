import { BannerData } from "../types";

export interface Props {
  bannerData: BannerData[] | null;
}

function HeroBanner({ bannerData }: Props) {
  return (
    <div className="relative rounded-md mx-auto w-11/12 h-[50vh] bg-grey mt-10 z-[-1]">
      {bannerData?.map((banner) => (
        <div key={banner._id}>{banner.midText}</div>
      ))}
    </div>
  );
}

export default HeroBanner;
