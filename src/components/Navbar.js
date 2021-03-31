import React from "react";
import { Link } from 'react-router-dom'

const Navbar = props => (
    <div className="nav bar">
        <div className="right menu">
            <Link to="/mtgcards" className="item">Index</Link>
            <Link to="/about" className="item">About</Link>
            <Link to="/login" className="item">Login</Link>
            <Link to="/logout" className="item">Logout</Link>
        </div>
    </div>
);

export default Navbar;