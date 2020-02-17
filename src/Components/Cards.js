import React, {Component} from 'react';
import Tags from './Tags';
import Card from './Card.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

class Cards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    tags: ["minimal-sunlight", "much-water"],
                    name: "Spider plant",
                    sunlight: "Minimal",
                    water: "3x a week",
                    rating: "4",
                    img: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    tags: ["intense-sunlight", "less-water"],
                    name: "Rubber plant",
                    sunlight: "Intense",
                    water: "1x a week",
                    rating: "5",
                    img: "https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    tags: ["minimal-sunlight", "less-water"],
                    name: "Monstera",
                    sunlight: "Minimal",
                    water: "1x a week",
                    rating: "6",
                    img: "https://images.unsplash.com/photo-1545241047-6083a3684587?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    tags: ["intense-sunlight", "much-water"],
                    name: "Monstera",
                    sunlight: "Intense",
                    water: "3x a week",
                    rating: "2",
                    img: "https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    tags: ["moderate-sunlight", "less-water"],
                    name: "Cacti",
                    sunlight: "Moderate",
                    water: "2x a month",
                    rating: "4",
                    img: "https://images.unsplash.com/photo-1493957988430-a5f2e15f39a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    tags: ["minimal-sunlight", "much-water"],
                    name: "Palm",
                    sunlight: "Minimal",
                    water: "3x a week",
                    rating: "5",
                    img: "https://images.unsplash.com/photo-1542733868-5d9c370ddb0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
            ]
        }
    }

    filterPlantsHandler() {
        const filteredList = this.state.data.filter( (item) => {
            return item.tags[0] === this.props.params;
        });
        
        return filteredList;
    }

    renderPlantsHandler() {
        const plants = this.filterPlantsHandler().map((plant, index) => 
        <Card key={index} id={index} img={plant.img} name={plant.name} rating={plant.rating} sunlight={plant.sunlight} water={plant.water} description={plant.description} />
        );

        if(plants.length > 0) {
            return plants;
        } else {
            return <h3>Sorry, no plants found!</h3>
        }
    }
    
    render() {
        return (                   
            <Container  className="cards-container">
                <Row id="cards-container-row">
                    {this.renderPlantsHandler()}
                </Row>
            </Container>
        );
    }
}

export default Cards;