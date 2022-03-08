
import React, { Component } from 'react';

class Multipleinput extends Component {


constructor(){
    super()
    this.state={
        fname : "",
        lname : "",
        email:"",
        mobile : ""
    }
}

onChangeHandler = (event) =>{

const inputName = event.target.name
const inputValue = event.target.value
this.setState({[inputName]:inputValue})


}

    render() {
        return (
            <div className="text-center mt-4">
                
                <h4>First Name : {this.state.fname}</h4>
                <h4> Last Name : {this.state.lname}</h4>
                <h4> Email : {this.state.email}</h4>
                <h4> Mobile : {this.state.mobile}</h4>

            <input onChange={this.onChangeHandler} type="text" name="fname" id="" placeholder="First Name"  required  /> <br/>
            <input onChange={this.onChangeHandler} type="text" name="lname" id="" placeholder="Last Name" required  /> <br/>
            <input onChange={this.onChangeHandler} type="text" name="email" id="" placeholder="Email"  required /> <br/>
            <input  onChange={this.onChangeHandler} type="text" name="mobile" id="" placeholder="Mobile"  required /> <br/>

            <input className='btn btn-primary' type="submit" value="Save Now"  />

            </div>
        );
    }
}

export default Multipleinput;
