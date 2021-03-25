import { StatusBar } from "expo-status-bar";
import React, { Component, useState, useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import Login from "../screen/Login";
import SignUp from "../screen/SignUp";

import NavigatorManager from "../routes/Drawer";
import NavigatorCustomer from "../customerroutes/Customerdrawer";
import NavigatorDelivery from "../deliveryroutes/Deliverydrawer";

import { UserContext } from "../context/Usercontext";
import { ManagerContext } from "../context/ManagerContext";

export default function Handler() {
  const {
    isloggedin,
    normalnumber,
    setNormalnumber,
    setIsloggedin,
    role,
    setRole,
  } = useContext(UserContext);
  const { setPhone } = useContext(ManagerContext);
  const [asyncnumber, setAsyncnumber] = useState(null);

  const getData = async () => {
    try {
      if (!isloggedin) {
        const value = await AsyncStorage.getItem("phone");
        console.log(value);
        if (value !== null) {
          await setAsyncnumber(value);
        }
      }
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    fetch("https://managedairy.herokuapp.com/", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ phone: asyncnumber }),
    })
      .then((response) => response.json())
      .then((data) => {
        setRole(data);
        setNormalnumber(asyncnumber);
        setIsloggedin(true);
      })
      .catch((err) => console.log(err));
  }, [asyncnumber]);

  if (normalnumber) {
    setPhone(normalnumber);
  }

  if (!isloggedin) {
    return <Login />;
  } else {
    if (role.ismanager || roles.ismanager) {
      return isloggedin ? <NavigatorManager /> : <SignUp />;
    } else if (role.iscustomer || roles.iscustomer) {
      return isloggedin ? <NavigatorCustomer /> : <Login />;
    } else if (role.isdelivery || roles.isdelivery) {
      return isloggedin ? <NavigatorDelivery /> : <Login />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
