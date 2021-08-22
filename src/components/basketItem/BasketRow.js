import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { increase, decrease } from '../../store/actions/basketAction';
import './index.scss';

const BasketRow = (props) => {

    const [inputCount, setInputCount] = useState(+props.item.amount);
    const dispatch = useDispatch();

    const increaseCount = () => {
        setInputCount(inputCount + 1);
        dispatch(increase(props.item.productId, 1, props.item.price))
    }

    const decreaseCount = () => {
         setInputCount(inputCount > 0 ? inputCount - 1 : null);
        dispatch(decrease(props.item.productId, 1, props.item.price))
    }
    return (
        <>
          <tr>
                <td><button id='delete-btn' 
                    onClick={() => props.deleteItems(props.item.productId, props.item.amount, props.item.price)}>x</button>
                </td>
                <td><img src={props.item.image} alt='item'/></td>
                <td>{props.item.name}</td>
                <td>${props.item.price}</td>
                <td className='td-input'>
                    <button onClick={decreaseCount}>-</button>
                    <input  
                        disabled='disabled'
                        type='number' 
                        className='quantity-input' 
                        value={inputCount} >
                    </input>
                    <button onClick={increaseCount}>+</button>
                </td>
                <td>${props.item.price * props.item.amount}</td>
         </tr>  
        </>
    )
}

export default BasketRow

