import * as React from 'react';

import { Grid, Stack, Typography, Button } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import Typed from 'react-typed';

import './Contact.scss';

const Contact = () => {
    const interval = () => {
        setInterval(() => {
            let aboutcontainer = document.getElementById("contact");

            window.addEventListener('scroll', () => {
                let value = Math.ceil(window.scrollY);
                let position = Math.min(Math.abs((1223 - value)), 90);

                aboutcontainer.style.setProperty("--positionMidpositionContact", `${position}%`);
            });
        }, 1000);
    };

    React.useEffect(() => {
        interval();
    }, []);

    const scrollToProjects = () => {
        window.scrollTo({
            top: 1200,
            behavior: 'smooth'
        });
    }

    return (
        <div className="ContactContainer" id="contact">
            {/* <Grid
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
                <Grid item md={4} xs={12} sx={{ border: '1px solid black' }}>
                    <Stack direction="column"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ height: '100%', width: '100%' }}
                    >
                        <div className="blob"></div>
                    </Stack>
                </Grid>
                <Grid item md={8} xs={12} sx={{ border: '1px solid black' }}>
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
                </Grid>
            </Grid> */}
        </div >
    );
}

export default Contact;