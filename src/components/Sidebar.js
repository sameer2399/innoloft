import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

const Sidebar = () => {
  const productDetails = useSelector((store) => store.product.product);
  if(!productDetails) return null;
  return (
    <div className='sm:ml-0 sm:pt-10 sm:pl-32 sm:mt-0 sm:h-screen sm:items-center sm:w-96 sm:shadow-lg'>
        <ul className='flex md:flex-col'>
            <li className='hidden sm:inline-block my-6 mx-10'>  
            
            
              <img
                className="2xl:ml-6 2xl:h-16 sm:h-14 rounded-full"
                src={productDetails.user.profilePicture}
                alt=""
              />
              <span className="2xl:ml-6 font-bold sm:ml-2">
                {productDetails.user.firstName} {productDetails.user.lastName}
              </span>
            
            </li>

            <Link to='/'><li className='m-4 sm:my-6 sm:mx-20'>HOME</li></Link>
            
            <Link to='/view'><li className='m-4 sm:my-6 sm:mx-20'> VIEW PRODUCT</li></Link>
            
            <Link to='/edit'><li className='m-4 sm:my-6 sm:mx-20'> EDIT PRODUCT</li></Link>
            
        </ul>
    </div>
  )
}

export default Sidebar