import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typed from "react-typed";
import { Box, Paper, Stack, Typography, Grid, Button } from '@mui/material';

import cv from '../../assets/imgs/luffy.jpg';

import './DownloadCV.scss';

const Header = () => {
    const Item = styled(Paper)(({ theme }) => ({
        // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        // ...theme.typography.body2,
        textAlign: 'center',
        color: 'black',
        height: '100%',
        fontSize: '4rem',
        fontWeight: '900',
        boxShadow: 'none',
        // border: '1px solid black',
        fontFamily: 'Ailerons'
    }));

    const Download = () => {
        var a = document.createElement("a");
        a.href = cv;
        a.setAttribute("download", "NhatTanCV.jpg");
        a.click();
    }

    return (
        <Box sx={{
            flexGrow: 1,
            height: '100vh'
        }}>
            <div className='blob two'></div>
            <div className='blob three'></div>
            <Grid
                container
                spacing={2}
                sx={{
                    width: '80vw',
                    m: '15vh auto',
                    height: '70vh',
                }}
            >
                <Grid item xs={12} md={6}>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={4}
                        height="100%"
                    >
                        <Item>
                            <Typed
                                strings={["Hi, I'm Tân"]}
                                typeSpeed={150}
                                backSpeed={100}
                                loop
                            />
                        </Item>
                        <Item>
                            <Typography variant="h6" component="div" sx={{ fontFamily: 'Ailerons', fontSize: '2.25rem' }}>
                                Welcome to my website!
                            </Typography>
                            <Typography variant="h6" component="div" sx={{ fontFamily: 'Ailerons', fontSize: '2.25rem' }}>
                                I'm a front-end developer
                            </Typography>
                        </Item>
                        <Item>
                            <Stack
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                spacing={2}
                            >
                                <Button
                                    sx={{
                                        background: '#59C2C0',
                                        transform: 'skewX(-15deg)',
                                        transition: '1s',
                                        boxShadow: '6px 6px 0 black',
                                        '&:hover': {
                                            backgroundColor: '#20B2AA',
                                            transition: '0.5s',
                                            boxShadow: '10px 10px 0 #FBC638'
                                        }
                                    }}
                                    variant="contained"
                                    onClick={Download}
                                >
                                    Download cv (VN)
                                </Button>
                                <Button
                                    sx={{
                                        background: '#59C2C0',
                                        transform: 'skewX(-15deg)',
                                        transition: '1s',
                                        boxShadow: '6px 6px 0 black',
                                        '&:hover': {
                                            backgroundColor: '#20B2AA',
                                            transition: '0.5s',
                                            boxShadow: '10px 10px 0 #FBC638'
                                        }
                                    }}
                                    variant="contained"
                                    onClick={Download}
                                >
                                    Download cv (EN)
                                </Button>
                            </Stack>
                        </Item>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Item>
                        <div className="blob avatar"></div>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Header;