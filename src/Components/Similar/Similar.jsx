import React, { useEffect, useState } from 'react'
import axios from 'axios';

const url = 'http://localhost:3000/users/'

const Similar = () => {

    const [state, setState] = useState('o')

    const [user, setUser] = useState('')

    useEffect(() => {
        async function getUsers() {
            await axios.get(url)
                .then(response => setState({ ...response.data }))
        }
        getUsers()
    }, [])

    const userId = localStorage.getItem('id')
    useEffect(() => {
        async function getUsers() {
            await axios.get(url + userId)
                .then(response => setUser({ ...response.data }))
        }
        getUsers()
    }, [userId])

    console.log(state[1])
    return (
        <table style={{ textAlign: 'center' }}>
            <thead>
                <tr>
                    <th></th>
                    <th>{user.name}</th>
                    <th></th>
                </tr>
                <tr>
                    <th>Users</th>
                    <th>Favorite Characters</th>
                    <th>Favorite Episodes</th>
                </tr>
            </thead>
            <tbody>
               { state !== 'o' ? 
             'si'
            : 'no'}
            </tbody>
        </table>
    )
}

export default Similar