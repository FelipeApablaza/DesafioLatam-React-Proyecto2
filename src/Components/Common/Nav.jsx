import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/episodes'>Episodes</Link>
            <Link to='/characters'>Characters</Link>
            <Link to='/tastes'>Tastes</Link>
        </div>
    )
}

export default Nav