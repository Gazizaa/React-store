import {GET_PRODUCTS, GET_ERRORS, GET_PRODUCT_DETAILS} from './types'
import axios from 'axios'

export const getProducts = () => dispatch => {
    axios.get('http://localhost:3000/products').then(
        response => {
            return dispatch ({
                type: GET_PRODUCTS,
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

export const getProductDetails = (id) => dispatch => {
    axios.get('http://localhost:3000/products/'+id).then(
        response => {
            return dispatch ({
                type: GET_PRODUCT_DETAILS,
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