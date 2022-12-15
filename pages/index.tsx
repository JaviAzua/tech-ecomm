import Head from "next/head";
import HeroBanner from "../components/HeroBanner";
import MainHeader from "../components/MainHeader";
import { client } from "../lib/client";
import { BannerData, Product } from "../types";

export interface Props {
  products: Product[] | null;
  bannerData: BannerData[] | null;
}

export default function Home({ products, bannerData }: Props) {
  return (
    <div>
      <Head>
        <title>Tech Ecomm</title>
        <meta
          name="tech_ecommerce"
          content="tech ecommerce made by Javier Azua in NEXTjs with Tailwind, Ts and Sanity"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader />
      <main>
        <HeroBanner bannerData={bannerData} />

        <div>{products?.map((product) => product.name)}</div>
      </main>
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
