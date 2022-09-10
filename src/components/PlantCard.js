import React, {useState} from "react";

function PlantCard({item}) {
  const [isSoldOut, setIsSoldOut] = useState(true)
  
  function handleStock(){
    setIsSoldOut(()=> !isSoldOut)
  }
  console.log(item)
  const {image, price, name} = item
  console.log(image)
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isSoldOut ? (
        <button className="primary" onClick={handleStock}>In Stock</button>
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
