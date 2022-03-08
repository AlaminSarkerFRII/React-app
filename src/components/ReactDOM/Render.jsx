
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Render extends Component {

    changeHandler(){

        var container = document.getElementById("myName");
        var element = <h1> My Name is Alamin , I am from ReactDOM </h1>
        var callback = function(){
            alert('You are who !')
        }

        // call with react dom

        ReactDOM.render(element, container,callback)

    }




    render() {
        return (
            <div className="text-center p-5">
               
                <h2 id="myName">My Name Is Alamin Sarker</h2>
                <button onClick={this.changeHandler}>Change</button>

            </div>
        );
    }
}

export default Render;
