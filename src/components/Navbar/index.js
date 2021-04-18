import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from '../../assets/teamspark-logo.png'

function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className='container'>
                    <Link to="/">
                        <img className="navbar-brand" src={logo} alt='Teamspark logo'></img>
                    </Link>
                    <div className='d-flex'>
                    <Link to="/" className='nav-link'>
                        Home
                    </Link>
                    <Link to="/about" className='nav-link'>
                        About
                    </Link>
                    <Link to="/help" className='nav-link'>
                        Help
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;