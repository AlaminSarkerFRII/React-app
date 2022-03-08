
import React,{Component} from "react";

class NestedObject extends Component {
    // craete state objects
    constructor(){
        super()
        this.state  = {
            name: " Alamin Sarker",
            age: ["25","20","40"], //array akareo kor jabe tokon index ditehobe
            home:"Rangpur",
            weight:{        // you can as objects nested
                class7: ["25","20","40"],
                clas8:"40kg",
                class9:"45kg"

            }

        }
    }

    render(){
        return <div>
            <h1> My Name is = {this.state.name}</h1>
            <h2> My Age is = {this.state.age[1]}</h2> 
            <h3> My Home is = {this.state.home}</h3>
            <h4> My Weight is = {this.state.weight.clas8}</h4>
            <h4> My Weight is = {this.state.weight.class7[0]}</h4>
        </div>
    }
} 

export  default NestedObject;