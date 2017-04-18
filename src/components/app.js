import React from 'react';
import Header from './header';

const navLinks = ['Yummy','Delicious','Tasty'];

const App = () => (
    <div>
        <Header brandName="Cheez-Its are" links={navLinks}>
            <div>hi</div>
        </Header>
    </div>
);

export default App;
