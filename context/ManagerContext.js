import React, { createContext, useContext, useEffect, useState } from "react";

export const ManagerContext = createContext();

const Managercontextprovider = ({ children }) => {
  const [managerid, setManagerid] = useState();
  const [profile, setProfile] = useState();
  const [customers, setCustomers] = useState([]);
  const [data, setData] = useState();
  const [currentselectedcustomer, setCurrentselectedcustomer] = useState(null);
  const [currentselectedproduct, setCurrentselectedproduct] = useState(null);
  const [currentselecteddelivery, setCurrentselecteddelivery] = useState(null);

  console.log(data);

  const exposed = {
    profile,
    setProfile,

    customers,
    setCustomers,

    data,
    setData,

    currentselectedcustomer,
    setCurrentselectedcustomer,

    currentselectedproduct,
    setCurrentselectedproduct,

    currentselecteddelivery,
    setCurrentselecteddelivery,

    managerid,
    setManagerid,
  };

  return (
    <ManagerContext.Provider value={exposed}>
      {children}
    </ManagerContext.Provider>
  );
};

export default Managercontextprovider;
