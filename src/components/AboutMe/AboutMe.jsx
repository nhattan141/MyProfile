import * as React from 'react';

import { Grid, Stack, Typography, Button } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import Typed from 'react-typed';

import './AboutMe.scss';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const AboutMe = () => {
    const { ref, inView } = useInView({
        threshold: 0.2
    });
    const animation1 = useAnimation();
    const animation2 = useAnimation();

    React.useEffect(() => {
        if (inView) {
            animation1.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
                }
            })
            animation2.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
                }
            })
        } else {
            animation1.start({
                x: '-100vw'
            })
            animation2.start({
                x: '100vw'
            })
        }
    }, [inView])

    const interval = () => {
        setInterval(() => {
            let aboutcontainer = document.getElementById("about");

            window.addEventListener('scroll', () => {
                let value = window.scrollY;
                let position = 90 + value * -0.5;

                aboutcontainer.style.setProperty("--positionMid", `${position}%`);
            });
        }, 1000);
    };

    React.useEffect(() => {
        interval();
    }, []);

    const scrollToProjects = () => {
        const link = document.createElement('a');
        link.href = '#projects';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div ref={ref} className="AboutContainer" id="about">
            <section>
                <div className="color"></div>
                <div className="color"></div>
            </section>
            <Grid
                container
                spacing={2}
                sx={{
                    position: 'absolute',
                    width: '80%',
                    height: '80%',
                    margin: '0 auto',
                    marginLeft: '10%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 100
                }}
            >
                <Grid item md={4} xs={12}>

                    <motion.div
                        style={{
                            display: 'flex',
                            width: '100%',
                            minHeight: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        animate={animation1}
                    >
                        <Stack direction="column"
                            justifyContent="center"
                            alignItems="center"
                            sx={{ height: '100%', width: '100%' }}
                        >
                            <div className="blob"></div>
                        </Stack>
                    </motion.div>
                </Grid>
                <Grid item md={8} xs={12}>
                    <motion.div
                        style={{
                            display: 'flex',
                            width: '100%',
                            minHeight: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        animate={animation2}
                    >
                        <Stack
                            direction="column"
                            justifyContent="space-around"
                            alignItems="flex-start"
                            spacing={2}
                            sx={{ height: '100%' }}
                        >
                            <Typography
                                variant="h1"
                                component="h2"
                                sx={{ fontFamily: '"Rancho", cursive', color: 'white' }}
                            >
                                <Typed
                                    strings={['HI, I AM TÂN']}
                                    typeSpeed={40}
                                    backSpeed={50}
                                    loop
                                />
                            </Typography>
                            <Typography
                                variant="h4"
                                component="h2"
                                sx={{ color: 'white' }}
                            >
                                A FRONT-END DEVELOPER
                            </Typography>
                            <Typography
                                variant="h6"
                                component="p"
                                sx={{ color: 'white' }}
                            >
                                I am a final year student of Sài Gòn University.
                                <br />
                                I learned about ReactJS. My goal is to become a professional front-end developer in the near future, and beyond to become a full-stack developer.
                            </Typography>
                            <Button
                                variant="contained"
                                endIcon={<KeyboardDoubleArrowDownIcon />}
                                onClick={scrollToProjects}
                            >
                                See my project
                            </Button>
                        </Stack>
                    </motion.div>
                </Grid>
            </Grid>
        </div >
    );
}

export default AboutMe;