import {
    GET_CHARACTERS_INIT,
    GET_CHARACTERS_SUCCESS,
    GET_CHARACTERS_ERROR,
    CLEAN_CHARACTERS
} from './const'
import { getCharacters } from './server'

export const getCharactersAction = url => {
    return dispatch => {
        dispatch({ type: GET_CHARACTERS_INIT })
        console.log(url)
        getCharacters(url)
            .then(response => dispatch({ type: GET_CHARACTERS_SUCCESS, payload: response.data }))
            .catch(() => { dispatch({ type: GET_CHARACTERS_ERROR }) })
    }
}

export const cleanCharactersAction = () => 
    dispatch => dispatch({ type: CLEAN_CHARACTERS })

