import * as React from 'react';
import Header from './Header/Header';
import DownloadCV from './DownloadCV/DownloadCV';
import AboutMe from './AboutMe/AboutMe';
import Projects from './Projects/Projects';
import ToTop from './ToTop/ToTop';

const MainComponent = () => {
    return (
        <>
            <Header />
            <DownloadCV />
            <AboutMe />
            <Projects />
            <ToTop />
        </>
    )
}

export default MainComponent;