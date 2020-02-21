import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
  } from "react-router-dom";

const Tags = (props) => {

    return (
        <Router>
            <NavLink id={props.tagName} className="clover-light" to={props.tagName} onClick={() => props.changeCurrentTag(props.tagName)}>{props.tagName}</NavLink>
            <Route path="/:id" />
        </Router>
    );
}

export default Tags;