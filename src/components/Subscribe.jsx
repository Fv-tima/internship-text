import React from "react";
import mail from "../assets/images/mail.png"

export default function Subscribe() {
  return (
    <div className="bg-purple flex justify-between px-[219px] py-[28px] mt-24">
      <h1 className="text-white text-[20px] font-bold w-[237px] text-center">Subscribe to our Newsletter</h1>
        <input type="text" placeholder="Name" className="text-[#c4c4c4] bg-white border-bone outline-none p-[16px] px-[60px]  rounded-md"/>
      <input type="text" placeholder="Email" className="text-[#c4c4c4] bg-white border-bone outline-none p-[16px] px-[60px] rounded-md"/>
      <button className="text-[20px] font-bold text-white border p-[16px] border-white bg-purple rounded-md flex space-x-4 items-center"><img src={mail} alt="mail" /><span>Subscribe</span></button>
    </div>
  );
}
