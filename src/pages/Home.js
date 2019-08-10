import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import FeaturedRooms from '../components/FeaturedRooms';


const Home = () => {
    return (
        <>
        <Hero>
        <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $200">
        <Link to="/rooms" className="btn-primary">Our Rooms</Link>
        </Banner>
        </Hero>
        <FeaturedRooms />

        </>
    )
}

export default Home;
