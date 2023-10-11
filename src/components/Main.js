import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import useProduct from '../utils/hooks/useProduct'
import useTrlList from '../utils/hooks/useTrlList'

const Main = () => {

  useProduct();
  useTrlList();


  return (
    <div className='flex'>
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Main