import {ADD_TO_BASKET, DELETE_BASKET, INCREASE_COUNT, DECREASE_COUNT, CLEAR_CART} from './types'


export const addToBasket = (data) => {
    return {
        type: ADD_TO_BASKET,
        payload: data
    }
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