import {GET_BASKET} from '../actions/types'

const initialState = {
    basket: []
}
// eslint-disable-next-line 
const basketReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_BASKET:
            return{
                ...state,
                basket: action.payload
            }
        default:
            return state    

    }
}

export default basketReducer
