import React, { useState, useContext, createContext, useEffect } from "react";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";
import * as firebase from "firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserContext = createContext();
const Usercontextprovider = ({ children }) => {
  const [isloggedin, setIsloggedin] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();
  const [normalnumber, setNormalnumber] = useState();
  const [loading, setLoading] = useState(false);

  const [role, setRole] = useState();

  useEffect(() => {
    fetch("https://managedairy.herokuapp.com/", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ phone: normalnumber }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("it's here");
        setRole(data);
      })
      .catch((err) => console.log(err));
  }, [normalnumber]);

  const exposed = {
    isloggedin,
    loading,
    phoneNumber,
    setPhoneNumber,
    setIsloggedin,
    role,
    setNormalnumber,
    normalnumber,
  };
  return (
    <UserContext.Provider value={exposed}>{children}</UserContext.Provider>
  );
};

export default Usercontextprovider;
