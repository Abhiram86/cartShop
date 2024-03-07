import { imageList } from "./images"
import { Theme } from "../logic/addcart"
import { useContext } from "react"

export const Cards = () => {
    const {addToCart, items} = useContext(Theme)
    return(
    <>
        {imageList.map((product) => (
            <div className="card">
            <div className="productImg">
                <img src={product.productImg} alt="product-image" />
            </div>
            <div className="name">
                <p className="text">{product.productName}</p>
            </div>
            <div className="cardButtons">
                <div className="amount">
                    <p className="cost">Rs. {product.productPrice}</p>
                </div>
                <div className="cartButton">
                   { 
                    <button onClick={() => addToCart(product.id, product.productName, product.productImg, product.productPrice)}>Add to cart</button>
                   }
                </div>
            </div>
        </div>
        ))}       
    </>
    )
}