import React from 'react';
import { Link } from 'react-router-dom';

function Navbar () {
    return (
        <nav style={{ backgroundColor: 'lightgray', paddingTop: '30px', textAlign: 'right'}}>
            <ul>
                <Link to='/home' style={{paddingRight: '50px', color: 'green'}}>Home</Link>
                <Link to='/about' style={{paddingRight: '50px', color: 'green'}}>About</Link>
                <Link to='/services' style={{paddingRight: '50px', color: 'green'}}>Services</Link>
                <Link to='/contact' style={{paddingRight: '100px', color: 'green'}}>Contact</Link>
            </ul>
        </nav>
    );
}

export default Navbar;
