import { createContext } from 'react'
import { useState } from 'react'
import { imageList } from '../cards/images'
export const Theme = createContext()

export const Addcart = (props) => {

    const [totalCost, setTotalCost] = useState(0)
    const [items, setItems] = useState([])
    const [itemCount, setItemCount] = useState(1);
    const [isAdded, setIsAdded] = useState(false)


    const addToCart = (id, name, image, price) => {
        setTotalCost((prev) => prev+price);
        
        setItems((prevItems) => [
            ...prevItems,
            { id: id, name: name, image: image, price: price, count: itemCount, isAdded: !isAdded },
          ]);
        
        
    }
    const addItems = (id, price) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, count: item.count + 1 } : item
            )
        );
        setTotalCost((prev) => prev+price)
    };
    const removeItem = (id, price, count) => {
        setItems(items.filter((item) => item.id !== id && item ))
        setTotalCost((prev) => prev-count*price)
    }
    const removeItemCount = (id, price, count) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.count > 0 ? { ...item, count: item.count - 1 } : item
            )
        );
        setTotalCost((prev) => count !== 0 ? prev-price : 0)
    };
    
    return <Theme.Provider value={{addToCart, totalCost, items, itemCount, addItems, removeItemCount, removeItem}}>{props.children}</Theme.Provider>
}