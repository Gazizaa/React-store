import {GET_BASKET, GET_ERRORS} from './types'
import axios from 'axios'

export const addToBasket = (data) => dispatch => {
    axios.post('http://localhost:3000/basket', data).then(
        response => {
            console.log(response);
            getBasket()
        }
    ).catch(err => {
        return dispatch({
            type: GET_ERRORS,
            payload: err.response
        })
    })
}

export const getBasket = () => dispatch => {
    axios.get('http://localhost:3000/basket').then(
        response => {
            return dispatch ({
                type: GET_BASKET,
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

export const deleteBasket = (id) => dispatch => {
    axios.delete('http://localhost:3000/basket/' + id).then(
       
    ).catch(err => {
        return dispatch({
            type: GET_ERRORS,
            payload: err.response
        })
    })
}