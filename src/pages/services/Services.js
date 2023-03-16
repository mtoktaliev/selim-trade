import React, { Component } from 'react';

import Advantages from '../../components/advantages/Advantages';
import News from '../../components/news/News';
import Reviews from '../../components/reviews/Reviews';

class Services extends Component {
    render() {
        return (
            <div>
                <Advantages />
                <News />
                <Reviews />
            </div>
        );
    }
}

export default Services;