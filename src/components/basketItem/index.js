import React  from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { clearCart, deleteBasket } from '../../store/actions/basketAction';
import BasketRow from './BasketRow';
import './index.css';

function BasketItem(props) {

    const dispatch = useDispatch();
    const totalPrice = useSelector(({basketReducer}) => basketReducer.totalPrice);
    
    const deleteItems = (productId, amount, price) => {
        dispatch(deleteBasket(productId, amount, price))
    } 

    const onClickClearCart = () => {
        if(window.confirm("Do you really want to clear cart?")){
           dispatch(clearCart()) 
        }
    }

    let basketRows = props.basketData.map(item => <BasketRow key={item.id} item={item} deleteItems={deleteItems}/> )
 
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
                            <button id='cart-btn' onClick={onClickClearCart}>CLEAR CART</button>
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
                            <td>${totalPrice}</td>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <td>${totalPrice}</td>
                        </tr>
                    </thead>
                </table>
                <button>Proceed to checkout</button>
            </div>
        </div>
    )
}


export default BasketItem
