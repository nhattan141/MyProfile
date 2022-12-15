import * as React from 'react';
import { Box, Stack, Typography, Grid, Avatar } from '@mui/material';

import { NavLink } from 'react-router-dom';

import logo from '../../assets/imgs/Tlogo.png';

import './Header.scss';

const Header = () => {

    return (
        <Box
            sx={{
                flexGrow: 1,
                position: 'absolute',
                top: 0,
                left: 0,
                boxShadow: 'none',
                width: '100%',
                height: '50px',
                backgroundColor: 'transparent',
                zIndex: 100000
            }}
        >
            <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                height="100%"
            >
                <Grid container>
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={2}
                    >
                        <Avatar src={logo} sx={{ ml: 5, }} variant="square"></Avatar>
                        <Typography variant="h6" component="div" sx={{ fontFamily: 'Ailerons', fontSize: '2.25rem' }}>
                            TANPORTFOLIO
                        </Typography>
                    </Stack>
                </Grid>
                <Grid container>
                    <Grid item md={2}>
                        <NavLink className="link_active link">
                            Home
                        </NavLink>
                    </Grid>
                    <Grid item md={2}>
                        <NavLink className="link">
                            About Me
                        </NavLink>
                    </Grid>
                    <Grid item md={2}>
                        <NavLink className="link">
                            Projects
                        </NavLink>
                    </Grid>
                    <Grid item md={2}>
                        <NavLink className="link">
                            Contact
                        </NavLink>
                    </Grid>
                </Grid>
            </Stack>

        </Box>
    );
}

export default Header;