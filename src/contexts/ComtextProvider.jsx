import React, { useEffect, useState } from "react";
import { AuthCntext } from "./AuthComtext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const ComtextProvider = ({ children }) => {
  const [loding, setLoding] = useState(false);
  const [user, setUser] = useState(null);

  const userCreat = (email, password) => {
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
    userCreat,
    signUpUser,
    updetUserInfo,
    loding,
    user,
    userLogOut,
  };
  return <AuthCntext.Provider value={userInfo}>{children}</AuthCntext.Provider>;
};

export default ComtextProvider;
