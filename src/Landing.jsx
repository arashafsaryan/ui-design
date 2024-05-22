import React from 'react';
import Nav from './Components/Nav';
import Header from './Components/Header';
import SectionOne from './Components/SectionOne';
import SectionTwo from './Components/SectionTwo';
import SectionThree from './Components/SectionThree';
import Footer from './Components/Footer';

const Landing = () => {
    return (
        <>
            <Nav />
            <Header />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <Footer />
        </>
    );
};

export default Landing;