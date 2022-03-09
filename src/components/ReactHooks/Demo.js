
import React from 'react'
import { useState } from 'react'

const Demo = () => {

    const [name,setName] = useState({
        country : "Bangladesh"
    });

  const changeHandler = () => {
    setName({country: "Pakistan"})
  }
  

  return (
    <div className="text-center">
        <h2>{name.country}</h2>
    <button onClick={changeHandler}>Change Name</button>
    </div>
  )
}

export default Demo;