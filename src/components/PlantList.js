import React from "react";
import PlantCard from "./PlantCard";

function PlantList({itemList}) {
  console.log(itemList)
  return (
    <ul className="cards">{itemList.map((item)=>{
      return <PlantCard item={item} />
    })}</ul>
  );
}

export default PlantList;
