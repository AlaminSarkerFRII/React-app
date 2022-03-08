
import React,{Component} from "react";

class StateUsing extends Component {
    // craete state objects
    constructor(){
        super()
        this.state  = {
            name: " Alamin Sarker",
            age: ["25","20","40"], //array akareo kor jabe tokon index ditehobe
            home:"Rangpur",
            weight:"58kg"
        }

        // or object create koreo rakha jay..

    //    var obj  = {
    //         name: " Alamin Sarker",
    //         age: 25,
    //         home:"Rangpur",
    //         weight:"58kg"
    //     }

    //     // or object create koreo rakha jay...

    //     this.state=obj;


    }

    render(){
        return <div>
            <h1> My Name is = {this.state.name}</h1>
            <h2> My Age is = {this.state.age[1]}</h2> 
            <h3> My Home is = {this.state.home}</h3>
            <h4> My Weight is = {this.state.weight}</h4>
        </div>
    }
} 

export  default StateUsing;