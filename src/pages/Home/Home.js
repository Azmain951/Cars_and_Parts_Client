import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Products from './Products';
import Reviews from './Reviews';
import Services from './Services';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Summary></Summary>
            <Reviews></Reviews>
            <Services></Services>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;