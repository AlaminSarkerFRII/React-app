import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import pages 
import About from './Pages/About.jsx';
import Portfolio from './Pages/Portfolio.jsx';

import {Route ,Link, BrowserRouter as Router } from '/node_modules/react-router-dom/'

const myrouter = (
        <Router>
      <div> 
          <ul>
                <Link to="/"> Home</Link>
                <Link to="/about"> About</Link>
                <Link to="/contact"> Contact</Link>
                <Link to="/portfolio"> Portfolio</Link>   
          </ul>

          <Route exact path="/app" component = {App}/>
          <Route path="/about" component = {About}/>
          <Route path="/portfolio" component = {Portfolio}/>

           </div>
        </Router>
)


ReactDOM.render(<App/>, document.getElementById('root'));

