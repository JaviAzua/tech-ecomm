import Head from "next/head";
import MainHeader from "./MainHeader";
import Footer from "./Footer";

export interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <Head>
        <title>Tech Ecomm</title>
        <meta
          name="tech_ecommerce"
          content="tech ecommerce made by Javier Azua in NEXTjs with Tailwind, Ts and Sanity"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <MainHeader />
      </header>

      <main className="w-full max-w-[1400px] mx-auto">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
