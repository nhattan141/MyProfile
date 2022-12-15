import * as React from 'react';

import bird1 from '../../assets/imgs/bird1.png';
import bird2 from '../../assets/imgs/bird2.png';
import forest from '../../assets/imgs/forest.png';
import rocks from '../../assets/imgs/rocks.png';
import water from '../../assets/imgs/water.png';
import cv from '../../assets/imgs/luffy.jpg';

import './DownloadCV.scss';

const DownloadCV = () => {
    const Download = () => {
        var a = document.createElement("a");
        a.href = cv;
        a.setAttribute("download", "NhatTanCV.jpg");
        a.click();
    }

    const interval = () => {
        setInterval(() => {
            let t = document.getElementById("text");
            let b1 = document.getElementById("bird1");
            let b2 = document.getElementById("bird2");
            let bt = document.getElementById("btn");
            let rc = document.getElementById("rocks");
            let fr = document.getElementById("forest");

            window.addEventListener('scroll', () => {
                let value = window.scrollY;

                t.style.top = 20 + value * -0.5 + "px";
                b1.style.top = value * -1.5 + "px";
                b1.style.left = value * 2 + "px";
                b2.style.top = value * -1.5 + "px";
                b2.style.left = value * -5 + "px";
                bt.style.marginTop = value * 1.5 + "px";
                rc.style.top = value * -0.12 + "px";
                fr.style.top = value * 0.25 + "px";
            });
        });
    };

    React.useEffect(() => {
        interval();
    }, []);

    React.useEffect(() => {
        return () => {
            clearInterval(interval());
        };
    }, []);

    return (
        <section>
            <h2 id="text" className="text">
                <span>Welcome to my</span><br></br>Website
            </h2>
            <img src={bird1} id="bird1"></img>
            <img src={bird2} id="bird2"></img>
            <img src={forest} id="forest"></img>
            <button id="btn" onClick={Download}>Download CV</button>
            <img src={rocks} id="rocks"></img>
            <img src={water} id="water"></img>
        </section>
    );
}

export default DownloadCV;