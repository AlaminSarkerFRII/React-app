import React, { Component } from 'react';




constructor(){
    super();
    this.state = {
        postData : "",
        postResult : " ",
    }
}

onChangeHandler = (event) =>{
    const myData = event.target.value

this.setState({postData:myData})

    
}


onClickHandler = () =>{

    axios.post()

}





class Post extends Component {
    render() {
        return (
            <div className="text-center p-4">

                <input onChange={this.onChangeHandler} type="text" />
                <button onClick ={this.onClickHandler}>Send</button>
                
            </div>
        );
    }
}

export default Post;
