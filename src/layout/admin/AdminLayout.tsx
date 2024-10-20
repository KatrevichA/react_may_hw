import React from 'react';
import {Link, Outlet} from "react-router-dom";
import styles from './AdminLayout.module.css'

const AdminLayout = () => {
    return (
        <div className={styles.menu}>
            <span><Link to={'/admin'}>Main</Link></span>
            <span><Link to={'/admin'}>Rules</Link></span>
            <span><Link to={'/admin'}>Documents</Link></span>
            <span><Link to={'/'}>Page Json</Link></span>
            <Outlet></Outlet>
        </div>
    );
};

export default AdminLayout;