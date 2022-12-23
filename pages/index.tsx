import HeroBanner from "../components/HeroBanner";
import { client } from "../lib/client";
import { BannerData, Product } from "../types";
import ProductCard from "../components/ProductCard";
import FooterBanner from "../components/FooterBanner";
import Head from "next/head";

export interface Props {
  products: Product[] | null;
  bannerData: BannerData[] | null;
}

export default function Home({ products, bannerData }: Props) {
  return (
    <div className="px-1">
      <HeroBanner bannerData={bannerData![0]} />
      <section className="flex flex-col gap-10">
        <div>
          <h2 className="text-center pt-10 font-bold text-4xl">
            Latest Products
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 w-full">
          {products?.slice(0, 10).map((product) => (
            <div key={product._id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <div>
          <FooterBanner footerBanner={bannerData![0]} />
        </div>
      </section>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const banner_query = '*[_type == "banner"]';
  const bannerData = await client.fetch(banner_query);

  return {
    props: {
      products,
      bannerData,
    },
  };
};
