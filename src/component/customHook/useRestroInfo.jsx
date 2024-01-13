import React, { useEffect, useState } from 'react'
import { menuApi } from '../utils/apiInfo';

const useRestroInfo = (resId) => {
    
const [restaurantInfo, setRestaurentsInfo] = useState(null);
  useEffect(()=>{
      getDataById()
  },[]);

  const getDataById = async()=>{
    const dataById = await fetch(menuApi+resId)
    const json = await dataById.json();
    console.log(json.data , "jsonBy Id");
    setRestaurentsInfo(json.data);
    console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
  }
  return restaurantInfo;

};

export default useRestroInfo