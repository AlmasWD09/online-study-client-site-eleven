import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({children}) => {
const[user,setUser] = useState(null)
const[loading,setLoading] = useState(true)

  // Google Login
  const googleLogin = () =>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}
// Github Login
const githubLogin = () =>{
    setLoading(true)
    return signInWithPopup(auth,githubProvider)
}

// Sign in 
const creatUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

// Sign Out
const logIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

// LogOut
const logOut =()=>{
    setLoading(true)
    return signOut(auth)
}



// obserber
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
    })
    return () =>{
        unSubscribe();
    }
},[])

const authInfo = {
   user,
   creatUser,
   logIn,
   logOut,
   loading,
   googleLogin,
   githubLogin,
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
// props-vaidation
AuthProvider.propTypes = {
    children: PropTypes.node,
  };
export default AuthProvider;