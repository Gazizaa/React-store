import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import {ADD_TO_BASKET, DELETE_BASKET, CHANGE_AMOUNT} from '../actions/types'

const initialState = {
    basket:[],
    totalPrice: 0,
    currentItem: null
}
// eslint-disable-next-line 
const basketReducer = (state=initialState, action) => {

    let inCart = state.basket.find((item)=> 
    item.productId === action.payload.productId ? true : false);

    switch(action.type){
        case ADD_TO_BASKET:
            return{
                ...state,
                basket: inCart 
                ?  state.basket.map(item => item.productId === action.payload.productId 
                    ? {...item, amount: +item.amount + +action.payload.amount} 
                    :  item
                    )
                :  [...state.basket, action.payload]
            }
        case CHANGE_AMOUNT: 
        return {
            ...state,
            basket: state.basket.map(item => item.productId === action.payload.productId 
                ? {...item, amount: action.payload.amount}
                : item)
        }    
        case DELETE_BASKET:
            return {
                ...state,
                basket: state.basket.filter(item => item.productId !== action.payload.id)
            }    
        default:
            return state    

    }
}

export default basketReducer
