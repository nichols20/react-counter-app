import React, { Component } from 'react';


//stateless functional component

const NavBar = ({counters}) => {
  return ( 
   <nav className="navbar navbar-light bg-light">
     <div className="container-fluid">
       <a className="navbar-brand" href="#">
          Navbar
         <span className="badge badge-pill badge-secondary m-2">{counters}</span>
       </a>
     </div>
   </nav> );

}

 
export default NavBar;