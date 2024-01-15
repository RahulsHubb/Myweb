import React from "react";

const ItemList = ({ cards }) => {
  return cards.map((item, index) => {
    return (
      <div className="flex justify-between size-full my-2" key={index}>
        <div className="">
          <p className="text-sm">{item.card.info.name}</p>
          <p className="">{item.card.info.price/100}</p>
        </div>
        <div className="images">
          <img className=" h-16 w-16" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+item.card.info.imageId} alt="f" />
        </div>
      </div>
    );
  });
};

export default ItemList;
