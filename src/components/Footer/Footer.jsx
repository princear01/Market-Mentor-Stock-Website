import React from "react";
import styles from "./Footer.module.css";
import Logo from "../../assets/pics/robinhood.svg";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={Logo} alt="Stock Logo" className={styles.logo}/>
                    <h4>Ali Stock</h4>

                </div>
                <div className={styles.menu}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/markets">Markets</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.social}>
                    <ul>
                        <li>
                            <a href="/"><FacebookIcon/></a>
                        </li>
                        <li>
                            <a href="/"><InstagramIcon/></a>
                        </li>
                        <li>
                            <a href="/"><TwitterIcon/></a>
                        </li>
                        <li>
                            <a href="/"><LinkedInIcon/></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.copy}>
                &copy; {new Date().getFullYear()}
                -Ali's Stock Learning Platform. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;
