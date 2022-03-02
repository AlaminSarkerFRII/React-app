
import React from 'react'
import {Link} from 'react-router-dom';
import SingedOutLink from './SignOutLink';
import SingedInLink from './SingedInLink';

 const Navbar = () => {
  return (

    <nav className="nav-wrapper grey darken-3">

        <div className="container">
            
        <Link to ='/' className="brand-logo"> Alamin Sarker </Link>

        <SingedInLink />
        <SingedOutLink />
        
        </div>
    </nav>
  )
}

export default Navbar;
