import React, {useState, useEffect} from "react";
import {Link, Navigate, useNavigate} from 'react-router-dom';
import styles from "./Signup.module.css";
import {getAuth, createUserWithEmailAndPassword, firstName, lastName} from 'firebase/auth';
import app from '../../firebase.config'
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
import PersonIcon from '@mui/icons-material/Person';

function Signup() {

    const auth = getAuth(app);

    // State variables
    const [firstName,
        setFirstName] = useState('');
    const [lastName,
        setLastName] = useState('');
    const [email, setEmail] = useState("")
    const [ password, setPassword] = useState("")
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
    const navigate = useNavigate();

    // Event handlers
    const signUp = () => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentail) => {
                //signed in 
                const user = userCredentail.user;
                console.log(user);
                alert("created")
                // ...
            })
            .catch((error)=>{
            const errorCode =error.code;
            const errorMessage =error.message
    }); 
    }
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
                        <span>MARKET MENTOR</span>
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

                    <Link to="/signin" className={styles.button}>
                        Login
                    </Link>

                </div>
            </div>

            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <img className={styles.logo2} src={Logo2} alt="Logo"/>
                    <h1 className={styles.title}>Register</h1>

                    {/* <div className={styles.inputContainer}>
                        <PersonIcon className={styles.icon} fontSize="small"/>
                        <input
                            className={styles.input}
                            type="first"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required/>
                        <label className={styles.label} htmlFor="firstName">
                            First Name
                        </label>

                    </div>

                    <div className={styles.inputContainer}>
                        <PersonIcon className={styles.icon} fontSize="small"/>
                        <input className={styles.input}
                            type="last"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required/>
                        <label className={styles.label} htmlFor="lastName">
                            Last Name
                        </label>
                    </div> */}

                    <div className={styles.inputContainer}>
                        <EmailIcon className={styles.icon} fontSize="small"/>
                        <input type ={"email"} placeholder='Enter email' onChange={(e) => setEmail(e.target.value)}required/>

                        {/* <input className={styles.input}
                            type="email"
                            placeholder="email"
                            onChange={(e) => setEmail(e.target.value)}required/> */}
                        {/* <label className={styles.label} htmlFor="email">
                            Email
                        </label> */}
                    </div>

                    <div className={styles.inputContainer}>
                        <LockIcon className={styles.icon} fontSize="small"/>
                        <input type ={"password"} placeholder='Enter password' onChange={(e) => setPassword(e.target.value)}required/>

                        {/* <input className={styles.input}
                            placeholder="Password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required/> */}

                        {/* <label className={styles.label} htmlFor="password">
                            Password
                        </label> */}
                    </div>

                    <div class={styles.remember}>
                        <label>
                            <input type="checkbox" className={styles.checkbox}/>
                            Remember Me
                        </label>
                    </div>

                    <button onClick={signUp}> create </button>


                    <div class={styles.register}>
                        <p>Already have an account?
                            <Link to='/signin'>Sign In</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;