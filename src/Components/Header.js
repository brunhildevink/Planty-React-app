import React from 'react';
import Icon from '../icons/planty_icon.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

const Header = (props) => {
    return (
        <div className="header">
            <Router>
                <Link id={"home"} className="clover-dark" to="/" onClick={() => props.changeCurrentTag(props.tagName)}>
                    <img src={Icon} className="planty-icon" />
                    <h1>Planty</h1>
                </Link>
                <Route path="/:id" />
            </Router>
            <h2>Find the <span className="header-emphasis">perfect</span> plant for <span className="header-emphasis">your interior</span>.</h2>
        </div>
    );
}

export default Header;