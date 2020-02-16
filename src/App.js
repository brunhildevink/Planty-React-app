import React, {Component} from 'react';
import './App.css';
import './animations.scss';
import Tags from './Components/Tags';
import Header from './Components/Header';
import Cards from './Components/Cards';

function App() {

    return (
      <div className="App">
        <Header />
        <Tags/>
      </div>
    );
}

export default App;
