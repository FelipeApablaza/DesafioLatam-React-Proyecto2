import React from 'react'
import { Redirect } from "react-router-dom"
import LogIn from './LogIn'
import SingUp from './SignUp'


const AuthComponent = props => {

    const logged = localStorage.getItem('logged')

    if (logged) {
        return <Redirect to='/' />
    } else {
        return (
            <div>
                <LogIn />
                <SingUp />
            </div>
        )
    }
}


export default AuthComponent