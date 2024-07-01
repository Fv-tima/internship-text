import React from "react";
import tw from "../assets/images/tw.svg";
import fb from "../assets/images/fb.svg";
import ins from "../assets/images/in.svg";
import yt from "../assets/images/yt.svg";

export default function Footer() {
  return (
    <div className="flex justify-center gap-x-12 w-full items-start bg-footer-purple px-[60px] py-[40px] text-white">
      <div className="flex flex-col space-y-3 text-[20px] mr-8">
        <h3 className="font-bold uppercase">Contact us</h3>
        <a href="/">Ikeja, Lagos</a>
        <a href="/">SHAKARAHUBS.com</a>
        <a href="tel:+">+234 909 385 3952</a>
        <a href="mailto:"> fax@company.com</a>
      </div>
      <div className="flex flex-col space-y-3 text-[20px] w-full">
        <h3 className="font-bold uppercase">Extras</h3>
        <a href="/" className="pb-1 border-b border-white">
          Brands
        </a>
        <a href="/" className="pb-1 border-b border-white">
          Gift Certificate
        </a>
        <a href="/" className="pb-1 border-b border-white">
          Affiliate
        </a>
        <a href="/" className="pb-1 border-b border-white">
          Specials
        </a>
        <a href="/" className="pb-1 border-b border-white">
          Contact Us
        </a>
      </div>
      <div className="flex flex-col space-y-3 text-[20px] w-full">
        <h3 className="font-bold uppercase">Information</h3>
        <a href="/" className="pb-1 border-b border-white">
          About Us
        </a>
        <a href="/" className="pb-1 border-b border-white">
          Delivery Information
        </a>
        <a href="/" className="pb-1 border-b border-white">
          Privacy Policy
        </a>
        <a href="/" className="pb-1 border-b border-white">
          Terms & Conditions
        </a>
        <a href="/" className="pb-1 border-b border-white">
          Contact Us
        </a>
        <a href="/" className="pb-1 border-b border-white">
          Site Map
        </a>
      </div>
      <div className="flex flex-col space-y-3 text-[20px] w-full">
        <h3 className="font-bold uppercase">My account</h3>
        <a href="/" className="pb-1 border-b border-white">
          My Account
        </a>
        <a href="/" className="pb-1 border-b border-white">
          Order History
        </a>
        <a href="/" className="pb-1 border-b border-white">
          Wish List
        </a>
        <a href="/" className="pb-1 border-b border-white">
          News Letter
        </a>
      </div>
      <div className="flex flex-col space-y-3 text-[20px] w-full">
        <h3 className="font-bold uppercase">My account</h3>
        <div className="flex justify-between items-center w-full">
          <img src={tw} alt="twitter" />
          <img src={fb} alt="facebook" />
          <img src={ins} alt="instagram" />
          <img src={yt} alt="youtube" />
        </div>
      </div>
    </div>
  );
}
