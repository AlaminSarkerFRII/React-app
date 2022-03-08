import React from 'react';



// call with another function and bind method..

const myArrow = (a)=>{
    console.log(a);
}


const Arrow = ()=>{

    return (

        <div>
            <button onClick={myArrow.bind(this,'Hi I am from bind')} className="btn btn-danger w-25 me-5 ">Hi Arrow</button>
        </div>
    );
}

export default Arrow;