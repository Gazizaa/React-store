import {combineReducers} from 'redux'
import productReducer from './productReducers'
import categoriesReducer from './categoriesReducer'
import basketReducer from './basketReducer'


const rootReducer = combineReducers({
    productReducer,
    categoriesReducer,
    basketReducer
})

export default rootReducer