import React from "react";
import { details } from "./ProductCard";
import bag from "../assets/images/bag 1.svg";
import left from "../assets/images/left.svg"
import right from "../assets/images/right.svg"

export default function PriceRange() {
  return (
    <div className="px-[60px] py-[40px]">
      <div className="p-5 border-2 flex justify-between border-stain-white border-t-purple border-t-8 my-4">
        <p className="uppercase font-semibold text-[20px]">Price Range</p>
       <div className="flex items-center space-x-4">
        <img src={left} alt="left" />
        <img src={right} alt="right" />
       </div>
      </div>
      <Wrapper />
    </div>
  );
}

export function Wrapper() {
  return (
    <div className="flex justify-center space-x-6 items-center wrapper">
      {details.map((item) => (
        <div className="flex flex-col space-y-4 items-center w-[326px] h-[299px]">
          <div className="bg-stain-white">
            <img src={item.img} alt="adire" className="px-[40px] py-[20px] h-[295px]" />
          </div>
          <div className="py-2">
            <p className="h-40">{item.details}</p>
            <div className="flex space-x-4  w-full py-4 mt-6 items-center">
              <h3>Qty</h3>
              <input
                type="number"
                placeholder="2"
                className="p-2 border w-24 text-[20px]"
              />
              <img src={bag} alt="bag" className="p-3 border" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
