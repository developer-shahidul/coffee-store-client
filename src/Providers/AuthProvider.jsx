import React, { Children, createContext, useState } from "react";
import auth from "../firebase/firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, passwoard) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, passwoard);
  };

  const userInfo = { user, loading, createUser };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
