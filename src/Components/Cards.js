import React from 'react';
import Card from './Card.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cards = (props) => {

    const renderPlantsHandler = () => {
        const plants = props.data.map((plant, index) => 
        <Card key={index} id={index} img={plant.img} name={plant.name} rating={plant.rating} sunlight={plant.sunlight} water={plant.water} description={plant.description} />
        );

        return plants;

    }
    
    return (                   
        <Container  className="cards-container">
            <Row id="cards-container-row">
                {renderPlantsHandler()}
            </Row>
        </Container>
    );
}

export default Cards;