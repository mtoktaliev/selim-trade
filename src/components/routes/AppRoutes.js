import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '../../utils/Routes';

import Home from '../../pages/home/Home';
import Services from '../../pages/services/Services';
import NewsPage from '../../pages/newsPage/NewsPage';
import Works from '../../pages/works/Works';

class AppRoutes extends Component {
    render() {
        return (
            <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.SERVICES} element={<Services />} />
                <Route path={ROUTES.NEWSPAGE} element={<NewsPage />} />
                <Route path={ROUTES.WORKS} element={<Works />} />
            </Routes>
        );
    }
}

export default AppRoutes;