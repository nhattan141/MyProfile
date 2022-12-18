import * as React from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

const MainComponent = () => {
    return (
        <>
            <Header />
            <Home />
            <AboutMe />
            <Projects />
            <Contact />
        </>
    )
}

export default MainComponent;