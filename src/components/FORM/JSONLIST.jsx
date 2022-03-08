
import React, { Component } from 'react';
import  ReactDOM from 'react-dom';

class JSONLIST extends Component {
    render() {


        const myArray = [

            {
                city:"Dhaka",
                zip:1000,
            },
        
            {
                city:"Rangpur",
                zip:500,
            },
  
            {
                city:"Rajshahi",
                zip:600,
            },
        
            {
                city:"Pabna",
                zip:700
            }
        
        ]


        const myData = myArray.map((data)=>{
            return <option>{data.city}</option>
        }) // zip sellect korar jonno akoi vabe function declare kora jabe



        return (
            <div>
                <h3>Select Your City</h3>
            <select>{myData}</select>
                
            </div>
        );
    }
}

export default JSONLIST;
