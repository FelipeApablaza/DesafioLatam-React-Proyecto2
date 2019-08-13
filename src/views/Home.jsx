import React from 'react'
import { Redirect } from "react-router-dom";
import Header from './Common/Header';


const Home = () => {

    const logged = localStorage.getItem('logged')

    if (logged) {
        return (
            <div>
                <Header />
                home
            </div>
        )
    } else {
        return (
            <Redirect to='/authentication' />
        )
    }

}

export default Home