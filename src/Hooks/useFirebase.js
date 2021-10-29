import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword,signOut} from "firebase/auth";
import initializeFirebase from "../firebase/firebase.init";
const useFirebase = () => {
    initializeFirebase();
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState('');
    const [error, setError] = useState('');
    // google singIn
    const googleSingin = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            console.log(result.user);
            setUser(result.user)
        }).catch((error) => {
            console.log(error.message)
            setError(error.message)
        });
    }
    // email and password authentication
    const loginfromhandel = (name, email, pass) => {
        createUserWithEmailAndPassword(auth, email, pass)
        .then((result) => {
            setUser(result.user)
            setUsername(name);
        })
        .catch((error) => {
            setError(error.message);
        });
    }
    // setUser name
    const setUsername = (names) => {
        updateProfile(auth.currentUser, {
            displayName:names
        }).then(() => { }).catch((error) => {
            console.log(error.message);
            setError(error.message)
        })
    }
    // login email password
    const singin = (email,password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user)
                setUser(result.user)
            }).catch((error) => {
                console.log(error.message);
                setError(error.message);
            })
    }
    // observe with user
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setError('')
            }
        });
    },[])
    // logout
    const logout = () => {
        signOut(auth).then(() => {
            setUser('')
        }).catch((error) => {
            setError(error.message)
        });
    }
    return {
        user,
        error,
        googleSingin,
        loginfromhandel,
        singin,
        logout
    }
}
export default useFirebase;