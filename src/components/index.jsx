import * as React from 'react';
import Header from './Header/Header';
import DownloadCV from './DownloadCV/DownloadCV';
import AboutMe from './AboutMe/AboutMe';

import { Outlet } from 'react-router-dom';

const MainComponent = () => {
    return (
        <>
            <Header />
            <DownloadCV />
            <AboutMe />
        </>
    )
}

export default MainComponent;