import {GET_CATEGORIES, GET_ERRORS} from './types'
import axios from 'axios'

export const getCategories = () => dispatch => {
    axios.get('http://localhost:3000/categories').then(
        response => {
            return dispatch ({
                type: GET_CATEGORIES,
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