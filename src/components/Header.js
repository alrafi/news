import React from 'react';
// import logo from './assets/logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>The Alrafi Times</h1>
            <Link to="/" style={LinkStyle}>Home</Link> | <Link to="/about" style={LinkStyle}>About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const LinkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;