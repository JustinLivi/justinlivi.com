import React from 'react';
import Home from './Home';
import Experience from './Experience';
import Branding from './Branding';
import Contact from './Contact';
import { OpenSource } from './OpenSource';

function getPage( route ) {
    switch ( route ) {
        case 'home': return () => <Home />;
        case 'experience': return () => <Experience />;
        case 'open-source': return () => <OpenSource />;
        case 'branding': return () => <Branding />;
        case 'contact': return () => <Contact />;
        default: return () => <div>{route}</div>;
    }
}

export default getPage;
