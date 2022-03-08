
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class FindMethod extends Component {


    changeImg(){

        var myImg = document.getElementById('myImg');
        ReactDOM.findDOMNode(myImg).src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNDtXR01d69Z4F8QcDB_pOoPL64_XN5Xns7g&usqp=CAU'
    }

    render() {
        return (
            <div className="text-center">
                

                
                <img id="myImg" src="https://cdn.dribbble.com/users/418188/screenshots/13639147/media/9c1c707190abb0822144bb31438ee265.png?compress=1&resize=400x300&vertical=top" alt="" /> <br/>

                <button onClick={this.changeImg} className="btn btn-danger p-2 mt-4"> Change</button> <br/>


            </div>
        );
    }
}

export default FindMethod;
