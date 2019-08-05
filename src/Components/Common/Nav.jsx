import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/episodes'>To Episodes</Link>
            <Link to='/characters'>To Characters</Link>
        </div>
    )
}

export default Nav