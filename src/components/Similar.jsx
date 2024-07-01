import React from 'react'
import { Wrapper } from './PriceRange'
import left from "../assets/images/left.svg"
import right from "../assets/images/right.svg"

export default function Similar() {
  return (
    <div className="px-[60px] py-[40px]">
      <div className="p-5 border-2 flex justify-between border-stain-white border-t-purple border-t-8 my-4">
        <p className="font-semibold text-[20px] uppercase">You may also like</p>
       <div className="flex items-center space-x-4">
        <img src={left} alt="left" />
        <img src={right} alt="right" />
       </div>
      </div>
      <Wrapper />
    </div>
  );
}