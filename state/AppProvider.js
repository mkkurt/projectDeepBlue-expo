import React, { createContext, useContext, useState, useEffect } from "react";
import { data } from "../db/machinery";

// -- Machinery Context --
const MachineryContext = createContext({
  machinery: [],
  isLoading: true,
  getMachineryById: (machineryId) => {},
});

// -- Authentication Context --
const AuthContext = createContext({
  user: null,
  isLoggedIn: false,
  login: (user) => {},
  logout: () => {},
});

// -- Custom Hooks --
export function useMachineryContext() {
  return useContext(MachineryContext);
}

export function useAuth() {
  return useContext(AuthContext);
}

export function AppProvider({ children }) {
  // -- Machinery State --
  const [machinery, setMachinery] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // -- Authentication State --
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // -- Machinery Functions --
  const getMachineryById = (machineryId) => {
    return machinery.find((item) => item.id === machineryId);
  };

  // -- Authentication Functions --
  const login = (user) => {
    setUser(user);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  // -- Effects --
  useEffect(() => {
    setMachinery(data);
    setIsLoading(false);
  }, []);

  // -- Provider --
  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      <MachineryContext.Provider
        value={{ machinery, isLoading, getMachineryById }}
      >
        {children}
      </MachineryContext.Provider>
    </AuthContext.Provider>
  );
}
