
import React, { Component } from 'react';

class Refresh extends Component {



    constructor(){
        super();
        this.refreshNow = this.refreshNow.bind(this)
    }

    refreshNow(){
        this.forceUpdate();
    }


    render() {
        return (
            <div className="text-center">

                <h2>{Math.random()}</h2>
                <button onClick={this.refreshNow}>Refresh Now</button>


            </div>
        );
    }
}

export default Refresh;
