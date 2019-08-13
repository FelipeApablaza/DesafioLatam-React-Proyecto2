import React from 'react'
import BootCard from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const Card = ({ character: { id, name, status, species, gender, image }, fav, handler }) => {
    return (
        <BootCard style={{ display: 'inline-block', width: '200px', margin: '5px 20px'}}>
            <BootCard.Header style={{ textAlign: 'center' }} >
                <BootCard.Text style={{ textAlign: 'center', fontSize: '70%' }}>{name}</BootCard.Text>
            </BootCard.Header>
            <BootCard.Img src={image} />
            <BootCard.Body>
                <ListGroup style={{ textAlign: 'center', fontSize: '70%' }}>
                    <ListGroupItem>{status}</ListGroupItem>
                    <ListGroupItem>{species}</ListGroupItem>
                    <ListGroupItem>{gender}</ListGroupItem>
                </ListGroup>
            </BootCard.Body>
            <BootCard.Footer style={{ textAlign: 'center' }}>
                <div onClick={() => handler(id)} className={fav}></div>
            </BootCard.Footer>
        </BootCard>
    )
}

export default Card

// css del card!