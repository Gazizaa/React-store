import React from 'react';
import { useDispatch } from 'react-redux';
import { increase, decrease } from '../../store/actions/basketAction';
import './index.scss';

const BasketRow = (props) => {

    const dispatch = useDispatch();

    const increaseCount = () => {
        dispatch(increase(props.item.productId, 1, props.item.price))
    }

    const decreaseCount = () => {
        props.item.amount > 1 ? 
        dispatch(decrease(props.item.productId, 1, props.item.price)) : 
        props.deleteItems(props.item.productId, props.item.amount, props.item.price)
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
                        <span>{props.item.amount}</span>
                    <button onClick={increaseCount}>+</button>
                </td>
                <td>${props.item.price * props.item.amount}</td>
         </tr>  
        </>
    )
}

export default BasketRow

