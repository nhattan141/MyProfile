import * as React from 'react';
import { Grid } from '@mui/material';
import cv from '../../assets/imgs/logoBlackPink.png';

import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const DrawerComp = ({ open, handleClose }) => {
    const { ref, inView } = useInView({
        threshold: 0.2
    });
    const animation1 = useAnimation();
    const animation2 = useAnimation();

    React.useEffect(() => {
        if (open == true) {
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
    }, [open])

    return (
        <div ref={ref} className="DrawerContainer">
            <Grid
                container
                spacing={2}
                sx={{
                    display: open ? 'flex' : 'none',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    minHeight: '100vh',
                    width: '100vw',
                    margin: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding: '0',
                    gap: '60px',

                }}
            >
                <motion.div animate={animation1}>
                    <a href='#home' onClick={() => handleClose()} style={{ ['--clr']: "#1e9bff" }}>
                        <span>home</span><i></i>
                    </a>
                </motion.div>
                <motion.div animate={animation2}>
                    <a href='#about' onClick={() => handleClose()} style={{ ['--clr']: "#ff1867" }}>
                        <span>about me</span><i></i>
                    </a>
                </motion.div>
                <motion.div animate={animation1}>
                    <a href='#projects' onClick={() => handleClose()} style={{ ['--clr']: "#6eff3e" }}>
                        <span>projects</span><i></i>
                    </a>
                </motion.div>
                <motion.div animate={animation2}>
                    <a href='#contact' onClick={() => handleClose()} style={{ ['--clr']: "#F7DC6F" }}>
                        <span>contact</span><i></i>
                    </a>
                </motion.div>
                <motion.div animate={animation1}>
                    <a href={cv} download='NhatTanCV.png' style={{ ['--clr']: "#ECF0F1 " }}>
                        <span>my cv</span><i></i>
                    </a>
                </motion.div>
            </Grid>
        </div>
    )
}

export default DrawerComp;