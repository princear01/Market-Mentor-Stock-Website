import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../../assets/pics/robinhood.svg";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from '/Users/alirana/senior-project/src/pages/About/About.jsx';
// import About from '/Users/alirana/senior-project/src/pages/Home/Home/home.jsx';
// import LearningCenter from '/Users/alirana/senior-project/src/pages/learningcenter/Learningcenter.jsx'
// import Markets from '/Users/alirana/senior-project/src/pages/Markets/Markets.jsx'

const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [menuOpen, setMenuOpen] = useState(false);


    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    });
  
    const isMobile = width <= 768; // Set breakpoint at 768px

    const handleMenuClick = () => {
      setMenuOpen(!menuOpen);
    };

return (
  <div className={`${styles.header} ${styles.sticky}`}>
      <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="Stock Logo" className={styles.logo} />
        <span>SLEARN </span>
      </div>
  {isMobile ? (
            <div className={styles.menuHBContainer}>
              <MenuIcon className={styles.menuIcon} onClick={handleMenuClick}/>
            </div>
          ) : (
            // Menu for desktop screens
            <div className={styles.menuContainer}>
              <ul className={styles.menu}>
                <li className={styles.menuItem}><Link to="/">Home</Link></li>
                <li className={styles.menuItem}><Link to="/learningcenter">Learning Center</Link></li>
                <li className={styles.menuItem}><Link to="/markets">Markets</Link></li>
                <li className={styles.menuItem}><Link to="/investmentcalculator">Investment Calculator</Link></li>
                <li className={styles.menuItem}><Link to="/about">About</Link></li>
              </ul>
            </div>
          )}
			
        <div className={styles.searchContainer}>
          <input type="text" />
          <div className={styles.SearchIcon}>
          <SearchIcon />

          </div>
        </div>

        <div className={styles.userContainer}>
          <div className={styles.user}>A</div>
          <span>Ali</span>

        </div>
      </div>
    </div>
  );
};

export default Header;

	/* menu header */
/* <div className={styles.menuContainer}>
		<ul className={styles.menu}>
		<li className={styles.menuItem}>
			<Link to="/">Home</Link>
            	</li>
			<li className={styles.menuItem}>
              <Link to="/bout">About</Link>
            	</li>
            <li className={styles.menuItem}>
              <Link to="/learningcenter">Learning Center</Link>
            	</li>
          </ul>
        </div> */