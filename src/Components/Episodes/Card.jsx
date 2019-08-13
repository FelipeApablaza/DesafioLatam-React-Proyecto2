import React from 'react'
import BootCard from 'react-bootstrap/Card' 
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const Card = ({ episode: { id, name, air_date, episode }, fav, handler }) => {
    return (
        <BootCard style={{ display: 'inline-block', width: '200px', margin: '5px 20px'}}>
            <BootCard.Header style={{ textAlign: 'center', fontSize: '70%'}}>{id}</BootCard.Header>
            <BootCard.Body>
                <ListGroup style={{ textAlign: 'center', fontSize: '70%'}}>
                    <ListGroupItem>{name}</ListGroupItem>
                    <ListGroupItem>{air_date}</ListGroupItem>
                    <ListGroupItem>{episode}</ListGroupItem>
                </ListGroup>
            </BootCard.Body>
            <BootCard.Footer style={{ textAlign: 'center' }}>
                <div onClick={() => handler(id)} className={fav}></div>
            </BootCard.Footer>
        </BootCard>
    )
}

export default Card


