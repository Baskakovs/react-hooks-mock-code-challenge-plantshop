import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [search, setSearch] = useState("")
  const [itemList, setItemList] = useState([])
  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then((res)=>res.json())
    .then((obj)=>setItemList(obj))
  },[])

  function handleSubmit(newItem){
    fetch(`http://localhost:6001/plants`,{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newItem)
    })
    .then((res)=>res.json())
    .then((obj)=> {
      setItemList([...itemList, obj])
    })
  }

  function handleSearch(s){
    setSearch(s)
  }
  console.log(search)


  const itemsToDisplay = itemList.filter((item)=>{
    if(item.name.toUpperCase().includes(search.toUpperCase())){
      return ()=>item
    }
  })
  return (
    <main>
      <NewPlantForm onSubmit={handleSubmit}/>
      <Search onSearch={handleSearch}/>
      <PlantList itemList={itemsToDisplay} />
    </main>
  );
}

export default PlantPage;
