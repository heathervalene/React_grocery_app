

const GroceryList = ({items}) => {
    return (
        <div>
            <h2>Grocery List</h2>
            <ul>
            {items.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
            </ul>
        </div>
    )
}

export default GroceryList