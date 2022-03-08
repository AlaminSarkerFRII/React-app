
import React, { Component } from 'react';

class Login extends Component {

   login = () => {
        sessionStorage.setItem("userName","Alamin") // key and value set hobe 
        console.log("you are log in ")
    }

    //logout hobe ... and clear hobe session
    logout = () =>{
        sessionStorage.clear(); // clear korbe value
        console.log("you are log out ");
    }
    render() {
        return (
            <div>
                <button onClick={this.login}>LOGIN</button>
                <button onClick={this.logout}>LOGOUT</button>
            </div>
        );
    }
}

export default Login;

