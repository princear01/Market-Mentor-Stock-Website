import {useState, React} from 'react';
import Header from "../../../components/Header/Header"
import Subheader from "../../../components/Subheader/Subheader"
import data from '../../../data/data'
import ExchangeList from "../../../components/Subheader/ExchangeList"
import Body from "../../../components/Body/Body.jsx";
import Footer from '../../../components/Footer/Footer';
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import app from '../../../firebase.config'
const Home = () => {

const auth = getAuth(app);

const [email, setEmail] = useState("")
const [ password, setPassword] = useState("")

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
    return (
        <div>
            <Header/>
            <Subheader>
                <ExchangeList exchanges={data.exchanges}/>
            </Subheader>
            <div classname = 'main'>
            <div className='Home'>
            <input type ={"email"} placeholder='Enter email' onChange={(e) => setEmail(e.target.value)}required/>
            <input type ={"password"} placeholder='Enter password' onChange={(e) => setPassword(e.target.value)}required/>
            <button onClick={signUp}> create </button>
            <button> sign in</button>
        </div>


            </div>
            <Body/>
            <Footer/>
        </div>
    );
};

export default Home;
