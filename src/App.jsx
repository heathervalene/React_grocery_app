import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import GroceryList from './components/GroceryList'
import AddItem from './components/AddItem'
import TotalCost from './components/TotalCost'





function App() {

  const [groceryList, setGroceryList] = useState([])

  

  return (
      <div>
        <Header />
        <GroceryList />
        <AddItem />
        <TotalCost />

        <Footer />
   
      </div>
    
  
  )
}

export default App
