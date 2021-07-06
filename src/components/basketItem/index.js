import React, { useState, useEffect }  from 'react'
import { useDispatch } from 'react-redux';
import { changeAmount, deleteBasket } from '../../store/actions/basketAction';
import './index.css'

function BasketItem(props) {
    const dispatch = useDispatch();
    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
        let price = 0;
        props.basketData.map(item => {
            price += item.amount * item.price
        });
        setTotalCount(price)
    }, [props.basketData, totalCount])
    
    const deleteItems = (productId) => {
        dispatch(deleteBasket(productId))
    } 

    let basketRows = props.basketData.map(item => (
    <tr>
        <td><button id='delete-btn' onClick={() => deleteItems(item.productId)}>x</button></td>
        <td><img src={item.image} alt='item-image'/></td>
        <td>{item.name}</td>
        <td>${item.price}</td>
        <td><input min='1' type='number' className='quantity-input' value={item.amount} ></input></td>
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
                            <td>${totalCount}</td>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <td>${totalCount}</td>
                        </tr>
                    </thead>
                </table>
                <button>Proceed to checkout</button>
            </div>
        </div>
    )
}


export default BasketItem
