import { Container, Grid, Typography } from "@mui/material";
import styles from "./SectionOne.module.css"
import { AiOutlineIdcard } from "react-icons/ai";
import image from "../assets/sectionOne.png"

const SectionOne = () => {
    return (
        <Container maxWidth="lg">
            <Grid container className={styles.container} spacing={2} mt={10} mb={10}>
                <Grid item xs={12} md={6}>
                    <Typography component="h5" variant="h5" className={styles.titleMain} mb={2}>Light, Fast & Powerful</Typography>
                    <Typography component="p" variant="p" className={styles.textMain} mb={6}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    </Typography>
                    <Typography component="div" variant="div" className={styles.secBottom}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography component="div" variant="div" className={styles.secItem}>
                                    <AiOutlineIdcard />
                                    <Typography component="h6" variant="h6" mb={1}>Title Goes Here</Typography>
                                    <Typography component="p" variant="p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </Typography>
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography component="div" variant="div" className={styles.secItem}>
                                    <AiOutlineIdcard />
                                    <Typography component="h6" variant="h6" mb={1}>Title Goes Here</Typography>
                                    <Typography component="p" variant="p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </Typography>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} className={styles.image}>
                    <img src={image} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default SectionOne;