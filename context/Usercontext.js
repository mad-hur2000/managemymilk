import React, { useState, useContext, createContext } from "react";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC9-GFs_NpdZMMb_LRB19_ur9uWHo658ns",
  authDomain: "react-native-52a33.firebaseapp.com",
  projectId: "react-native-52a33",
  storageBucket: "react-native-52a33.appspot.com",
  messagingSenderId: "707717864802",
  appId: "1:707717864802:web:a53e671a1291e9fddde03b",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  console.log(err);
}

export const UserContext = createContext();

function Usercontextprovider({ children }) {
  const [phoneNumber, setPhoneNumber] = React.useState();

  const [verificationId, setVerificationId] = React.useState();
  const [verificationCode, setVerificationCode] = React.useState();

  const firebaseConfig = firebase.apps.length
    ? firebase.app().options
    : undefined;

  const [message, showMessage] = React.useState(
    !firebaseConfig || Platform.OS === "web"
      ? {
          text:
            "To get started, provide a valid firebase config in App.js and open this snack on an iOS or Android device.",
        }
      : undefined
  );
  const attemptInvisibleVerification = false;
  const islogin = useState(false);

  const verify = async (phone , refrence) => {
    try {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phone,
        refrence
      );
      setVerificationId(verificationId);
      showMessage({
        text: "Verification code has been sent to your phone.",
      });
    } catch (err) {
      showMessage({ text: `Error: ${err.message}`, color: "red" });
    }
  }

  const codeverification = async (verifiId , verificode) => {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verifiId,
        verificode
      );
      await firebase.auth().signInWithCredential(credential);
      showMessage({ text: "Phone authentication successful 👍" });
    } catch (err) {
      showMessage({ text: `Error: ${err.message}`, color: "red" });
    }
  }

  const exposed = {
    firebaseConfig,
    verify , 
    codeverification,

    phoneNumber,
    setPhoneNumber,
    
    verificationId,

    verificationCode,
    setVerificationCode,

    message,
    attemptInvisibleVerification,
    showMessage,

    islogin
  };
  return <UserContext.Provider value={exposed}>{children}</UserContext.Provider>;
}

export default Usercontextprovider;
