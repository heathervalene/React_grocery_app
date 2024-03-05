import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import GroceryList from './components/GroceryList'
import AddItem from './components/AddItem'






function App() {

  const [groceryItems, setGroceryItems] = useState([])

  const AddGroceryItem = (item) => {
    setGroceryItems([...groceryItems, item])
  }


  
  return (
      <div>
        <Header />
        <GroceryList items={groceryItems} />
        <AddItem onAddItem={AddGroceryItem} />
        <Footer />
   
      </div>
    
  
  )
}

export default App
