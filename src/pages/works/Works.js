import React, { Component } from 'react';

import Aboutus from '../../components/aboutus/Aboutus';
import Reviews from '../../components/reviews/Reviews';
import Weoffer from '../../components/weoffer/Weoffer';

class Works extends Component {
    render() {
        return (
            <div>
                <Weoffer />
                <Aboutus />
                <Reviews />
            </div>
        );
    }
}

export default Works;