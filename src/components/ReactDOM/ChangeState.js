
import React, { Component } from 'react';

class Changestate extends Component {


    constructor(){
        super()
        this.state = {
            name:"Alamin Sarker"
        }
    }

    ChangeName (a){
        this.setState({name:a})
    }

    render() {
        return (
            <div>
              
              <h2>{this.state.name}</h2> 
              <button onClick={this.ChangeName.bind(this,"Rupom Sarker")}>Change Name </button>

            </div>
        );
    }
}

export default Changestate;
