import React from 'react';
import Nav from './nav';
import Footer from './footer';

const App = (props) => (
    <div className="container">
        <Nav></Nav>
        {props.children}
        <Footer/>
    </div>
);

export default App;
