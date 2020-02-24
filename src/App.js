import React, {Component} from 'react';
import './App.css';
import Tags from './Components/Tags';
import Header from './Components/Header';
import Cards from './Components/Cards';
import SadImage from './icons/sad-plants.png';
import Json from './data/plants.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Json,
      filteredData: [],
      tags: [
        "foliage",
        "succulents and cacti",
        "flowering",
        "minimal-sunlight",
        "moderate-sunlight",
        "intense-sunlight",
        "much-water",
        "less-water"
        
      ],
      currentTag: window.location.pathname.substring(1),
    }
  }

  componentDidMount = () => {

    console.log("App mounted");
    console.log("current tag: ", this.state.currentTag);
    
    if(this.state.currentTag) {

      this.filterPlantsHandler(this.state.currentTag);
    }
  }

  changeCurrentTag = (props) => {
    this.setState({currentTag:props});
    for(let i = 0; i < document.getElementsByClassName("active").length; i++) {
      document.getElementsByClassName("active")[i].classList.remove("active");
    }
    if(props) {
      document.getElementById(props).classList.add("active");
    }
    this.filterPlantsHandler(props);
  }

  filterPlantsHandler = (props) => {
    const filteredArray = [];
    this.state.data.filter( (item) => {
      item.tags.map(index => {
        if(index === props) {
          filteredArray.push(item);
        }
      });
    });
    this.setState({filteredData:filteredArray});
  }

  renderTags = () => {
    const tags = this.state.tags.map((tag, index) => 
      <Tags key={index} tagName={tag} changeCurrentTag={this.changeCurrentTag}/>      
    );
    return tags;
  }


  render() {
    return (
      <div className="App">
        
        <Header changeCurrentTag={this.changeCurrentTag}/>

        <Container >
          <Row className="tags-container justify-content-center">
            {this.renderTags()}
          </Row>
        </Container>

        {
          this.state.filteredData.length === 0 && this.state.currentTag ? 
            <div>
              <h3 className="error-message">Uh oh, no plants were found :( </h3>
              <img src={SadImage} className="sad-plants" />
            </div> : null
        }

        {
          !this.state.currentTag ? 
          <Cards data={this.state.data} /> : 
          <Cards data={this.state.filteredData}></Cards>
        }
        
      </div>
    );
  }
}

export default App;
