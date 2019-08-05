import React from 'react'

const Card = ({ episode: { id, name, air_date, episode } }) => {
    return (
        <div>
            {id}
            {name}
            {air_date}
            {episode}
        </div>
    )
}

export default Card