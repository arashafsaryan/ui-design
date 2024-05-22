import { Container, Grid, Typography } from "@mui/material";
import styles from "./Footer.module.css"
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container maxWidth="lg">
                <Grid container className={styles.container}>
                    <Grid item xs={12} mt={5} className={styles.rowOne}>
                        <Typography component="p" variant="p">©2024 Yourcompany</Typography>
                        <Typography component="h5" variant="h6">Landing</Typography>
                        <Link to="/">Purchase now</Link>
                    </Grid>
                    <Grid item xs={12} mt={5} className={styles.rowTwo}>
                        <Typography component="div" variant="div" className={styles.links}>
                            <Link>Home</Link>
                            <Link>About</Link>
                            <Link>Contact</Link>
                        </Typography>
                        <Typography component="div" variant="div" className={styles.socialNetwork}>
                            <FaFacebookF />
                            <FaLinkedinIn />
                            <FaTwitter />
                            <FaYoutube />
                            <FaInstagram />
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;