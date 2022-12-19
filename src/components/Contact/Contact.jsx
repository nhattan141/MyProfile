import * as React from 'react';

import { Grid, Stack, Typography, Avatar, IconButton } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

import L from 'leaflet';
import {
    MapContainer, TileLayer, Marker, Popup
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import icon from '../../assets/imgs/leaf-green.png';
import iconShadow from '../../assets/imgs/leaf-shadow.png';
import contact from '../../assets/imgs/contactme.png';

import { motion, transform, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

import './Contact.scss';

const Contact = () => {
    const position = [10.713247881437333, 106.61931037902832];
    const customIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [12, -90]
    })

    L.Marker.prototype.options.icon = customIcon;

    const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
    const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

    const { ref, inView } = useInView({
        threshold: 0.2
    });
    const animationLeft = useAnimation();
    const animationRight = useAnimation();

    React.useEffect(() => {
        if (inView) {
            animationLeft.start({
                // x: 0,
                WebkitMaskImage: visibleMask,
                maskImage: visibleMask,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
                },
            })
            animationRight.start({
                transform: 'scale(1)',
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
                }
            })
        } else {
            animationLeft.start({
                // x: '-100vw',
                WebkitMaskImage: hiddenMask, maskImage: hiddenMask
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
                    zIndex: '1000'
                }}
            >
                <Grid item md={8} xs={12} sx={{ height: '80vh' }}>
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
                        <Avatar
                            alt="Remy Sharp"
                            src={contact}
                            variant="square"
                            sx={{
                                height: '100%',
                                width: '100%',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover'
                            }}
                        >
                        </Avatar>
                    </motion.div>
                </Grid>
                <Grid item md={4} xs={12}>
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
                                <LocalPhoneIcon />
                                <Typography
                                    variant="h6"
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
                                <EmailIcon />
                                <Typography
                                    variant="h6"
                                    component="p"
                                    sx={{ color: 'white' }}
                                >
                                    trngtn44@gmail.com
                                </Typography>
                            </Stack>
                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={2}
                                color="white"
                                onClick={gotoFacebook}
                            >
                                <FacebookIcon />
                                <Typography
                                    variant="h6"
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
                                <GitHubIcon />
                                <Typography
                                    variant="h6"
                                    component="p"
                                    sx={{ color: 'white', cursor: 'pointer' }}
                                >
                                    Visit my github account
                                </Typography>
                            </Stack>
                            <div className='map'>
                                <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                                    />
                                    <Marker position={position}>
                                        <Popup>
                                            99 An Dương Vương <br />
                                            Ward 16, District 8, Ho Chi Minh City
                                        </Popup>
                                    </Marker>
                                </MapContainer>,
                            </div>
                        </Stack>
                    </motion.div>
                </Grid>
            </Grid>
        </div >
    );
}

export default Contact;