import { Routes, Route } from 'react-router-dom';

import SideNav from "./adminComponents/sideNav/SideNav";
import styles from './AdminPage.module.css'

import AdminNews from '../adminPage/adminNews/AdminNews'
import AdminReviews from './adminReviews/AdminReviews';
import AdminOrders from './adminOrders/AdminOrders';
import AdminGates from './adminGates/AdminGates';

const AdminPage = () => {
    return (
        <section className={styles.section}>
            <SideNav />
            <div className={styles.container}>
            <Routes>
                <Route  path='news' element={<AdminNews />} />
                <Route  path='orders' element={<AdminOrders />} />
                <Route  path='reviews' element={<AdminReviews />} />
                <Route  path='gates' element={<AdminGates />} />
            </Routes>
            </div>
        </section>
    );
};

export default AdminPage;