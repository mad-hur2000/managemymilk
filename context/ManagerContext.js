import React, { createContext, useEffect, useState } from "react";
import { View, Text } from "react-native";

export const ManagerContext = createContext();

const Managercontextprovider = ({ children }) => {
  const [profile, setProfile] = useState();
  const [phone, setPhone] = useState();
  const [customers, setCustomers] = useState([]);
  const [deliveryboy, setDeliveryboy] = useState([]);
  const [data, setData] = useState();
  const [ currentselectedcustomer , setCurrentselectedcustomer ] = useState();
  const [ currentselectedproduct , setCurrentselectedproduct ] = useState();
  const [ currentselecteddelivery , setCurrentselecteddelivery ] = useState();

  console.log(data);

  const exposed = {
    profile,
    setProfile,

    customers,
    setCustomers,

    phone,
    setPhone,

    data,
    setData,

    currentselectedcustomer,
    setCurrentselectedcustomer,

    currentselectedproduct,
    setCurrentselectedproduct,

    currentselecteddelivery,
    setCurrentselecteddelivery

  };

  return (
    <ManagerContext.Provider value={exposed}>
      {children}
    </ManagerContext.Provider>
  );
};

export default Managercontextprovider;
