import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
        <nav>
          <Link className="Link" to="/">Home</Link>
          <Link className="Link" to="/admin">Admin</Link>
          <Link className="Link" to="/logIn">Login</Link>
        </nav>
        </div>
    );
};

export default Header;