import React from 'react';
import Home from './Home';
import Experience from './Experience';
import { OpenSource } from './OpenSource';

function getPage( route ) {
    switch ( route ) {
        case 'home': return () => <Home />;
        case 'experience': return () => <Experience />;
        case 'open-source': return () => <OpenSource />;
        default: return () => <div>{route}</div>;
    }
}

export default getPage;
