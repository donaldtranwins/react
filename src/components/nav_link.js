import React from 'react';
import {Link, IndexLink } from 'react-router';

export default (props) => {
    const { name, index, ...rest } = props;

    if(index)
        return <IndexLink {...rest} className="nav-link" activeClassName="active">{name}</IndexLink>;
    return (
        <Link {...rest} className="nav-link" activeClassName="active">{name}</Link>
    )
};