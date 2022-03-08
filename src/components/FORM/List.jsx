import React, { Component } from 'react'

 class List extends Component {
  render() {


    const country = ["Banglades","Canada","Nepal","Pakistan","Germany"]
    const myCountry = country.map((countryData) =>{
        return <option>{countryData}</option>
    })

    return (
      <div >

        <select>{myCountry}</select>

      </div>
    )
  }
}



  
export default List;
