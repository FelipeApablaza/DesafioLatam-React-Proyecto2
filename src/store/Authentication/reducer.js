import { initialState } from './initialState'
import {
    GET_USERS_INIT,
    GET_USERS_SUCCESS,
    GET_USERS_ERROR,
    CLEAN_USERS,
    SET_LOGIN,
    SET_SIGNUP,
    SET_SIGNUP_ERROR
} from './const'

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USERS_INIT: {
            return {
                ...state,
                usersLoading: true
            }
        }
        case GET_USERS_SUCCESS: {
            return {
                ...state,
                users: action.payload,
                usersLoading: false,
                usersError: false
            }
        }
        case GET_USERS_ERROR: {
            return {
                ...state,
                users: state.users,
                usersLoading: false,
                usersError: true
            }
        }
        case CLEAN_USERS: {
            return {
                ...initialState
            }
        }
        case SET_LOGIN: {
            const user = state.users.filter((item) => item.email === action.payload.email && item.name === action.payload.name)
            if (user && user.length>0) {
                localStorage.setItem('logged', true)
                localStorage.setItem('id', user[0].id)
                return {
                    ...state,
                    errorMsg: ''
                }
            } else {
                return {
                    ...state,
                    errorMsg: 'Name or Email not valid!'
                }
            }
        }
        case SET_SIGNUP: {
            // const user = state.users.filter((item) => item.email === action.payload.email && item.name === action.payload.name)
            // if (user && user.length>0) {
            //     localStorage.setItem('logged', true)
            //     localStorage.setItem('id', user[0].id)
            //     return {
            //         ...state,
            //         errorMsg: ''
            //     }
            localStorage.setItem('logged', true)
            localStorage.setItem('id', action.payload.data.id)
            return {
                ...state,
                errorMsg: ''
            }
        }
        case SET_SIGNUP_ERROR: {
            return {
                ...state,
                errorMsg: 'Server Error!'
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}