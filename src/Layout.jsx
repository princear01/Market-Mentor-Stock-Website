import React from "react";
import { useLocation } from "react-router-dom";
import Header from "/Users/alirana/senior-project/src/components/Header/Header.jsx"
import Subheader from "/Users/alirana/senior-project/src/components/Subheader/Subheader.js"
import Body from "/Users/alirana/senior-project/src/components/Body/Body.jsx";
import Footer from "./components/Footer/Footer";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeader = location.pathname === "/";

  return (
    <div className={styles.layout}>
      {!hideHeader && <Header />}
      <div className={styles.content}>{children}</div>
      <Footer />

    </div>
  );
};

export default Layout;
