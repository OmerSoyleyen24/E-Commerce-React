import { useContext } from "react"
import { CardContext } from "../../../context/CardProvider"

const CardItem = ({ cardItem }) => {
    console.log(cardItem)
    const { removeFromCard}  = useContext(CardContext)
    return (
        <tr className="card-item">
            <td>
                <div className="card-image">
                    <img src={cardItem.img.singleImage} />
                    <i className="bi bi-x delete-card"
                    onClick={()=>removeFromCard(cardItem.id)}
                    ></i>
                </div>
            </td>
            <td>{cardItem.name}</td>
            <td>${cardItem.price.newPrice.toFixed(2)}</td>
            <td className="product-quantity">${cardItem.quantity}</td>
            <td className="product-subtotal">${(cardItem.price.newPrice * cardItem.quantity)}</td>
        </tr>
    )
}

export default CardItem