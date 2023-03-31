import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '../../utils/Routes';

import Home from '../../pages/home/Home';
import GatesPage from '../../pages/gatesPage/GatesPage';
import NewsPage from '../../pages/newsPage/NewsPage';
import Works from '../../pages/works/Works';
import AdminPanel from '../../pages/adminPanel/AdminPanel';

class AppRoutes extends Component {
    render() {
        return (
            <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.GATES} element={<GatesPage />} />
                <Route path={ROUTES.NEWSPAGE} element={<NewsPage />} />
                <Route path={ROUTES.WORKS} element={<Works />} />
                <Route path={ROUTES.ADMINPANEL} element={<AdminPanel />} />
            </Routes>
        );
    }
}

export default AppRoutes;