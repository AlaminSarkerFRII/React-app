import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class Form extends Component {


    constructor(){
        super() 
        this.state = {
            name: "",
        }
    }

    changeHandler = (event) =>{

        const newName = event.target.value;

        this.setState({name:newName}) // set hobe state er man hisabe


    }


  render() {

    return (
      <div className="text-center ">

        <h4>My first Form </h4> <br />
        <p>{this.state.name}</p>
    <input onChange={this.changeHandler} type="text" name="" id="" placeholder="text here" /><br/>
    <input type="submit" name="submit" id="" placeholder="text here" />


      </div>
    )
  }
}

export default Form;