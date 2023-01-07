import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Welcome to our new website</h1>
            <Link to={'/'}>Home</Link>
            <Link to='blogs'>Blogs</Link>
            <Link to='about'>About</Link>
        </div>
    );
};

export default Header;