import React from 'react'
import { Redirect } from "react-router-dom";
import Cards from '../../../Components/Characters/Cards'
import Header from '../../Common/Header';
import '../heartShape.css'

const Characters = () => {

    const logged = localStorage.getItem('logged')

    if (logged) {
        return (
            <div>
                <Header />
                <Cards />
            </div>
        )
    } else {
        return (
            <Redirect to='/authentication' />
        )
    }

}

export default Characters