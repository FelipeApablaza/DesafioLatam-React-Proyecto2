import {
    GET_EPISODES_INIT,
    GET_EPISODES_SUCCESS,
    GET_EPISODES_ERROR
} from './const'
import { getEpisodes } from './server'

export const getEpisodesAction = url => {
    return dispatch => {
        dispatch({ type: GET_EPISODES_INIT })
        getEpisodes(url)
            .then(response => dispatch({ type: GET_EPISODES_SUCCESS, payload: response.data }))
            .catch(() => { dispatch({ type: GET_EPISODES_ERROR }) })
    }
}