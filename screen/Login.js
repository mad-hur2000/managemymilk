import React, { Component, useState, useContext } from "react";
import bgimage from "../assets/bgimage3.jpg";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Keyboard,
  Button,
  Platform
} from "react-native";
import { TouchableWithoutFeedback, ImageBackground } from "react-native";
import { globalstyles } from "../styles/Global";
import logo from "../assets/logo.png";
import { UserContext } from "../context/Usercontext";

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
// https://firebase.google.com/docs/web/setup
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  console.log(err);
}

export default function Login() {
  const recaptchaVerifier = React.useRef(null);
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

  return (
    <TouchableWithoutFeedback
            onPress={() => {
              // console.log('keyboard dismiss');
              Keyboard.dismiss();
            }}
          >
            <ImageBackground
              source={bgimage}
              style={globalstyles.imagecontainer}
            >
    <View style={styles.tocenter}>
      <View style={styles.box}>
        <Text style={styles.titletext}>Manage My Milk</Text>
        <Image source={logo} style={styles.logo} />
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        attemptInvisibleVerification={attemptInvisibleVerification}
      />
      <Text style={{ marginTop: 20 }}>Enter phone number</Text>
      <TextInput
        style={styles.stext}
        placeholder="+91 999 999 9999"
        autoFocus
        autoCompleteType="tel"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
      />
      <TouchableOpacity>
          <View>
            <Button
              title="Send Verification Code"
              disabled={!phoneNumber}
              onPress={async () => {
                // The FirebaseRecaptchaVerifierModal ref implements the
                // FirebaseAuthApplicationVerifier interface and can be
                // passed directly to `verifyPhoneNumber`.
                try {
                  const phoneProvider = new firebase.auth.PhoneAuthProvider();
                  const verificationId = await phoneProvider.verifyPhoneNumber(
                    phoneNumber,
                    recaptchaVerifier.current
                  );
                  setVerificationId(verificationId);
                  showMessage({
                    text: "Verification code has been sent to your phone.",
                  });
                } catch (err) {
                  showMessage({ text: `Error: ${err.message}`, color: "red" });
                }
              }}
            />
          </View>
      </TouchableOpacity>

      <Text style={{ marginTop: 20 }}>Enter Verification code</Text>
      <TextInput
        style={styles.stext}
        style={{ marginVertical: 10, fontSize: 17 }}
        editable={!!verificationId}
        placeholder="123456"
        onChangeText={setVerificationCode}
      />
      <TouchableOpacity>
          <View>
          <Button
              title="Confirm Verification Code"
              disabled={!verificationId}
              onPress={async () => {
                try {
                  const credential = firebase.auth.PhoneAuthProvider.credential(
                    verificationId,
                    verificationCode
                  );
                  await firebase.auth().signInWithCredential(credential);
                  showMessage({ text: "Phone authentication successful 👍" });
                } catch (err) {
                  showMessage({ text: `Error: ${err.message}`, color: "red" });
                }
              }}
            />
          </View>
      </TouchableOpacity>
      
      {message ? (
        <TouchableOpacity
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: 0xffffffee, justifyContent: "center" },
          ]}
          onPress={() => showMessage(undefined)}
        >
          <Text
            style={{
              color: message.color || "blue",
              fontSize: 17,
              textAlign: "center",
              margin: 20,
            }}
          >
            {message.text}
          </Text>
        </TouchableOpacity>
      ) : undefined}
      {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
    </View>
    </View>
    <Text style={styles.lasttext}>
      To create account , contact here
    </Text>
    </ImageBackground>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  tocenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    marginTop: 7,
    height: 450,
    width: 320,
    fontSize: 16,
    backgroundColor: "rgba(0,0,0,0.3)",
    marginTop: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  titletext: {
    alignContent: "center",
    justifyContent: "center",
    color: "#eee",
    fontSize: 28,
    marginTop: 10,
  },

  logo: {
    backgroundColor: "#fff",
    height: 90,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 120,
    marginTop: 20,
    borderRadius: 15,
  },

  stext: {
    marginTop: 7,
    height: 40,
    width: 270,
    borderBottomWidth: 0.2,
    borderRadius: 25,
    fontSize: 16,
    backgroundColor: "rgba(0,0,0,0.2)",
    marginTop: 20,
    color: "#bbb",
    textAlign: "center",
  },

  sbutton: {
    height: 34,
    width: 200,
    borderWidth: 1,
    borderRadius: 40,
    textAlign: "center",
    backgroundColor: "rgba(40,40,40,0.4)",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 25,
    color: "white",
  },

  buttontext: {
    color: "#ddd",
  },

  lasttext: {
    color: "#fff",
    marginTop: 15,
    alignItems: "center",
    alignSelf: "center",
  },
});

