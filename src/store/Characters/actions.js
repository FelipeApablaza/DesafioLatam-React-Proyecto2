import {
    GET_CHARACTERS_INIT,
    GET_CHARACTERS_SUCCESS,
    GET_CHARACTERS_ERROR,
    CLEAN_CHARACTERS,
    GET_USER,
    // ADD_FAV
} from './const'
import { getCharacters, getUser } from './server'

export const getCharactersAction = url => {
    return dispatch => {
        dispatch({ type: GET_CHARACTERS_INIT })
        getCharacters(url)
            .then(response => dispatch({ type: GET_CHARACTERS_SUCCESS, payload: response.data }))
            .catch(() => { dispatch({ type: GET_CHARACTERS_ERROR }) })
    }
}

export const cleanCharactersAction = () => 
    dispatch => dispatch({ type: CLEAN_CHARACTERS })

export const getUserAction = url => {
    const id = localStorage.getItem('id')
    return dispatch => {
        getUser(url+id)
            .then(response => dispatch( { type: GET_USER, payload: response}))
    }
}

