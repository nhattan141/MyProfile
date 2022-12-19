import * as React from 'react';

import { Grid, Stack, Typography, Button } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import L from 'leaflet';
import {
    MapContainer, TileLayer, Marker, Popup
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import icon from '../../assets/imgs/leaf-green.png';
import iconShadow from '../../assets/imgs/leaf-shadow.png';

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

    const interval = () => {
        setInterval(() => {
            let aboutcontainer = document.getElementById("contact");
            let vh = window.innerHeight;

            window.addEventListener('scroll', () => {
                let value = Math.ceil(window.scrollY);
                let position = Math.min(Math.abs((1332 - value)), 90);

                console.log(value);
                console.log(position);

                aboutcontainer.style.setProperty("--positionMidContact", `${position}%`);
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
            <Grid
                container
                spacing={2}
                sx={{
                    flexGrow: 1,
                    width: '80vw',
                    minHeight: '80vh',
                    margin: '5vh 5vw',
                }}
            >
                <Grid item md={8} xs={12} sx={{ minHeight: '80vh' }}>
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
                </Grid>
                <Grid item md={4} xs={12} sx={{ border: '1px solid black' }}>
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
            </Grid>
        </div >
    );
}

export default Contact;