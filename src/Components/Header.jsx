import { Avatar, Button, Container, Grid, Typography } from "@mui/material";
import styles from "./Header.module.css"
import headImg from "../assets/header.png"

const Header = () => {
    return (
        <Container maxWidth="lg">
            <Grid container className={styles.container} spacing={2} mt={5}>
                <Grid item xs={12} md={6}  className={styles.info}>
                    <Typography component="h5" variant="h4" mb={3}>Introduce Your Product Quickly & Effectively</Typography>
                    <Typography component="p" variant="p" mb={5}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    </Typography>
                    <Button variant="contained" className={styles.btnOne}>Purchase UI Kit</Button>
                    <Button variant="outlined" className={styles.btnTwo}>Learn More</Button>
                </Grid>
                <Grid item xs={12} md={6}  className={styles.image}>
                    <img src={headImg} alt="headerImage" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Header;