// import { Cards } from "./cards/cards"
import { useContext } from "react"
import { Theme } from "./logic/addcart"

export const Cart = () => {
    const {totalCost, items, addItems, removeItemCount, removeItem} = useContext(Theme)
    return (
    <div className="cartbox">
        <h1 style={{textAlign: "center"}}>Cart</h1>
        {
            items.map((item) => (
            <div className="cart">
                <div className="card">
                    <div className="delete">
                        <button onClick={ () => removeItem(item.id, item.price, item.count) }><b>x</b></button>
                    </div>
                    <div className="productImg">
                        <img src={item.image} alt="product-image" />
                    </div>
                    <div className="name">
                        <p className="text">{item.name}</p>
                    </div>
                    <div className="cardButtons">
                        <div className="amount">
                            <p className="cost">Rs.{item.price} </p>
                        </div>
                        <div className="itemButton">
                            <button onClick={() => addItems(item.id, item.price)}>+</button>
                            <button onClick={() => removeItemCount(item.id, item.price, item.count)}>-</button>
                        </div>
                    </div>
                    <div className="count"><b>no of products x</b> {item.count} </div>
                </div>
                
            </div>
        ))
                
        }
        <div className="totalCost">
            <p className="text">
                {items.length} items
                <br />
                total cost is {totalCost}
            </p>
        </div>
    </div> 
    )
}