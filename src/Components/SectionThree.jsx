import { Container, Grid, Typography } from "@mui/material";
import styles from "./SectionThree.module.css"
import { Link } from "react-router-dom";

const SectionThree = () => {
    return (
        <div className={styles.wrapper}>
            <Container maxWidth="lg">
                <Grid container mt={10} className={styles.container}>
                    <Grid item xs={12} className={styles.items} my={20}>
                        <Typography component="h6" variant="h6" mb={1}>A Price To Suit Everyone</Typography>
                        <Typography component="p" variant="p" className={styles.text} mb={3}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </Typography>
                        <Typography component="h5" variant="h5" mb={1}>$40</Typography>
                        <Typography component="p" variant="p" mb={5}>UI Design Kit</Typography>
                        <Typography component="p" variant="p" mb={2}>See, One price. Simple.</Typography>
                        <Link to="/" className={styles.link}>Purchase Now</Link>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default SectionThree;