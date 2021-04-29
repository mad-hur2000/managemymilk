import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserContext = createContext();

const Usercontextprovider = ({ children }) => {
  const [isloggedin, setIsloggedin] = useState(false);
  const [normalnumber, setNormalnumber] = useState();
  const [id, setId] = useState(null);
  const [role, setRole] = useState(null);

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("DATA", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const manageRoleandId = (data) => {
    if (data.ismanager) {
      let value = {
        id: data.id,
        role: "higherauthority",
      };
      storeData(value);
      setid(data.id);
      setRole("manager");
    } else if (data.iscustomer) {
      let value = {
        id: data.id,
        role: "mediumclass",
      };
      storeData(value);
      setid(data.id);
      setRole("customer");
    } else {
      let value = {
        id: data.id,
        role: "selsmen",
      };
      storeData(value);
      setid(data.id);
      setRole("delivery");
    }
  };

  useEffect(() => {
    if (role == null) {
      fetch("https://managedairy.herokuapp.com/", {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({ phone: normalnumber }),
      })
        .then((response) => response.json())
        .then((data) => {
          manageRoleandId(data);
        })
        .catch((err) => console.log(err));
    }
  }, [normalnumber]);

  const exposed = {
    isloggedin,
    setIsloggedin,

    role,
    setRole,

    setNormalnumber,
    normalnumber,

    id,
    setId,
  };
  return (
    <UserContext.Provider value={exposed}>{children}</UserContext.Provider>
  );
};

export default Usercontextprovider;
