import { initialState } from './initialState'
import {
    GET_EPISODES_INIT,
    GET_EPISODES_SUCCESS,
    GET_EPISODES_ERROR,
    CLEAN_EPISODES,
    GET_USER
} from './const'

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_EPISODES_INIT: {
            return {
                ...state,
                episodesLoading: true
            }
        }
        case GET_EPISODES_SUCCESS: {
            return {
                ...state,
                episodesPages: state.episodesPages.concat(action.payload),
                episodesLoading: false,
                episodesError: false
            }
        }
        case GET_EPISODES_ERROR: {
            return {
                ...state,
                episodesPages: state.episodesPages,
                episodesLoading: false,
                episodesError: true
            }
        }
        case CLEAN_EPISODES: {
            return {
                ...initialState
            }
        }
        case GET_USER: {
            return {
                ...state,
                favoriteEpisodes: action.payload.data.favoriteEpisodes
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}