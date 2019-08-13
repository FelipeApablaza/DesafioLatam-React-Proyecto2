import {
    GET_USERS_INIT,
    GET_USERS_SUCCESS,
    GET_USERS_ERROR,
    CLEAN_USERS,
    SET_LOGIN,
    SET_SIGNUP,
    SET_SIGNUP_ERROR
} from './const'
import { getUsers, putUser } from './server'

export const getUsersAction = ({ url, name, email }) => {
    return dispatch => {
        dispatch({ type: GET_USERS_INIT })
        getUsers(url)
            .then(response => dispatch({ type: GET_USERS_SUCCESS, payload: response.data }))
            .catch(() => dispatch({ type: GET_USERS_ERROR }))
            .then(() => dispatch({ type: SET_LOGIN, payload: { name, email } }))
    }
}

export const cleanUsersAction = () =>
    dispatch => dispatch({ type: CLEAN_USERS })

export const setLogInAction = user =>
    dispatch => dispatch({ type: SET_LOGIN, payload: user })

export const setSignUpAction = ({ url, name, email }) => {
    return dispatch => {
        dispatch({ type: GET_USERS_INIT })
        getUsers(url)
            .then(response => dispatch({ type: GET_USERS_SUCCESS, payload: response.data }))
            .catch(() => dispatch({ type: GET_USERS_ERROR }))
            .then(() => putUser({ url, name, email }))
            .then(response => dispatch({ type: SET_SIGNUP, payload: response }))
            .catch(() => dispatch({ type: SET_SIGNUP_ERROR }))
    }
}