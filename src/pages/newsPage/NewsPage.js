import React, { Component } from 'react';

import Aboutus from '../../components/aboutus/Aboutus';
import News from '../../components/news/News';

class NewsPage extends Component {
    render() {
        return (
            <div>
                <Aboutus />
                <News />
            </div>
        );
    }
}

export default NewsPage;