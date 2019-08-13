import React from 'react'
import { Redirect } from "react-router-dom";
import Cards from '../../../Components/Episodes/Cards';
import Header from '../../Common/Header';

const Episodes = () => {

    const logged = localStorage.getItem('logged')

    if(logged) {
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

export default Episodes