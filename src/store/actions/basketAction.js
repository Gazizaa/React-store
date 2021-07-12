import {ADD_TO_BASKET, GET_ERRORS, DELETE_BASKET, INCREASE_COUNT, DECREASE_COUNT, CLEAR_CART} from './types'
import axios from 'axios'

export const addToBasket = (data) => dispatch => {
    axios.post('http://localhost:3000/basket', data).then(
        response => {
            return dispatch ({
                type: ADD_TO_BASKET,
                payload: response.data
            })
        }
    ).catch(err => {
        return dispatch({
            type: GET_ERRORS,
            payload: err.response
        })
    })
}

export const increase = (productId, amount, price) => {
    return {
        type: INCREASE_COUNT,
        payload: {
            productId,
            amount,
            price
        }
    }
}

export const decrease = (productId, amount, price) => {
    return {
        type: DECREASE_COUNT,
        payload: {
            productId,
            amount,
            price
        }
    }
}

export const deleteBasket = (productId, amount, price) => {
    return {
        type: DELETE_BASKET,
        payload: {
            id: productId, 
            amount,
            price
        }
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
} 