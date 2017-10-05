import React from 'react';
import Home from './Home';
import Experience from './Experience';

function getPage( route ) {
    switch ( route ) {
        case 'home': return () => <Home />;
        case 'experience': return () => <Experience />;
        default: return () => <div>{route}</div>;
    }
}

export default getPage;
