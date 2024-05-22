import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Nav.module.css"
import NavHumber from './NavHumber';

const Nav = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={12} className={styles.nav}>
                        <Typography component="div" variant='div' className={styles.navItem}>
                            <Typography component="div" variant='div' className={styles.navLink}>
                                <Link to="/">Home</Link>
                                <Link to="/">About</Link>
                                <Link to="/">Contact</Link>
                            </Typography>
                            <Typography component="h3" variant='h3'>Landing</Typography>
                            <Link to="/" className={styles.navBtn}>Buy Now</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <NavHumber />
        </>
    );
};

export default Nav;