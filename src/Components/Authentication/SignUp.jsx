import React, { useState } from 'react'
import { Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { setSignUpAction } from '../../store/Authentication/actions'

const url = 'http://localhost:3000/users'

const defaultState = {
    name: '',
    email: ''
}
const SingUp = props => {

    const logged = localStorage.getItem('logged')

    const { setSignUp, errorMsg, okMsg } = props

    const [state, setState] = useState(defaultState)

    const handlerOnChange = ({ target: { name, value } }) => {
        setState({ ...state, [name]: value })
    }

    const handlerOnClick = () => {
        setSignUp({ url, ...state })
    }

    if (!logged) {
        return (
            <div>
                <input name='name' value={state.name} onChange={handlerOnChange} placeholder='name'></input>
                <input name='email' value={state.email} onChange={handlerOnChange} placeholder='email'></input>
                <button onClick={handlerOnClick} >SignUp</button>
                {errorMsg}
                {okMsg}
            </div>
        )
    } else {
        return <Redirect to='/' />
    }
}
const mapStateToProps = ({ authentication }) => ({
    errorMsg: authentication.errorMsg,
    okMsg: authentication.okMsg
})

const mapDispatchToProps = dispatch => ({
    setSignUp: payload => dispatch(setSignUpAction(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingUp)
