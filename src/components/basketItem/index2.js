/*import React  from 'react'
import './index.css'
import {withRouter} from 'react-router-dom'

function BasketItem(props) {
    let basketRows = props.basketData.map(item => (
    <tr>
        <td><button id='delete-btn'>x</button></td>
        <td><img src={item.image} alt='item-image'/></td>
        <td>{item.name}</td>
        <td>${item.price}</td>
        <td><input type='number' className='quantity-input' value={item.amount}></input></td>
        <td>${item.price * item.amount}</td>
    </tr>
    ))
    return(
        <div className="basket-item">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead> 
                <tbody>
                   {basketRows}
                    <tr>
                        <td colSpan='6'>
                            <input placeholder='Coupon code' className='coupon-input'></input>
                            <button>APPLY COUPON</button>
                            <button id='disabled-btn'>UPDATE CART</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className='total-cart'>
                <h1>Cart totals</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Subtotal</th>
                            <td>$570.00</td>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <td>$570.00</td>
                        </tr>
                    </thead>
                </table>
                <button>Proceed to checkout</button>
            </div>
        </div>
    )
}

export default withRouter(BasketItem)*/