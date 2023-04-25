import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import styles from "./Signin.module.css";

import Logo1 from "../../assets/pics/robinhood.svg";
import Logo2 from "../../assets/pics/robinhood.svg";
import Image from "../../assets/pics/bg.jpg";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import QuizIcon from '@mui/icons-material/Quiz';
import AbcIcon from '@mui/icons-material/Abc';
import SearchBar from "../../components/Header/SearchBar";

function Signin() {
    // State variables
    const [email,
        setEmail] = useState('');
    const [password,
        setPassword] = useState('');
    const [showRegister,
        setShowRegister] = useState(false);
    const [width,
        setWidth] = useState(window.innerWidth);
    const [menuOpen,
        setMenuOpen] = useState(false);
    const [isDropdownOpen,
        setIsDropdownOpen] = useState(false);
    const [isLearningCenterOpen,
        setIsLearningCenterOpen] = useState(false);

    // Event handlers
    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission here
    };
    const toggleForm = () => {
        setShowRegister(!showRegister);
    };
    const toggleLearningCenter = () => {
        setIsLearningCenterOpen(!isLearningCenterOpen);
    };
    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    // Effect hook to listen for window resize events
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    // Check if the screen size is smaller than or equal to 768 pixels
    const isMobile = width <= 768;

    return (

        <div className={`${styles.header} ${styles.sticky}`}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={Image} alt="Login Image"/>
                <div className={styles.container}>

                    <div className={styles.logoContainer}>
                        <img src={Logo1} alt="Stock Logo" className={styles.logo1}/>
                        <span>SLEARN</span>
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

                    <Link to="/sign-in" className={styles.button}>
                        Login
                    </Link>

                </div>
            </div>

            <div className={styles.formContainer}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <img className={styles.logo2} src={Logo2} alt="Logo"/>
                    <h1 className={styles.title}>Log In</h1>

                    <div className={styles.inputContainer}>

                        <EmailIcon className={styles.icon} fontSize="small"/>
                        <input
                            className={styles.input}
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}required/>
                        <label className={styles.label} htmlFor="email">
                            Email
                        </label>
                    </div>

                    <div className={styles.inputContainer}>

                        <LockIcon className={styles.icon} fontSize="small"/>

                        <input
                            className={styles.input}
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required/>
                        <label className={styles.label} htmlFor="password">
                            Password
                        </label>
                    </div>
                    
                    <div class={styles.remember}>
                        <label>
                            <input type="checkbox" className={styles.checkbox}/>
                            Remember Me
                        </label>
                        <a href='#'>Forgot Password?</a>
                    </div>

                    <button className={styles.button1} type="submit">
                        Log In
                    </button>

                    <div class={styles.register}>
                        <p>Don't have an account
                            <a href='#' class='register'>Sign up</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signin;
