import * as React from 'react';
import {
    useTheme, Stack,
    Typography, Grid,
    Avatar, AppBar,
    Toolbar, Tabs,
    Tab, useMediaQuery,
    Button, IconButton
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import logo from '../../assets/imgs/logoBlackPink.png';
import cv from '../../assets/imgs/logoBlackPink.png';

import './Header.scss';

import DrawerComp from './DrawerComp';

const Header = () => {
    const [value, setValue] = React.useState(0);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    const [open, setOpen] = React.useState(false);

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }

    const handleClose = () => {
        setOpen(false);
    };

    const scrollToPage = (id) => {
        const link = document.createElement('a');
        link.href = id;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const downloadCv = () => {
        var a = document.createElement("a");
        a.href = cv;
        a.setAttribute("download", "NhatTanCV.jpg");
        a.click();
    }

    return (
        <AppBar
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
                zIndex: 20
            }}
        >
            <Toolbar
                direction="row"
                alignitems="center"
                spacing={2}
                height="100%"
            >
                {
                    isMatch ?
                        (
                            <Grid container spacing={2} sx={{ placeItems: 'center' }}>
                                <Grid item xs={6}>
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
                                <Grid item xs={6}>
                                    <Stack
                                        direction="row"
                                        justifyContent="flex-end"
                                        alignItems="center"
                                        spacing={2}
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        <DrawerComp open={open} handleClose={handleClose} />
                                        <IconButton sx={{ color: 'rgb(224, 13, 189)' }} onClick={() => setOpen(!open)}>
                                            {open ? <CloseIcon /> : <MenuIcon />}
                                        </IconButton>
                                    </Stack>
                                </Grid>
                            </Grid>
                        ) :
                        (
                            <Grid container sx={{ placeItems: 'center' }}>
                                <Grid item md={2} >
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
                                <Grid item md={2} />
                                <Grid item md={6}>
                                    <Tabs
                                        indicatorColor='secondary'
                                        textColor='inherit'
                                        value={value}
                                        onChange={(e, val) => setValue(val)}
                                    >
                                        <Tab
                                            label="Home"
                                            sx={{ fontSize: '16px', fontWeight: 'bold' }}
                                            onClick={() => scrollToPage('#home')}
                                        />
                                        <Tab
                                            label="About me"
                                            sx={{ fontSize: '16px', fontWeight: 'bold' }}
                                            onClick={() => scrollToPage('#about')}
                                        />
                                        <Tab
                                            label="Projects"
                                            sx={{ fontSize: '16px', fontWeight: 'bold' }}
                                            onClick={() => scrollToPage('#projects')}
                                        />
                                        <Tab
                                            label="Contact"
                                            sx={{ fontSize: '16px', fontWeight: 'bold' }}
                                            onClick={() => scrollToPage('#contact')}
                                        />
                                    </Tabs>
                                </Grid>
                                <Grid item md={2}>
                                    <Button
                                        variant="contained"
                                        endIcon={<DownloadIcon />}
                                        sx={{
                                            color: '#fff',
                                            borderRadius: '5px',
                                            backgroundColor: 'rgb(224, 13, 189)',
                                            transition: 'all .5s ease-in-out',
                                            fontSize: '16px',
                                            "&:hover": {
                                                backgroundColor: 'black'
                                            },
                                        }}
                                        onClick={downloadCv}
                                    >
                                        MY CV
                                    </Button>
                                    {/* <a href={cv} className='link btn' download='NhatTanCV.png'>My CV</a> */}
                                </Grid>
                            </Grid>
                        )
                }
            </Toolbar>
        </AppBar>
    );
}

export default Header;