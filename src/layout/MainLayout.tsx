import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../component/header/HeaderComponent";

const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;