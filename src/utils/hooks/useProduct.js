import { PRODUCT } from '../constants' 
import { useDispatch } from 'react-redux'
import { addProduct } from '../productSlice'
import { useEffect } from 'react'
import axios from 'axios';

const useProduct = () => {
const dispatch = useDispatch();
const fetchData = async () => {
  const data = await axios.get('https://api-test.innoloft.com' + PRODUCT);
  // const json = await data.json();

  dispatch(addProduct(data.data));

}

useEffect(() => {
  fetchData();
}, [])
}

export default useProduct;