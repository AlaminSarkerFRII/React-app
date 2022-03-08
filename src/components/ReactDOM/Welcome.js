
import React,{Component} from 'react'

class Welcome extends Component {

    doThisFromClass(a){
        alert(a);
    }

    render(){

        
        return <div>
            <button onClick={this.doThisFromClass.bind(this,"Hello I am from class")}>Click Me</button>
            
            {/* <h3> Name : {this.props.name}</h3> */}
        </div>
    }
} 

export default Welcome;