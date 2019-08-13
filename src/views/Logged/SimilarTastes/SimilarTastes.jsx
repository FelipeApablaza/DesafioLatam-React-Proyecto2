import React from 'react'
import Header from '../../Common/Header'
import { Redirect } from "react-router-dom";
import Similar from '../../../Components/Similar/Similar';

const SimilarTastes = () => {
    const logged = localStorage.getItem('logged')

    if (logged) {
        return (
            <div>
                <Header />
                <Similar />
            </div>
        )
    } else {
        return (
            <Redirect to='/authentication' />
        )
    }
}

export default SimilarTastes
