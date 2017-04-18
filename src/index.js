import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/app';
import Welcome from './components/welcome';
import OurMacarons from './components/our_macarons';
import GiftsParties from './components/gifts_parties';
import Contact from './components/contact';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Welcome}/>
            <Route path="/our_macarons" component={OurMacarons}></Route>
            <Route path="/gifts_parties" component={GiftsParties}></Route>
            <Route path="/contact" component={Contact}></Route>
        </Route>
    </Router>,
    document.getElementById('root')
);
