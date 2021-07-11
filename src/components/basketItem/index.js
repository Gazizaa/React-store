import React  from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeAmount, clearCart, deleteBasket } from '../../store/actions/basketAction';
import './index.css'

function BasketItem(props) {
    const dispatch = useDispatch();
    const totalPrice = useSelector(({basketReducer}) => basketReducer.totalPrice);
   /*  const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
        let price = 0;
        props.basketData.map(item => {
            price += item.amount * item.price
        });
        setTotalCount(price)
    }, [props.basketData, totalCount]) */
    
    const deleteItems = (productId, amount, price) => {
        dispatch(deleteBasket(productId, amount, price))
    } 

    const onClickClearCart = () => {
        if(window.confirm("Do you really want to clear cart?")){
           dispatch(clearCart()) 
        }
    }

    let basketRows = props.basketData.map(item => (
    <tr>
        <td><button id='delete-btn' onClick={() => deleteItems(item.productId, item.amount, item.price)}>x</button></td>
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
