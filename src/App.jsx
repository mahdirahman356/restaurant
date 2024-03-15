
import './App.css'
import FoodTitle from './BuyFood/FoodTitle'
import Header from './Header/Header'
import Navbar from './Header/Navbar'
import Buy from './BuyFood/Buy'
import { useEffect, useState } from 'react'
import AddCard from './BuyFood/AddCard'

function App() {
  let [buy,setBuy] = useState([])

  useEffect(()=>{
    fetch('Food.json')
    .then(res => res.json())
    .then(data => setBuy(data))
  },[])

  let [add,setAdd] = useState([])
 let  hendleAddCardButton = (addCard,id) => {

  let isExecute = add.find(add => add.id === id)
  if(!isExecute){
    let newAdd = [...add,addCard]
    setAdd(newAdd)
  }else{
    alert('Already Implemented')
  }
     
 }

 let hendleDelete =(deleted)=> {
  let deleteCard = add.filter(add => add.id !== deleted.id)
  setAdd(deleteCard)
 }


  return (
    <div className="w-[95%] md:w-[85%] mx-auto">
      <Navbar></Navbar>  
      <Header></Header>
      <FoodTitle></FoodTitle>
      <AddCard add ={add} hendleDelete={hendleDelete}></AddCard>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       {buy.map((buy,index)=> <Buy 
       key={index} 
       hendleAddCardButton ={hendleAddCardButton}
       buy={buy}
       ></Buy>)}
        </div>      
    </div>
  )
}

export default App
