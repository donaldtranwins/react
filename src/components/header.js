import React from 'react';

const Header = (props) => {
    console.log('Header props:', props);

    const listOfLinks = props.links.map((link, index) => {
        return <li key={index}><a href="#">{link}</a></li>;
    });

    function brand(){
        if (props.brandName){
            return props.brandName;
        } else {
            return "Gardetto's are"
        }
    }
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <p className="navbar-brand">{ brand() }</p>
                </div>
                <ul className="nav navbar-nav">
                    {listOfLinks}
                </ul>
            </div>
        </nav>
    )
};

export default Header;