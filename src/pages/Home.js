import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import FeaturedRooms from '../components/FeaturedRooms';
import VideoContainer from '../components/VideoContainer';


const Home = () => {
    return (
        <>
        <Hero>
        <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $200">
        <Link to="/rooms" className="btn-primary">Our Rooms</Link>
        </Banner>
        </Hero>
        <VideoContainer />
        <FeaturedRooms />
        </>
    )
}

export default Home;
