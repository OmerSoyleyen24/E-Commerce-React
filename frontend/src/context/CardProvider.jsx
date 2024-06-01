import { createContext, useEffect, useState } from "react";
export const CardContext = createContext();

const CardProvider = ({ children }) => {
    const [cardItems, setCardItems] = useState([])

    useEffect(()=>{
        localStorage.setItem("cardItems",JSON.stringify(cardItems))
    },[cardItems])

    const addToCard = (cardItem) =>{
        setCardItems((prevItems)=>[...prevItems,{
            ...cardItem,
            quantity: cardItem.quantity ? cardItem.quantity : 1
        }])
    }

    const removeFromCard = (itemId) =>{
        const filteredCardItems = cardItems.filter((cardItem)=>{
            return cardItem.id !== itemId;
        })
        setCardItems(filteredCardItems);
    }
    return (
        <CardContext.Provider value={{cardItems,addToCard,removeFromCard}}>
            {children}
        </CardContext.Provider>
    )
}

export default CardProvider