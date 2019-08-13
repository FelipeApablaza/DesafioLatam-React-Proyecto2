import {
    GET_EPISODES_INIT,
    GET_EPISODES_SUCCESS,
    GET_EPISODES_ERROR,
    CLEAN_EPISODES,
    GET_USER,
    // ADD_FAV
} from './const'
import { getEpisodes, getUser } from './server'

export const getEpisodesAction = url => {
    return dispatch => {
        dispatch({ type: GET_EPISODES_INIT })
        getEpisodes(url)
            .then(response => dispatch({ type: GET_EPISODES_SUCCESS, payload: response.data }))
            .catch(() => { dispatch({ type: GET_EPISODES_ERROR }) })
    }
}

export const cleanEpisodesAction = () => 
    dispatch => dispatch({ type: CLEAN_EPISODES })

    export const getUserAction = url => {
        const id = localStorage.getItem('id')
        return dispatch => {
            getUser(url+id)
                .then(response => dispatch( { type: GET_USER, payload: response}))
        }
    }