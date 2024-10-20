import React from 'react';
import {Link} from "react-router-dom";
import styles from './HeaderComponent.module.css';

const HeaderComponent = () => {
    return (
        <div>
            <ul className={styles.header}>
                <li><Link to='/'> Main </Link></li>
                <li><Link to='/users'>Users</Link></li>
                <li><Link to='/posts'>Posts</Link></li>
                <li><Link to='/comments'>Comments</Link></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;