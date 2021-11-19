import { initializeApp } from "firebase/app";
import firebaseConfig from './Firebase.confiq';

const initialize = () => {
    initializeApp(firebaseConfig);
}

export default initialize;