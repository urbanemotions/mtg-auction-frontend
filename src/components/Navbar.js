import React from "react";
import { Link } from 'react-router-dom'

const Navbar = props => (
    <div className="nav bar">
        <div className="right menu">
            <h2>
                <Link to="/mtgcards" className="item"> Main </Link>
                <Link to="/about" className="item"> About </Link>
                <Link to="/login" className="item"> Login </Link>
                <Link to="/signup" className="item"> Signup </Link>
            </h2>
        </div>
    </div>
);

export default Navbar;