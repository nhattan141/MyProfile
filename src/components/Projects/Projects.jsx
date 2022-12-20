import * as React from 'react';

import './Projects.scss';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const Projects = () => {
    const { ref, inView } = useInView({
        threshold: 0.2
    });
    const animationLeft = useAnimation();
    const animationMid = useAnimation();
    const animationRight = useAnimation();

    React.useEffect(() => {
        if (inView) {
            animationLeft.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
                },
            })
            animationMid.start({
                y: 0,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
                }
            })
            animationRight.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
                }
            })
        } else {
            animationLeft.start({
                x: '-100vw',
            })
            animationMid.start({
                y: '100vh'
            })
            animationRight.start({
                x: '100vw'
            })
        }
    }, [inView])

    const interval = () => {
        setInterval(() => {
            let projectscontainer = document.getElementById("projects");
            let vh = window.innerHeight;

            window.addEventListener('scroll', () => {
                let value = Math.ceil(window.scrollY);
                let positionBot = Math.min(Math.abs((vh - value)), 90);

                projectscontainer.style.setProperty("--positionMidProjects", `${positionBot}%`);
            });
        }, 1000);
    };

    React.useEffect(() => {
        interval();
    }, []);

    return (
        <div ref={ref} className="ProjectsContainer" id="projects">
            <motion.div animate={animationLeft}>
                <div className="box">
                    <div className="span"></div>
                    <div className="content">
                        <h1>2TMusic</h1>
                        <p>
                            This is a website was build by ReactJS, NodeJS and Express to listen to music.
                            You can listen and save your favorite songs.
                            You can also view the lyrics of the song you are listening to.
                        </p>
                        <a
                            href='https://github.com/nhattan141/2T-Music'
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ ['--clr']: "#ff1867" }}
                        >
                            <span>explore</span><i></i>
                        </a>
                    </div>
                </div>
            </motion.div>
            <motion.div animate={animationMid}>
                <div className="box blur1">
                    <div className="span"></div>
                    <div className="content">
                        <h1>Carrol</h1>
                        <p>
                            This is a website was build by ReactJS, NodeJS and Express to shopping.
                            You can buy products, add products into cart.
                            You can also manage your profile, order history and change your password.
                        </p>
                        <a
                            href='https://github.com/nhattan141/ShopThoITrang'
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ ['--clr']: "#1e9bff" }}
                        >
                            <span>explore</span><i></i>
                        </a>
                    </div>
                </div>
            </motion.div>
            <motion.div animate={animationRight}>
                <div className="box blur2">
                    <div className="span"></div>
                    <div className="content">
                        <h1>Tanportfolio</h1>
                        <p>
                            This is a web site was build by ReactJS, MUI, Framer Motion to introduce myself.
                            You can download my CV and know about me.
                        </p>
                        <a
                            href='https://github.com/nhattan141/MyProfile'
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ ['--clr']: "#6eff3e" }}
                        >
                            <span>explore</span><i></i>
                        </a>
                    </div>
                </div>
            </motion.div>
        </div >
    );
}

export default Projects;