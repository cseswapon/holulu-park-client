import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword,signOut} from "firebase/auth";
import initializeFirebase from "../firebase/firebase.init";
initializeFirebase();
const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setisLoading] = useState(true);
    // google singIn
    const googleSingin = () => {
        return signInWithPopup(auth, googleProvider)
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
        return signInWithEmailAndPassword(auth, email, password)
    }
    // observe with user
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setError('')
            }
            setisLoading(false);
        });
    },[isLoading])
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
        logout,
        isLoading
    }
}
export default useFirebase;