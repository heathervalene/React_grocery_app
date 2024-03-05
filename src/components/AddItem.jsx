import {useState} from "react"

const AddItem = ( {onAddItem}) => {

const [newItem, setNewItem] = useState('')

const handleAddItem = () => {
    onAddItem(newItem)
    setNewItem('')
}



    return (
        <div>
            <h2>Add Item</h2>
            <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)} />
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    )
}

export default AddItem

