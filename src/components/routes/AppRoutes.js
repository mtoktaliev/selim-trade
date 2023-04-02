import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '../../utils/Routes';

import HomePage from '../../pages/homePage/HomePage';
import GatesPage from '../../pages/gatesPage/GatesPage';
import NewsPage from '../../pages/newsPage/NewsPage';
import WorksPage from '../../pages/worksPage/WorksPage';
import AdminPage from '../../pages/adminPage/AdminPage';
import LoginPage from '../../pages/loginPage/LoginPage';
import RegisterPage from '../../pages/registerPage/RegisterPage';

class AppRoutes extends Component {
    render() {
        return (
            <Routes>
                <Route path={ROUTES.HOME} element={<HomePage />} />
                <Route path={ROUTES.GATES} element={<GatesPage />} />
                <Route path={ROUTES.NEWSPAGE} element={<NewsPage />} />
                <Route path={ROUTES.WORKS} element={<WorksPage />} />
                <Route path={ROUTES.ADMINPANEL} element={<AdminPage />} />
                <Route path={ROUTES.LOGIN} element={<LoginPage />} />
                <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
            </Routes>
        );
    }
}

export default AppRoutes;