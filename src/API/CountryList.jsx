import React, { Component } from 'react';
import axios from 'axios';

class Countrylist extends Component {

    constructor(){
        super()
        this.state ={
            mydata : []
        };
    }
componentDidMount() {
    axios.get('https://restcountries.com/v3.1/all')
    .then(res=>{
        this.setState({mydata:res.data})
    })
    .catch(error=>{
        console.log(error)
    })
}

    render() {
        const myList = this.state.mydata;
       const countryName = myList.map((myList)=>{
            return  <li>{myList.name.common}</li>
        })

        return (
            <div>
                <ul>{countryName}</ul>
            </div>
        );
    }
}

export default Countrylist;
