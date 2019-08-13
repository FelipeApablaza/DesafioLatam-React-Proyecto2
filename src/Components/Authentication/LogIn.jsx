import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"
import { getUsersAction } from '../../store/Authentication/actions'

const url = 'http://localhost:3000/users'

const defautlState = {
    name: '',
    email: ''
}

const LogIn = props => {

    const logged = localStorage.getItem('logged')

    const { getUsers, usersLoading, usersError, errorMsg, okMsg } = props

    const [state, setState] = useState(defautlState)

    const handlerOnChange = ({ target: { name, value } }) => {
        setState({ ...state, [name]: value })
    }

    const handlerOnClick = () => {
        getUsers({ url, ...state })
    }

    if (!logged) {
        return (
            <div>
                {usersLoading ? 'Loading' :
                    usersError ? 'Error' :
                        <div>
                            <input name='name' value={state.name} onChange={handlerOnChange} placeholder='name'></input>
                            <input name='email' value={state.email} onChange={handlerOnChange} placeholder='email'></input>
                            <button onClick={handlerOnClick}>LogIn</button>
                            {errorMsg}
                            {okMsg}
                        </div>
                }
            </div>
        )
    } else {
        return <Redirect to='/' />
    }

}

const mapStateToProps = ({ authentication }) => ({
    users: authentication.users,
    usersLoading: authentication.usersLoading,
    usersError: authentication.usersError,
    errorMsg: authentication.errorMsg,
    okMsg: authentication.okMsg
})

const mapDispatchToProps = dispatch => ({
    getUsers: payload => dispatch(getUsersAction(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
