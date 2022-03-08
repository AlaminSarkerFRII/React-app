import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';


class Navigation extends Component {
    render() {
        return (
            <div>

     <ul>
    <li><NavLink   exact activeStyle={{color:"green"}} to="/">Home</NavLink></li>
    <li><NavLink exact activeStyle={{color:"green"}} to="/page1">Page1</NavLink></li>
    <li><NavLink exact activeStyle={{color:"green"}} to="/page2">page2</NavLink></li>
    <li><NavLink exact activeStyle={{color:"green"}} to="/page3">page3</NavLink></li>
                
    </ul>
                
            </div>
        );
    }
}

export default Navigation;
