import React from 'react'
import adire from "../assets/images/adire.png"
import stars from "../assets/images/stars.svg"
import ProductCardNav from './ProductCardNav'
import ProductDetail from './ProductDetail'
import PriceRange from './PriceRange'
import Similar from './Similar'

export default function ProductCard() {
  return (
    <div className='border-[#c1c1c1] border-b-2'>
    <div className='px-[60px] py-[40px] text-light-dark '>
      <ProductCardNav/>
      <div>
        <h1 className='font-bold text-[30px]'>ADIRE STYLES</h1>
        <div className="p-5 my-4 border-2 flex justify-between border-stain-white border-t-purple border-t-8">
          <p className='uppercase font-semibold text-[20px]'>Product</p>
          <p className='uppecase font-semibold text-[20px]'>Total</p>
        </div>
      </div>
      <div className="flex py-[14px] space-x-8">
        <div className="bg-stain-white"><img src={adire} alt="adire"  className='px-[40px] py-[20px]'/>
          </div>
          <div className="flex flex-col justify-center space-y-8 w-2/3">
          <div className="flex justify-between font-semibold">
            <h2 className='text-[30px]'>Adire Styles</h2>
            <h2 className='text-purple text-[30px]'>₦80,000.00</h2>
          </div>
          <p className='text-[25px]'>Brand: Adire</p>
          <div className="flex space-x-2"> <p className='text-[25px]'>Reviews:</p> 
          <img src={stars} alt="stars" /></div>
          <div className="flex space-x-2"> <p className='text-[25px]'>Quantity:</p> 
        <input type="number" placeholder='2' className='p-2 border w-14 text-[20px]'/></div>
        <p className='text-[25px]'>Price: ₦40,000.00</p>
        <button className='bg-purple p-2 text-white text-[25px] font-medium'>Checkout</button>
          </div>
      </div>
    </div>
    <ProductDetail/>
    <PriceRange/>
    <div className="my-80">
    <Similar/>
    </div>
    </div>
  )
}

export const details=[
  {
    id:1,
    img:"/adire 5 1.png",
    details:"Authentic African Batik Tie and Dye short sleeve Unisex",
  },
  {
    id:2,
    img:"/adire pic 2 1.png",
    details:" VintlyeOrigin: CN(Origin)Material: CottonType: DashikiGender: MENModel Number: wyn1640Item Type 1: African boubou menItem Type 2: Nigerian agbada robe suitsItem",
  },
  {
    id:3,
    img:"/adire 4 1.png",
    details:"This is a beautiful dashiki dress that is very roomy and is fit for all occasions. It is light weight blue cotton denim and dashiki print. 100% cotton exclusive of decoration. Scarf included One size  Color: blue denim Ankle length. Two side pockets.",
  },
  {
    id:4,
    img:"/adire 3 1.png",
    details:"VintlyeOrigin: CN(Origin)Material: CottonType: DashikiGender: Men.Type 1: Nigerian agbada robe suitsItem",
  },
  {
    id:5,
    img:"/african  2.png",
    details:"African Fabric Kimonos",
  }
]