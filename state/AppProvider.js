import React, { createContext, useContext, useState, useEffect } from "react";
import { data } from "../db/machinery"; // Import your data

const MachineryContext = createContext({
  machinery: [], // Initial empty state
  isLoading: true, // Track loading status
});

export function useMachineryContext() {
  return useContext(MachineryContext);
}

export function MachineryProvider({ children }) {
  const [machinery, setMachinery] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMachineryById = (machineryId) => {
    return machinery.find((item) => item.id === machineryId);
  };

  useEffect(() => {
    // Load data when the component mounts (only once)
    setMachinery(data);
    setIsLoading(false);
  }, []); // Empty dependency array ensures it runs only once

  return (
    <MachineryContext.Provider
      value={{ machinery, isLoading, getMachineryById }}
    >
      {children}
    </MachineryContext.Provider>
  );
}
