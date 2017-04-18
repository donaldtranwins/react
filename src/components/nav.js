import React from 'react';
import NavLink from './nav_link';

export default () => (
    <ul className="nav nav-tabs">
        <li className="nav-item">
            <NavLink to="/" name="Home" index="true"/>
        </li>
        <li className="nav-item">
            <NavLink to="/about" name="About"/>
        </li>
        <li className="nav-item">
            <NavLink to="/articles" name="Articles"/>
        </li>
    </ul>
);