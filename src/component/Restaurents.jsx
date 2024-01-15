import React, {useEffect, useState } from 'react'
import SimmerUi from './SimmerUi';
import { useParams } from 'react-router-dom';
import useRestroInfo from './customHook/useRestroInfo';
import down from "../images/down-arrow.png"
import ItemList from './itemList';

const Restaurents = () => {
    // const [restaurantInfo, setRestaurentsInfo] = useState(null);
    const [restaurentsMenu, setRestaurentsMenu] = useState(null);
    const {resId}= useParams();
    const [collapse, setCollapse]=useState(null)
    
    const restaurantInfo = useRestroInfo(resId);
    console.log(restaurantInfo, "restaurantInfo");

    const getDataById = async(id)=>{
      const dataById = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.572646&lng=88.36389500000001&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER"
        )
        const json = await dataById.json();
        console.log(json.data , "jsonBy Id");
        // setRestaurentsInfo(json.data);
        // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
        // setRestaurentsMenu(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
      }
        
      if (restaurantInfo === null || restaurantInfo === undefined ) return <SimmerUi/>
      useEffect=(()=>{
        console.log(restaurantInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
        setRestaurentsMenu(restaurantInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
      }, [])

      const categoryCards = restaurantInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((item)=>{
        return item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        });
      console.log(categoryCards);

      const {name , cuisines,imageId,sla, feeDetails,costForTwoMessage, id, city} = restaurantInfo.cards[0].card.card.info;
      const {itemCards} = restaurantInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      
  return (
    <div style={{padding: "24px"}}>
      <h1 className=' text-2xl font-bold'>{name}</h1>
        
      <h4 className=' font-bold'
      ><svg className="RestaurantTimeCost_icon__8UdT4" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none"><circle cx="9" cy="9" r="8.25" stroke="#3E4152" strokeWidth="1.5"></circle><path d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z" fill="#3E4152"></path></svg>{costForTwoMessage}</h4>
        <h4 className=' font-bold'>
        <svg className="RestaurantTimeCost_icon__8UdT4" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none"><circle r="8.35" transform="matrix(-1 0 0 1 9 9)" stroke="#3E4152" strokeWidth="1.3"></circle><path d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z" fill="#3E4152"></path></svg>
         {sla.slaString +" "}{feeDetails.message}</h4>
        <h4 className=' text-gray-400'>{cuisines.join(", ") + " From " + city}</h4>
        <h1 className=' font-bold text-2xl italic'>More from {name}</h1>
          {categoryCards?.map((item, index)=>{
            return(
              <>
                {/* <div className='product_card' key={index}>

                    <img className=' product_img' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item.card.info.imageId} height={"34px"} width={"34px"} alt="" />
                    <p className=' bg-yellow-200 text-nowrap text-ellipsis overflow-hidden px-3  rounded text-green-400'>{item.card.info.name} ({item.card.info.itemAttribute.vegClassifier})</p>
                </div> */}

                <div key={index} className='w-1/2 m-auto shadow-lg p-3 border-b-2' onClick={()=> setCollapse(collapse ===index? null : index)}>
                  <div className="flex justify-between items-center ">
                    <p className='font-bold text-xl text-gray-700'>{item.card.card.title} {"("+item.card.card.itemCards.length+")"}</p>
                    <img  className=" w-10" src={down} alt="" />
                  </div>
                  {collapse === index && 
                  <ItemList cards={item.card.card.itemCards}/>}
                </div>
              
              </>
              
              

            )
          })}
    </div>
  )
}

export default Restaurents