import { initialState } from './initialState'
import {
    GET_CHARACTERS_INIT,
    GET_CHARACTERS_SUCCESS,
    GET_CHARACTERS_ERROR,
    CLEAN_CHARACTERS
} from './const'

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CHARACTERS_INIT: {
            return {
                ...state,
                charactersLoading: true
            }
        }
        case GET_CHARACTERS_SUCCESS: {
            return {
                ...state,
                charactersPages: state.charactersPages.concat(action.payload),
                charactersLoading: false,
                charactersError: false
            }
        }
        case GET_CHARACTERS_ERROR: {
            return {
                ...state,
                charactersPages: state.charactersPages,
                charactersLoading: false,
                charactersError: true
            }
        }
        case CLEAN_CHARACTERS: {
            return {
                ...initialState
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}