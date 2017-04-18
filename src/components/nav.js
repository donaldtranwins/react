import React from 'react';
import { Link, IndexLink } from 'react-router';


export default () => (
    <header>
        <nav>
            <Link to="/"><img src="assets/images/logo.png" alt="MBoutique Logo" /></Link>
            <ul>
                <li>
                    <IndexLink to="/" activeClassName="active">Welcome</IndexLink>
                </li>
                <li>
                    <Link to="/our_macarons" activeClassName="active">Our Macarons</Link>
                </li>
                <li>
                    <Link to="/gifts_parties" activeClassName="active">Gifts &amp; Parties</Link>
                </li>
                <li>
                    <Link to="/contact" activeClassName="active">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
)