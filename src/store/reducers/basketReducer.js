import {ADD_TO_BASKET, DELETE_BASKET, INCREASE_COUNT, DECREASE_COUNT, CLEAR_CART} from '../actions/types'

const initialState = {
    basket:[],
    totalPrice: 0
}

const basketReducer = (state=initialState, action) => {

    switch(action.type){
        case ADD_TO_BASKET:

        let inCart = state.basket.find((item)=> 
        item.productId === action.payload.productId ? true : false);

            return{
                ...state,
                basket: inCart 
                ?  state.basket.map(item => item.productId === action.payload.productId 
                    ? {...item, amount: +item.amount + +action.payload.amount} 
                    :  item
                    )
                :  [...state.basket, action.payload],
                totalPrice: state.totalPrice + (+action.payload.amount * action.payload.price)
            }
        case INCREASE_COUNT: 
            return {
                ...state,
                basket: state.basket.map(item => item.productId === action.payload.productId 
                    ? {...item, amount: +item.amount + +action.payload.amount}
                    : item),
                totalPrice: state.totalPrice + (+action.payload.amount * action.payload.price)    
            }   
        case DECREASE_COUNT: 
            return {
                ...state,
                basket: state.basket.map(item => item.productId === action.payload.productId 
                    ? {...item, amount: item.amount === 0 ? item.amount : +item.amount - action.payload.amount}
                    : item),
                 totalPrice: state.totalPrice - (+action.payload.amount * action.payload.price) 
                   
            }      
        case DELETE_BASKET:
            return {
                ...state,
                basket: state.basket.filter(item => item.productId !== action.payload.id),
                totalPrice: state.totalPrice - (+action.payload.amount * action.payload.price)
            } 
        case CLEAR_CART: 
            return { 
                ...state,
                basket: [], 
                totalPrice: 0 
            }       
        default:
            return state    
    }
}

export default basketReducer