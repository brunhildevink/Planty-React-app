import React from 'react';
import Col from 'react-bootstrap/Col';

const Card = (props) => {
    return (
    <Col xs={12} sm={8} md={6} lg={4} className="card-container clover-dark" id={props.id}>
        <div className="card-container-inner-container">
            <div className="card-image-container">
                <img src={props.img}/>
            </div>
            <h3 className="card-title">{props.name}</h3>
            <div className="card-details">
                <p className="card-sunlight">{props.sunlight}</p>
                <p className="card-water">{props.water}</p>
                <p className="card-rating">{props.rating}</p>
            </div>
            <p className="card-description">{props.description}</p>
            <a className="card-button clover-light" href="read-more">Read more</a>
        </div>
    </Col>
    )
}

export default Card;