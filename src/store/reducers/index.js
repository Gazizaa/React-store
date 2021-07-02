import {combineReducers} from 'redux'
import productReducer from './productReducers'
import categoriesReducer from './categoriesReducer'
import basketReducer from './basketReducer'


const rootReducer = combineReducers({
    productReducer: productReducer,
    categoriesReducer: categoriesReducer,
    basketReducer: basketReducer
})

export default rootReducer