import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "./AuthComtext";


const providergoogle = new GoogleAuthProvider();



const ComtextProvider = ({ children }) => {
  const [loding, setLoding] = useState(false);
  const [user, setUser] = useState(null);

  const rigersterNow = (email, password) => {
    setLoding(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updetUserInfo = (userData) => {
    setLoding(false);
    return updateProfile(auth.currentUser, userData);
  };

  const signUpUser = (email, password) => {
    setLoding(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userLogOut = () => {
    setLoding(false);
    return signOut(auth);
  };
    const googleLogin = () => {
    return signInWithPopup(auth, providergoogle);
  };


  useEffect(() => {
    const unsubccripet = onAuthStateChanged(auth, (currentUser) => {
      setLoding(true);
      setUser(currentUser);
      setLoding(false);
    });

    return () => {
      unsubccripet();
    };
  }, []);

  const userInfo = {
    rigersterNow,
    signUpUser,
    updetUserInfo,
    loding,
    user,
    userLogOut,
    googleLogin
  };
  return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

export default ComtextProvider;
