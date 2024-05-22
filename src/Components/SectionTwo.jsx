import { Container, Grid, Typography } from '@mui/material';
import sections from '../constants/constants';
import styles from "./SectionTwo.module.css"
import { Link } from 'react-router-dom';

const SectionTwo = () => {
    return (
        <Container maxWidth="lg">
            {sections.map(item => (
                <Grid container key={item.id} className={styles.container} mt={10} spacing={2}>
                    <Grid item xs={12} md={6} className={styles.info}>
                        <Typography component="h5" variant='h5' mb={2}>{item.title}</Typography>
                        <Typography component="p" variant='p' mb={5}>{item.text}</Typography>
                        {item.link ? <Link to="/" className={styles.link}>{item.link}</Link> : null}

                    </Grid>
                    <Grid item xs={12} md={6} className={styles.image}>
                        <img src={item.image} alt="imageSection" />
                    </Grid>
                </Grid>
            ))}
        </Container>
    );
}

export default SectionTwo;