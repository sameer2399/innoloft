import { TRL_LIST } from '../constants' 
import { useDispatch } from 'react-redux'
import { addTrl } from '../trlSlice'
import { useEffect } from 'react'
import axios from 'axios';

const useTrlList = () => {
const dispatch = useDispatch();
const fetchData = async () => {
  const data = await axios.get('https://api-test.innoloft.com' + TRL_LIST);

  dispatch(addTrl(data.data));

}

useEffect(() => {
  fetchData();
}, [])
}

export default useTrlList;