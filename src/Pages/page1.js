import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Page1 extends Component {
    render(){

        if(sessionStorage.getItem("userName")===null){

            return <Redirect to="/login"/>
        } 
        
        else{
            return (
                <div>
                   <h2>Page1</h2>
                </div>
            );
        }
       
    }
}

export default Page1;
