import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'

const Nav = () => {

    const [state, setState] = useState(true)

    const handlerOnClick = () => {
        localStorage.clear()
        setState(false)
    }

    if (state) {
        return (
            <div>
                <Link to='/'>Home</Link>
                <Link to='/episodes'>Episodes</Link>
                <Link to='/characters'>Characters</Link>
                <Link to='/tastes'>Tastes</Link>
                <button onClick={handlerOnClick} >Log Out</button>
            </div>
        )
    } else {
        return <Redirect to='/authentication' />
    }
}

export default Nav