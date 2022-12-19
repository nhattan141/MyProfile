import * as React from 'react';

import logo from '../../assets/imgs/logoBlackPink.png';

import './Home.scss';

const DownloadCV = () => {
    // const Download = () => {
    //     var a = document.createElement("a");
    //     a.href = cv;
    //     a.setAttribute("download", "NhatTanCV.jpg");
    //     a.click();
    // }

    return (
        <div className="HomeController" id="home">
            <section>
                <div className="color"></div>
            </section>
            <div className="text"><span>Welcome to my</span><br />Website</div>
            <div className="avatar">
                {/* <img src={logo}></img> */}
            </div>
        </div>
    );
}

export default DownloadCV;