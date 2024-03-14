
import './App.css'
import FoodTitle from './BuyFood/FoodTitle'
import Header from './Header/Header'
import Navbar from './Header/Navbar'
import Buy from './BuyFood/Buy'
import { useEffect, useState } from 'react'

function App() {
  let [buy,setBuy] = useState([])

  useEffect(()=>{
    fetch('Food.json')
    .then(res => res.json())
    .then(data => setBuy(data))
  },[])

  return (
    <div className="w-[98%] md:w-[85%] mx-auto">
      <Navbar></Navbar>  
      <Header></Header>
      <FoodTitle></FoodTitle>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       {buy.map((buy,index)=> <Buy key={index} buy={buy}></Buy>)}
        </div>      
    </div>
  )
}

export default App
