import React from "react";
import {useLocation} from "react-router-dom";
import Header from "../Header/Header"
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";

const Layout = ({children}) => {
    const location = useLocation();
    const hideHeader = location.pathname === "/";

    return (
        <div className={styles.layout}>
            {!hideHeader && <Header/>}
            <div className={styles.content}>{children}</div>
            <Footer/>

        </div>
    );
};

export default Layout;
