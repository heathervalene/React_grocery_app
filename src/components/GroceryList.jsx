

const GroceryList = ({items}) => {
    return (
        <div>
            <h2>Grocery List</h2>
            <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
        </div>
    )
}

export default GroceryList