import React from 'react';
import { Link } from 'react-router';
import articleList from '../data/article_data';

export default (props) => {

    const articleLinks = articleList.map((title, index) => (
        <li key={index} className="list-group-item"><Link to={`/articles/${index}`}>{title}</Link></li>
    ));

    return (
        <div>
            <ul className="list-group">
                {articleLinks}
            </ul>
            <hr/>
            {props.children}
        </div>
    )
};