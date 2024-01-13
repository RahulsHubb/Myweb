import React, { useEffect, useState } from 'react'
import ProductCard from './product-card'
import ClassComponent from './classComponent'
import { useDispatch, useSelector } from 'react-redux';
import { increment, test } from '../../dataStore/actions';
import { Link } from 'react-router-dom';
import { topRestroList } from './utils/apiInfo';
import useOnlineStatus from './customHook/useOnlineStatus';
import SimmerUi from './SimmerUi';
import NotFound from './NotFound';

const ProductBase = () => {
  const myVariable = useSelector((state) => state.myVariable);
  const [apiData, setApiData] = useState([])
  const val = useSelector((state)=> state.test)
  console.log(myVariable, "myVariable", val);
  const dispatch = useDispatch();

  // const onlineStatus = useOnlineStatus();
  // if(onlineStatus === false) return <NotFound/>
  // console.log(onlineStatus, "onlineStatus");

  const [onlineStatus, setOnlineStatus] = useState();

  useEffect(()=>{
    // debugger
    console.log(navigator.onLine);
    
    window.addEventListener('online', function(e) {
        console.log('And we\'re back :).', e);
        setOnlineStatus(true)
    }, false);
                
    window.addEventListener('offline', function(e) {
      setOnlineStatus(false)
        console.log('Connection is down.');
    }, false);
},[])
  
  if(onlineStatus === false) return <NotFound/>
  // if(onlineStatus === false) return <NotFound/>
  // if(onlineStatus === false) return <NotFound/>

  const getData =async() =>{
    const data = await fetch(topRestroList);
    
    const json = await data.json();
    
    console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants, "api called");
    setApiData(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  }
  
  useEffect(()=>{
    getData();
  },[])
  // if(apiData.length===0 ) return <SimmerUi/>


  return (
    <div className='product_base p-4'>
      {onlineStatus ? <p> 🟢</p> :<p>🔴</p>}
      <div className="_1QBzC">
        <div className="_2O4-3">
          <input type="text" className="_2FkHZ" placeholder="Search for restaurants and food" maxLength="200"/>
        </div>
        <div className="_2p8XD">
          <span className="icon-magnifier"></span>
        </div>
      </div>
      <div className="p-3">
        <h1>Number of Orders {myVariable} {val}</h1>
        <button onClick={()=>
          {dispatch(increment(myVariable+1));
          dispatch(test(!val));
          console.log("first")
          }}>+</button>
      </div>

        {apiData.map((item, index)=>{
          return(
            <Link to={"/restaurent/"+item.info.id} key={item.info.id}>
              <ProductCard
              num={index}
              productName={String(item.info.cuisines)} 
              imgId={item.info.cloudinaryImageId} 
              info={item.info.name} avgRating={item.info.avgRating} 
              // sellPrice={item.info.aggregatedDiscountInfoV3 &&item.info.aggregatedDiscountInfoV3.subHeader.split(" ").pop()}
              sellPrice={Number(item.info.costForTwo.substring(1,4))/2}
              mrpPrice={Number(item.info.costForTwo.substring(1,4))/2 + 24}
              discountPercentage={item.info.aggregatedDiscountInfoV3 ?item.info.aggregatedDiscountInfoV3.header +" " + item.info.aggregatedDiscountInfoV3.subHeader: "Flat ₹24 OFF"
            }/> 
            </Link>
          )
        })}

        {/* <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/> */}
        {/* <ClassComponent name={"Nike"}/> */}
        
    </div>
  )
}

export default ProductBase