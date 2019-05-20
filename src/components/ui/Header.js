import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Marissa McDonnell</h1>
        <div className="nav-menu">
            <NavLink to="/" activeClassName="live-nav-menu" exact={true}>Home</NavLink>
            <NavLink to="/portfolio" activeClassName="live-nav-menu" exact={true}>Projects</NavLink>
            <NavLink to="/contact" activeClassName="live-nav-menu">Contact</NavLink>
        </div>
    </header>
);

export default Header;
