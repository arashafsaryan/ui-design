import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Container, Grid, Typography } from '@mui/material';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import styles from "./NavHumber.module.css"

const NavHumber = () => {
    const itemNav = ["Home", "About", "Contact"]
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    return (
        <Container maxWidth="lg">
            <Grid container className={styles.container}>
                <Grid item xs={12} className={styles.burgerMenu}>
                    <Typography component="h5" variant='h5'>Landing</Typography>
                    <GiHamburgerMenu className={styles.hamberIcon} onClick={toggleDrawer(true)} />
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        <Typography component="div" variant='div' className={styles.navLink}>
                            <Typography component="h5" variant='h5' mb={5}>Landing</Typography>
                            {itemNav.map(item => <ul key={item}>
                                <li>
                                    <Link to={`/${item}`}>{item}</Link>
                                </li>
                            </ul>)}
                        </Typography>
                    </Drawer>
                </Grid>
            </Grid>
        </Container>
    );
}

export default NavHumber;