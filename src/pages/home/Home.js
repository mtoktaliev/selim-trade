import React, { Component } from 'react';
import Aboutus from '../../components/aboutus/Aboutus';
import Advantages from '../../components/advantages/Advantages';
import Header from '../../components/header/Header';
import News from '../../components/news/News';
import Reviews from '../../components/reviews/Reviews';
import Weoffer from '../../components/weoffer/Weoffer';

class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <Aboutus />
                <Weoffer />
                <Advantages />
                <News />
                <Reviews />
            </>
        );
    }
}

export default Home;