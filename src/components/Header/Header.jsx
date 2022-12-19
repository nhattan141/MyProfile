import * as React from 'react';
import { Box, Stack, Typography, Grid, Avatar, Button } from '@mui/material';

import { NavLink } from 'react-router-dom';

import logo from '../../assets/imgs/logoBlackPink.png';

import cv from '../../assets/imgs/logoBlackPink.png';

import './Header.scss';

const Header = () => {
    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <Box
            sx={{
                flexGrow: 1,
                position: 'fixed',
                top: 0,
                left: 0,
                boxShadow: 'none',
                width: '100%',
                height: '70px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'rgb(224, 13, 189)',
                zIndex: 100000
            }}
        >
            <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                height="100%"
            >
                <Grid container sx={{ justifyContent: 'flex-start' }}>
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={2}
                        onClick={scrollToTop}
                        sx={{ cursor: 'pointer' }}
                    >
                        <Avatar src={logo} sx={{ ml: 5, }} variant="square"></Avatar>
                        <Typography variant="h6" component="div" sx={{ fontFamily: 'Ailerons', fontSize: '2.25rem' }}>
                            TANPORTFOLIO
                        </Typography>
                    </Stack>
                </Grid>
                <Grid container sx={{ justifyContent: 'flex-end' }}>
                    <Grid item md>
                        <a href='#home' className='link'>Home</a>
                    </Grid>
                    <Grid item md>
                        <a href='#about' className='link'>About me</a>
                    </Grid>
                    <Grid item md>
                        <a href='#projects' className='link'>Projects</a>
                    </Grid>
                    <Grid item md>
                        <a href='#contact' className='link'>Contact</a>
                    </Grid>
                    <Grid item md>
                        <a href={cv} className='link btn' download='NhatTanCV.png'>My CV</a>
                    </Grid>
                </Grid>
            </Stack>

        </Box>
    );
}

export default Header;