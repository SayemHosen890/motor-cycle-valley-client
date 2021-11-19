import { useEffect, useState } from "react";
import initialize from "../Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


//initialize firebase
initialize();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const auth = getAuth();

    const registerUser = (email, password, name) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setError('');
                // const newUser={email,displayName:name}
                // setUser(newUser)
                // history.replace('/');
                // ...
            })
            .catch((error) => {
                setError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));
    }

    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        fetch(`https://afternoon-beyond-26035.herokuapp.com/client/isAdmin/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin);
            })
    }, [user.email])

    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination)
                // Signed in 
                const user = userCredential.user;
                setError('');
                // ...
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
        ;
    }

    //observed user present
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // ...
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        error,
        admin,
        registerUser,
        loginUser,
        logOut,
    }
}

export default useFirebase;