import "../itemListContainer/itemListContainer.css"

export const ItemListContainer = ( {text, funcionSumar } ) => {
    return (
        <div className="catalog">
            <div className="card">
                <h2>{text}</h2>
                <div className="btn">
                <button onClick = {funcionSumar}>añadir</button>    
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;