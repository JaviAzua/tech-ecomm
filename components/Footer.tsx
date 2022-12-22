import Image from "next/image";

export default function Footer() {
  return (
    <div className="pt-16 text-xs">
      <div className="relative min-h-[20vh] bg-lightRed flex flex-wrap justify-evenly">
        <Image
          alt=""
          src={"/logoWhite.svg"}
          width={200}
          height={200}
          className="pt-2 absolute opacity-20 top-0 -left-10 md:block z-0"
        />

        <div className="footerTitles">
          <h5 className="text-lg ">Get to Know Us</h5>
          <p className="footerItem">Careers</p>
          <p className="footerItem">Blog</p>
          <p className="footerItem">About TechEcomm</p>
          <p className="footerItem">Investor Relations</p>
          <p className="footerItem">TechEcomm Devices</p>
          <p className="footerItem">TechEcomm Science</p>
        </div>
        <div className="footerTitles">
          <h5 className="text-lg">Let Us Help You</h5>
          <p className="footerItem">TechEcomm and COVID-19</p>
          <p className="footerItem">Your Account</p>
          <p className="footerItem">Your Orders</p>
          <p className="footerItem">Shipping Rates & Policies</p>
          <p className="footerItem">Manage Your Content and Devices</p>
          <p className="footerItem">Help</p>
        </div>
        <div className="footerTitles">
          <h5 className="text-lg">Make Money with Us</h5>
          <p className="footerItem">Sell products</p>
          <p className="footerItem">Your Orders</p>
          <p className="footerItem">Shipping Rates & Policies</p>
          <p className="footerItem">Manage Your Content and Devices</p>
          <p className="footerItem">Help</p>
        </div>
        <div className="footerTitles">
          <h5 className="text-lg">Tech Payment Products</h5>
          <p className="footerItem">Business Card</p>
          <p className="footerItem">Shop with Points</p>
          <p className="footerItem">Reload Your Balance</p>
          <p className="footerItem">Currency Converter</p>
        </div>
      </div>
      <p className="bg-lightRed bottom-0 text-white text-right pr-2">
        Tech Ecomm - 2022 All rights reserved - Made by Javier Azua
      </p>
    </div>
  );
}
