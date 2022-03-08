import React from 'react';

function Hello (props){

//bind use kore arguments pass..
  function doThis(a){
     alert (a)

    }

    return(

        <div>

        <button onClick={doThis.bind(this,"hi i am from para")}>Click Me</button>

        {/* <h2> Name : {props.name} and Age :{props.age}</h2> */}
        </div>
    )
};

export default Hello;