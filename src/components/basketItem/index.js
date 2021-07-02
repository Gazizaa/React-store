import React  from 'react'
import './index.css'
import { withRouter } from 'react-router-dom'
import { deleteBasket, getBasket } from '../../store/actions/basketAction'
import { connect } from 'react-redux'

function BasketItem(props) {
    const {basket} = props.basketReducer

    let deleteItems = (id) => {
        basket?.map(item => {
            if(item.productID === id){
               props.deleteBasket(item.id) 
               props.getBasket()
            }
             
        })
       
    }

    let basketRows = props.basketData.map(item => (
    <tr>
        <td><button id='delete-btn' onClick={() => deleteItems(item.id)}>x</button></td>
        <td><img src={item.image} alt='item-image'/></td>
        <td>{item.name}</td>
        <td>${item.price}</td>
        <td><input type='number' className='quantity-input' value={item.amount}></input></td>
        <td>${item.price * item.amount}</td>
    </tr>
    ))
 
    let sumList = []
    props.basketData.map(item => {
        sumList.push(item.price * item.amount)
    })
    let totalSum = sumList.reduce((sum, current) => sum + current, 0)

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
                            <td>${totalSum}</td>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <td>${totalSum + 50}</td>
                        </tr>
                    </thead>
                </table>
                <button>Proceed to checkout</button>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=> ({
    basketReducer: state.basketReducer,

})

export default connect(mapStateToProps, {deleteBasket, getBasket}) (withRouter (BasketItem))
