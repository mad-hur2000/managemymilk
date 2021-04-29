import React, { useState, useContext, useEffect } from "react";
import { StyleSheet } from "react-native";

import Login from "../screen/Login";

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
    setId(data.id);
    if (data.role === "higherauthority") {
      setRole("manager");
      setIsloggedin(true);
    } else if (data.role === "mediumclass") {
      setRole("customer");
      setIsloggedin(true);
    } else if (data.role === "selemen") {
      setRole("delivery");
      setIsloggedin(true);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("DATA");
      console.log(value);
      if (value !== null) {
        handledata(JSON.parse(value));
      }
    } catch (e) {
      alert(e);
    }
  };

  console.log("Handler rendering");

  useEffect(() => {
    if (!isloggedin && role == null) {
      setLoading(true);
      getData();
      if (role == null && id == null) {
        setLoading(false);
        setIsloggedin(false);
      } else {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    if (isloggedin) {
      if (loading) {
        setLoading(false);
      }
    }
  }, [isloggedin]);

  if (loading) {
    return <Loading />;
  } else {
    if (isloggedin) {
      if (role === "manager") {
        return <NavigatorManager />;
      } else if (role === "customer") {
        return <NavigatorCustomer />;
      } else if (role === "delivery") {
        return <NavigatorDelivery />;
      }
    } else {
      return <Login />;
    }
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
