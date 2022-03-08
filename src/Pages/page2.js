import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Page2 extends Component {


    // constructor(){
    //     super();
    //     this.state = {
    //         passData : "AlaminSarkerKajol from Rangpur District"
    //     }
    // }

    render() {
        // let para = "/page3/" + this.state.passData;
        if(sessionStorage.getItem("userName")==null){

            return <Redirect to="/login"/>
        } 
        
        else{
            return (
                <div>
                   <h2>Page2</h2>
                </div>
            );
        }
    }
}

export default Page2;
