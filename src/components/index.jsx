import * as React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';

const MainComponent = () => {
    return (
        <>
            <Header />
            <div className='blob one'></div>
            <Outlet />
        </>
    )
}

export default MainComponent;