import React, { createContext, useEffect, useState } from "react";
import { View, Text } from "react-native";

export const ManagerContext = createContext();

const Managercontextprovider = ({ children }) => {
  const [profile, setProfile] = useState();
  const [phone, setPhone] = useState();
  const [loading, setLoading] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [deliveryboy, setDeliveryboy] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://managedairy.herokuapp.com/", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ phone: phone }),
    })
      .then((response) => response.json())
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [phone]);

  const exposed = {
    profile,
    setProfile,

    customers,
    setCustomers,

    phone,
    setPhone,
    loading,
  };

  return (
    <ManagerContext.Provider value={exposed}>
      {children}
    </ManagerContext.Provider>
  );
};

export default Managercontextprovider;
