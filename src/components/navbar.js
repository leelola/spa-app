import React from 'react';
import {NavLink} from 'react-router-dom';
const Navbar = (props) => (

    <nav>
     <h2 class ="logo"><a class="logo-link" href="#">{props.title}</a></h2>
        <ul class ="nav-menu">
          <li><NavLink className="nav-menu__link" activeClassName="Activate" exact to="/">Home</NavLink></li>
          <li><NavLink className="nav-menu__link" exact to="/projects">Projects</NavLink></li>
          <li><NavLink className="nav-menu__link" exact to="/resume">Contact Me</NavLink></li>
        </ul>
    </nav>
);

export default Navbar;