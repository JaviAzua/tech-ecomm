import Head from "next/head";
import HeroBanner from "../components/HeroBanner";
import MainHeader from "../components/MainHeader";

export default function Home() {
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
        <HeroBanner />
      </main>
    </div>
  );
}
