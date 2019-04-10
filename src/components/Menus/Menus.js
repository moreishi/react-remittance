import React from 'react';
// import Link from '../Link/Link';
import { Link } from 'react-router-dom';

const Menus = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link to="Home">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="signup">Sign Up</Link>
            </li>
            <li className="nav-item">
                <Link to="signin">Sign In</Link>
            </li>
        </ul>
    );
}

export default Menus;