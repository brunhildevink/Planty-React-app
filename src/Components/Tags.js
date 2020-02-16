import React from 'react';
import Cards from './Cards';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Child = ({match}) => {
    return <Cards params={match.params.id} />
}

const Tags = () => {
    return (
        <Router>
        <div className="tags-container">
            <Link className="clover-light" to="/minimal-sunlight">Minimal Sunlight</Link>
            <Link className="clover-light" to="/moderate-sunlight">Moderate Sunlight</Link>
            <Link className="clover-light" to="/intense-sunlight">Intense Sunlight</Link>
            <Link className="clover-light" to="/less-water">Less Water</Link>
            <Link className="clover-light" to="/much-water">Much Water</Link>
        </div>
        <Route path="/:id" component={Child} />
        </Router>
    );
}

export default Tags;