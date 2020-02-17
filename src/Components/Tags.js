import React from 'react';
import Cards from './Cards';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

const Child = () => {
    let {id} = useParams();
    return (
        <div>
            <p className="tag-param">Tag: {id}</p>
            <Cards params={id} />
        </div>
    );
}

const Tags = () => {
    return (
        <Router>
        <div className="tags-container">
            <Link className="clover-light" to="/minimal-sunlight">Minimal Sunlight</Link>
            <Link className="clover-light" to="/moderate-sunlight">Moderate Sunlight</Link>
            <Link className="clover-light" to="/intense-sunlight">Intense Sunlight</Link>
        </div>
        <Switch>
        <Route path="/:id" component={Child} />
        </Switch>
        </Router>
    );
}

export default Tags;