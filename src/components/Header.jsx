import React from 'react'
import email from "../assets/images/email.svg"
import dropdown from "../assets/images/dropdown.svg"
import check from "../assets/images/checked.svg"
import stroke from "../assets/images/stroke.svg"
import logo from "../assets/images/logo.png"
import search from "../assets/images/search.svg"
import cart from "../assets/images/cart.svg"
import user from "../assets/images/user.svg"


export default function Header() {
  return (
    <header className='font-medium'>
    <div className='bg-purple px-[60px] py-[14px] flex justify-between items-center text-white '>
      <a href="" className="flex space-x-2 justify-center text-[20px]">
        <img src={email} alt="Email jpg" />
        <span>SHAKARAHUBS.com</span></a>
        <div className="flex space-x-3 justify-center">
          <div className="text-[18px] flex space-x-2 justify-center"><span>NGN</span>
          <img src={dropdown} alt="dropdown" />
          <img src={stroke} alt="dropdown" /></div>
          <div className="text-[18px] flex space-x-2 justify-center"><span>English</span>
          <img src={dropdown} alt="dropdown"/>
          <img src={stroke} alt="dropdown" /></div>
          <div className="text-[18px] flex space-x-2 justify-center">
          <img src={check} alt="Check" width={14.5} height={10.5}/>
            <span>Checkout</span>
         </div>
        </div>
        </div>
        <div className='flex justify-between items-center px-[60px] py-[14px] text-light-dark text-[18px]'>
          <a href="">
            <img src={logo} alt="Logo" />
          </a>
          <div className='flex space-x-0'>
            <button className='bg-purple gap-2 rounded-tl-md rounded-bl-md p-2 text-white flex justify-end items-center'>All <img src={dropdown} alt="dropdown"/></button>
            <div className="relative">
          <input type="text" className='outline-purple focus:none border-2 border-purple px-2  w-[400px] py-3 rounded-tr-md rounded-br-md '/>
          <img src={search} alt="search" className='absolute right-9 top-3'/>
          </div></div>
          <div className="flex space-x-3 items-end">
          <div className="flex space-x-2 items-end">
            <div className="relative">
          <img src={cart} alt="cart" />
          <span className='absolute rounded-full px-1 bottom-5 left-5 bg-purple text-white text-sm'>2</span>
          </div>
            <p>CART - ₦12000.00</p>
          </div>
          <div className="flex space-x-2 items-end">
          <img src={user} alt="user"/>
            <p>Login/Create Account</p>
          </div>
        </div>
        </div>
       
    </header>
  )
}
