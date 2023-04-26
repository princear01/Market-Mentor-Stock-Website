// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqOEFvv8XvQSsui3IsG0blJuZR_HY1XXA",
  authDomain: "market-mentor-fbd53.firebaseapp.com",
  projectId: "market-mentor-fbd53",
  storageBucket: "market-mentor-fbd53.appspot.com",
  messagingSenderId: "926542588574",
  appId: "1:926542588574:web:7a016e55dd718af400298f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app