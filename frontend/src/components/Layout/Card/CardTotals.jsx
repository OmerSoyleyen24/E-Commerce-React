import { useContext, useState} from "react"
import { CardContext } from "../../../context/CardProvider"

const CardTotals = () => {
    const [fastCargoChecked, setFastCargoChecked] = useState(false)
    const { cardItems } = useContext(CardContext)

    const cardItemTotals = cardItems.map((item) => {
        const itemTotal = item.price.newPrice * item.quantity;
        return itemTotal
    })

    const subTotals = cardItemTotals.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    }, 0)

    const cargoFee = 15;

    const cardTotalsResult = fastCargoChecked ? (subTotals + cargoFee).toFixed(2) : subTotals.toFixed(2)

    return (
        <div className="card-totals">
            <h2>Card Totals</h2>
            <table>
                <tbody>
                    <tr className="card-subtotal">
                        <th>Subtotal</th>
                        <td>
                            <span id="subtotal">${subTotals.toFixed(2)}</span>
                        </td>
                    </tr>
                    <tr className="card-shipping">
                        <th>Shipping</th>
                        <td>
                            <ul>
                                <li>
                                    <label>
                                        Fast Cargo : $15.00
                                        <input type="checkbox" id="fast-cargo" checked={fastCargoChecked} onChange={() => { setFastCargoChecked(!fastCargoChecked) }} />
                                    </label>
                                </li>
                                <li>
                                    <a href="#">Change Address</a>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td>
                            <strong id="card-total">${cardTotalsResult}</strong>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="checkout">
                <button className="btn btn-danger btn-lg ">Proceed to checkout</button>
            </div>
        </div>
    )
}

export default CardTotals