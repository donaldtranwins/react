import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import About from './components/about';
import Articles from './components/articles';
import ArticleContent from './components/article_content';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About}/>
        <Route path="articles" component={Articles}>
            <Route path=":id" component={ArticleContent} />
        </Route>
    </Route>
);