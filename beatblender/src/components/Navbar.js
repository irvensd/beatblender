import React from 'react';
import {Component} from 'react';
import "./NavbarStyles.css";
import { Menuitems } from './Menuitems';
import { Link } from "react-router-dom";
import logo1 from './image/BeatBlender.png';

class Navbar extends Component {
    state = {clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render() {
  return (
    <nav className="NavbarItems">
    <img className='logo1' src={logo1} alt="Logo" />
    <h1 className="navbar-logo"> </h1>

        <div className="menu-icons" onClick=
        {this.handleClick}>

            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? 
        " nav-menu active " : "nav-menu" }>

            {Menuitems.map((item, index) => {
                return (    
                <li key={index}>
                    <a className={item.cName}  href="/">
                    <i className={item.icon}></i>{item.title}
                    </a>
                </li>
                )
            })}
            <button>Signup</button>
        </ul>
    </nav>
  )
}}

export default Navbar 