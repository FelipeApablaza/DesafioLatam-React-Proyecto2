import React from 'react'

const Card = ({ character: { id, name, status, species, gender, image } }) => {
    return (
        <div>
            {id}
            {name}
            {status}
            {species}
            {gender}
            {image}
        </div>
    )
}

export default Card