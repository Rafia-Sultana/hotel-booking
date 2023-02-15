import React from 'react';
import './Home.css'
import Featured from '../../Componenets/Featured/Featured';
import Header from '../../Componenets/Header/Header';
import Navbar from '../../Componenets/Navbar/Navbar';
import PropertyList from '../../Componenets/PropertyList/PropertyList';
import MailList from '../../Componenets/MailList/MailList';
import FeaturedProperties from '../../Componenets/FeaturedProperties/FeaturedProperties';
import Footer from '../../Componenets/Footer/Footer';


const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browse By Property Type</h1>
                <PropertyList />
                <h1 className="homeTitle"> Home Guests Love </h1>
                <FeaturedProperties />
                <MailList/>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;