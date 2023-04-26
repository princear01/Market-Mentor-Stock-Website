import React, {useState, useEffect} from "react";
import styles from "./Header.module.css";
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import QuizIcon from '@mui/icons-material/Quiz';
import AbcIcon from '@mui/icons-material/Abc';
import PersonIcon from '@mui/icons-material/Person';
import Logo from "../../assets/pics/robinhood.svg";
import {Link} from 'react-router-dom';
import SearchBar from "./SearchBar";
import Image from "../../assets/pics/bg.jpg";

const Header = () => {
    const [width,
        setWidth] = useState(window.innerWidth);
    const [menuOpen,
        setMenuOpen] = useState(false);
    const [isDropdownOpen,
        setIsDropdownOpen] = useState(false);
    const [isLearningCenterOpen,
        setIsLearningCenterOpen] = useState(false);

    const toggleLearningCenter = () => {
        setIsLearningCenterOpen(!isLearningCenterOpen);
    };
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
                    <div classname={styles.companyName}>MARKET MENTOR</div>
                </div>
                <SearchBar/> {isMobile
                    ? (
                        <div className={styles.menuHBContainer}>
                            <MenuIcon className={styles.menuIcon} onClick={handleMenuClick}/>
                        </div>
                    )
                    : (
                        <div className={styles.menuContainer}>
                            <ul className={styles.menu}>
                                <li className={styles.menuItem}>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className={`${styles.menuItem} ${styles.dropdown}`}>
                                    <div>
                                        <Link to="/learningcenter">Learning Center</Link>
                                        <ArrowDropDownIcon className={styles.ArrowDropDownIcon}/>
                                    </div>
                                    <div className={styles["dropdown-content"]}>

                                        <Link to="/learningcenter/esyvocab">Easy          <AbcIcon className={styles.abcIcon1}/></Link>
                                        <Link to="/learningcenter/medvocab">Medium        <AbcIcon className={styles.abcIcon2}/></Link>
                                        <Link to="/learningcenter/hardvocab">Hard         <AbcIcon className={styles.abcIcon3}/></Link>
                                        <Link to="/learningcenter/knowledgequizzes">Quiz 1<QuizIcon className={styles.QuizIcon}/></Link>

                                    </div>
                                </li>
                                <li className={styles.menuItem}>
                                    <Link to="/markets">Markets</Link>
                                </li>
                                <li className={styles.menuItem}>
                                    <Link to="/investmentcalculator">Investment Calculator</Link>
                                </li>
                                <li className={styles.menuItem}>
                                    <Link to="/about">About</Link>
                                </li>
                            </ul>
                        </div>
                    )}

                <Link to="/signin" className={styles.button}>
                    Login
                </Link>

            </div>
        </div>

    );
};

export default Header;