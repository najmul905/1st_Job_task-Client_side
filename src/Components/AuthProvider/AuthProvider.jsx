import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase";

export const AuthContext=createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
   
    const [user,setUser]=useState(null)
  const [loading, setLoading]=useState(true)
  const GoogleProvider = new GoogleAuthProvider();

  

// create user

const createUser=(email,password)=>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth,email,password)
}

// google sing in

const GoogleLogIn=()=>{
  setLoading(true)
  return signInWithPopup(auth,GoogleProvider)
}

// User Login
const logIn=(email,password)=>{
  setLoading(true)
 return signInWithEmailAndPassword(auth,email,password)
}
// logOut
const logOut=()=>{
setLoading(true)
return signOut(auth)
}
// update profile

const updateUserProfile=(name,image)=>{
  return updateProfile(auth.currentUser,{
    displayName:name,photoURL:image
  })
}


  useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser)
      console.log('current user',currentUser)
      setLoading(false)
    })
    return()=>{
      return unSubscribe
    }
  },[])

    const information={user,loading,logIn,logOut,createUser,updateUserProfile,GoogleLogIn}
    return (
        <div>
        <AuthContext.Provider value={information}>
{children}
        </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;