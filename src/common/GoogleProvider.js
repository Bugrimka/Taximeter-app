import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA0x4XkoR3T-KdTLqdkIahIaoSKv0l19zo",
    authDomain: "taximeter-app-d1man.firebaseapp.com",
    projectId: "taximeter-app-d1man",
    storageBucket: "taximeter-app-d1man.appspot.com",
    messagingSenderId: "125867327405",
    appId: "1:125867327405:web:ca0e53da19204810162b24"
};

export const GoogleProvider = (props) => {
    const {children} = props
    initializeApp(firebaseConfig)
    // const GoogleFirebase = initializeApp(firebaseConfig);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const db = getFirestore()

    return <>
        {children({provider, auth, db})}
    </>
}
