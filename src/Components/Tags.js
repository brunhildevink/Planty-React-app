import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

const Tags = (props) => {

    return (
        <Router>
            <Link className="clover-light" to={props.tagName} onClick={() => props.changeCurrentTag(props.tagName)}>{props.tagName}</Link>
            <Route path="/:id" />
        </Router>
    );
}

export default Tags;