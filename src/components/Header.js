import React from 'react'
import { useSelector } from "react-redux";

const Header = () => {
  const productDetails = useSelector((store) => store.product.product);
  if(!productDetails) return null;
  return (
    <div className='flex sm:pl-56 sm:pr-40 sm:py-2 bg-[#272e71] sm:h-14 w-full '>
    <div className=' sm:mt-1'>
        <img className='ml-5 sm:ml-0 h-8 sm:h-8 change-color' src="https://img.innoloft.com/logo.svg" alt="logo" />
    </div>
    <div className='hidden sm:inline-block sm:ml-4 sm:mt-1'>
        <input className='border border-black sm:w-full text-xs sm:pl-6 h-8 ' class type="Search" placeholder='Enter interests, keyword, company name, etc.'/>
    </div>
    <div className='flex sm:ml-96 md:ml-96 2xl:ml-[700px]'>
        <img className='hidden md:inline-block h-10 mx-2' src="https://static.thenounproject.com/png/3363124-200.png" alt="" />
        <img className='hidden md:inline-block h-10 mx-2' src="https://static.thenounproject.com/png/1454057-200.png" alt="" />
        <img className='hidden md:inline-block h-10 mx-2' src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png" alt="" />
        <img className='hidden md:inline-block h-10 mx-2 rounded-full' src={productDetails.user.profilePicture} alt="" />
        
    </div>
    </div>

  )
}

export default Header