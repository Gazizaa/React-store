import {GET_PRODUCTS, GET_PRODUCT_DETAILS, GET_ERRORS} from '../actions/types'

const initialState = {
    products: [],
    error: {},
    productDetails: {},
    isLoaded: false
}

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_PRODUCTS:
            return{
                ...state,
                products: action.payload,
                isLoaded: true
            }
        case GET_PRODUCT_DETAILS:
            return{
                ...state,
                productDetails: action.payload
            }
        case GET_ERRORS:
            return{
                ...state,
                error: action.payload
            }    
        default:
            return state    

    }
}

export default productReducer