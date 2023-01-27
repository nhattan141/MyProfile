import * as React from 'react';

import { Grid, Stack, Typography, Button, TextField } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlaceIcon from '@mui/icons-material/Place';
import SendIcon from '@mui/icons-material/Send';

import emailjs from '@emailjs/browser';

import { motion, transform, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

import './Contact.scss';

const Contact = () => {
    const [values, setValues] = React.useState({
        user_name: '',
        user_email: '',
        message: ''
    });
    const [status, setStatus] = React.useState('NORMAL');

    const handleChange = (e) => {
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }))
    };

    const form = React.useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        if (values.user_name === '' || values.user_email === '' || values.message === '') {
            setStatus('ERROR');
            return;
        }

        emailjs.sendForm('service_a3whncs', 'template_ttg86o2', form.current, 'rhAsO6zgXRYuWpkqy')
            .then((result) => {
                console.log(result.text);
                setValues({
                    user_name: '',
                    user_email: '',
                    message: ''
                });
                setStatus('SUCCESS');
            }, (error) => {
                console.log(error.text);
                setStatus('ERROR');
            });
    };

    const { ref, inView } = useInView({
        threshold: 0.2
    });
    const animationLeft = useAnimation();
    const animationRight = useAnimation();

    React.useEffect(() => {
        if (inView) {
            animationLeft.start({
                x: 0
            })
            animationRight.start({
                transform: 'scale(1)',
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
                }
            })
        } else {
            animationLeft.start({
                x: '-100vw'
            })
            animationRight.start({
                transform: 'scale(0)',
            })
        }
    }, [inView])

    const interval = () => {
        setInterval(() => {
            let aboutcontainer = document.getElementById("contact");
            let vh = window.innerHeight;

            window.addEventListener('scroll', () => {
                let value = Math.ceil(window.scrollY);
                let position = Math.min(Math.abs((1332 - value)), 90);

                aboutcontainer.style.setProperty("--positionMidContact", `${position}%`);
            });
        }, 1000);
    };

    React.useEffect(() => {
        interval();
    }, []);

    const gotoFacebook = () => {
        const link = document.createElement('a');
        link.href = 'https://www.facebook.com/profile.php?id=100010069714539';
        link.target = '_blank';
        link.rel = ';noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const gotoGithub = () => {
        const link = document.createElement('a');
        link.href = 'https://github.com/nhattan141';
        link.target = '_blank';
        link.rel = ';noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div ref={ref} className="ContactContainer" id="contact">
            <section>
                <div className="color"></div>
                <div className="color"></div>
            </section>
            <Grid
                container
                spacing={2}
                sx={{
                    flexGrow: 1,
                    width: '80vw',
                    minHeight: '80vh',
                    margin: '5vh 5vw',
                    // zIndex: '1000'
                }}
            >
                <Grid item md={7} xs={12} sx={{ height: '80vh' }}>
                    <motion.div
                        style={{
                            display: 'flex',
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        animate={animationLeft}
                    >
                        <form ref={form} onSubmit={sendEmail}>
                            <Typography
                                variant="h6"
                                component="p"
                            >
                                Send me message
                            </Typography>
                            {
                                status === 'SUCCESS' ?
                                    <Typography
                                        // variant="h7"
                                        component="p"
                                        sx={{
                                            backgroundColor: '#32de84',
                                            color: 'white',
                                            borderRadius: '5px',
                                            padding: '5px',
                                        }}
                                    >
                                        * Sent message successfully
                                    </Typography> :
                                    status === 'ERROR' ?
                                        <Typography
                                            // variant="h7"
                                            component="p"
                                            sx={{
                                                backgroundColor: '#E32636',
                                                color: 'white',
                                                borderRadius: '5px',
                                                padding: '5px',
                                            }}
                                        >
                                            * Missing input
                                        </Typography> :
                                        <Typography
                                            // variant="h7"
                                            component="p"
                                            sx={{
                                                backgroundColor: '#7CB9E8',
                                                color: 'white',
                                                borderRadius: '5px',
                                                padding: '5px',
                                            }}
                                        >
                                            * Please do not leave any fields blank
                                        </Typography>
                            }
                            <TextField
                                error={status === 'ERROR' ? true : false}
                                id="outlined-basic"
                                name="user_name"
                                value={values.user_name}
                                onChange={handleChange}
                                label="Your Name"
                                variant="outlined"
                            />
                            <TextField
                                error={status === 'ERROR' ? true : false}
                                id="outlined-basic"
                                name="user_email"
                                value={values.user_email}
                                onChange={handleChange}
                                label="Your Email"
                                variant="outlined"
                            />
                            <TextField
                                error={status === 'ERROR' ? true : false}
                                id="outlined-multiline-static"
                                label="Message"
                                name="message"
                                value={values.message}
                                onChange={handleChange}
                                multiline
                                rows={6}
                            />
                            <Button
                                type='submit'
                                variant="contained"
                                endIcon={<SendIcon />}
                                sx={{
                                    background: '#000',
                                    transition: 'all .5s ease-in-out',
                                    "&:hover": {
                                        background: 'rgb(63,94,251)',
                                        background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);'
                                    },
                                }}
                            >
                                Send
                            </Button>
                        </form>
                    </motion.div>
                </Grid>
                <Grid item md={5} xs={12}>
                    <motion.div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            height: '100%',
                            justifyContent: 'space-around',
                            alignItems: 'flex-start'
                        }}
                        animate={animationRight}
                    >
                        <Stack
                            direction="column"
                            justifyContent="space-around"
                            alignItems="flex-start"
                            spacing={2}
                            sx={{ height: '100%', width: '100%' }}
                        >
                            <Typography
                                variant="h6"
                                component="p"
                                sx={{ color: 'white' }}
                            >
                                You can contact me via
                            </Typography>
                            <Stack
                                direction="row"
                                // justifyContent="space-around"
                                alignItems="center"
                                spacing={2}
                                color="white"
                            >
                                <div className='icon' style={{ background: '#32de84' }}>
                                    <LocalPhoneIcon />
                                </div>
                                <Typography
                                    variant="h7"
                                    component="p"
                                    sx={{ color: 'white' }}
                                >
                                    0869 773 059
                                </Typography>
                            </Stack>
                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={2}
                                color="white"
                            >
                                <div className='icon' style={{ background: '#7CB9E8' }}>
                                    <EmailIcon />
                                </div>
                                <Typography
                                    variant="h7"
                                    component="p"
                                    sx={{ color: 'white' }}
                                >
                                    truongmainhattan14@gmail.com
                                </Typography>
                            </Stack>
                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={2}
                                color="white"
                                onClick={gotoFacebook}
                            >
                                <div className='icon' style={{ background: '#008FFF' }}>
                                    <FacebookIcon />
                                </div>
                                <Typography
                                    variant="h7"
                                    component="p"
                                    sx={{ color: 'white', cursor: 'pointer' }}
                                >
                                    Visit my facebook account
                                </Typography>
                            </Stack>
                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={2}
                                color="white"
                                onClick={gotoGithub}
                            >
                                <div className='icon' style={{ background: '#FF5436' }}>
                                    <GitHubIcon />
                                </div>
                                <Typography
                                    variant="h7"
                                    component="p"
                                    sx={{ color: 'white', cursor: 'pointer' }}
                                >
                                    Visit my github account
                                </Typography>
                            </Stack>
                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={2}
                                color="white"
                                onClick={gotoGithub}
                            >
                                <div className='icon' style={{ background: '#F1C40F' }}>
                                    <PlaceIcon />
                                </div>
                                <Typography
                                    variant="h7"
                                    component="p"
                                    sx={{ color: 'white' }}
                                >
                                    99 An Duong Vuong, Ward 16, District 8, HCM City
                                </Typography>
                            </Stack>
                        </Stack>
                    </motion.div>
                </Grid>
            </Grid>
        </div >
    );
}

export default Contact;