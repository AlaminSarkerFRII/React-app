
import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Home from './Home';
import Notfound from './notfound';
import Login from './login';

class Myroute extends Component {
    render() {
        return (
            <div>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/page1" component={Page1} />
                <Route exact path="/page2" component={Page2} />
                <Route exact path="/page3/" component={Page3} />
                <Route component={Notfound} />
                </Switch>
            </div>
        );
    }
}


export default Myroute;
