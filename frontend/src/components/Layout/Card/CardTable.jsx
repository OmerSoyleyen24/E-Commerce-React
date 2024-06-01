import { useContext } from "react"
import { CardContext } from "../../../context/CardProvider"
import CardItem from "./CardItem";

const CardTable = () => {
    const {cardItems} = useContext(CardContext)
    return (
        <table className="shop-table">
            <thead>
                <tr>
                    <th className="product-thumbnail">&nbsp;</th>
                    <th className="product-name">Product</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-subtotal">Subtotal</th>
                </tr>
            </thead>
            <tbody className="card-wrapper">
                {cardItems.map((item)=>{
                    return <CardItem cardItem={item} key={item.id}/>
                })}
            </tbody>
        </table>
    )
}

export default CardTable