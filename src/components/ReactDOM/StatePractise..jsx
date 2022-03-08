
import React, {Component} from 'react';

class StatePractise extends Component {

    constructor(){
        super()
        this.state = {
            name: 'Alamin Sarker',
            age:["30","20","50","40"],
            weight:'59kg',
            height:'5ft 7 inch'
        }
    }

    // change state value by setState

    changeName (a){
        this.setState({name:a})
    }


    render() {
        return <div className="text-center pt-5">

                {/* <h1> My Name :  {this.state.name} </h1>
                <h1> My Age :  {this.state.age[2]} </h1>
                <h1> Weight:  {this.state.wight} </h1>
                <h1> height: {this.state.height} </h1> */}

                <hr/>

                <h2>{this.state.name}</h2>
                <button onClick={this.changeName.bind(this,"Kajol Your Name Change")} className="btn btn-primary">Change State </button>


        </div>
    }
} export default StatePractise;