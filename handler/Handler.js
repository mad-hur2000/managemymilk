import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, TextInput, Button } from "react-native";

import Login from "../screen/Login";
import SignUp from "../screen/SignUp";

import NavigatorManager from "../routes/Drawer";
import NavigatorCustomer from "../customerroutes/Customerdrawer";
import NavigatorDelivery from "../deliveryroutes/Deliverydrawer";

import { UserContext } from "../context/Usercontext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../screen/Loading";

export default Handler = () => {
  const [loading, setLoading] = useState(false);
  const { isloggedin, setIsloggedin, role, setRole, setId, id } = useContext(
    UserContext
  );

  const handledata = (data) => {
    console.log("handledata function");
    setId(data.id);
    if (data.role === "higherauthority") {
      setRole("manager");
      setLoading(false);
    } else if (data.role === "mediumclass") {
      setRole("customer");
      setLoading(false);
    } else if (data.role === "selemen") {
      setRole("delivery");
      setLoading(false);
    }
    console.log("handledata is ending");
  };

  const getData = async () => {
    try {
      if (!isloggedin) {
        setLoading(true);
        const value = await AsyncStorage.getItem("DATA");
        console.log(value);
        if (value !== null) {
          handledata(JSON.parse(value));
        } else {
          setLoading(false);
        }
      }
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    getData();
    console.log("get data done", role, id);
    if (role !== null && id !== null) {
      setIsloggedin(true);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Loading />;
  } else if (!isloggedin) {
    return <Login />;
  } else {
    if (role === "manager") {
      return <NavigatorManager />;
    } else if (role === "customer") {
      return <NavigatorCustomer />;
    } else if (role === "delivery") {
      return <NavigatorDelivery />;
    }
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
