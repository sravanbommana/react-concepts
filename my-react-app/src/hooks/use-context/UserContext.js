import { createContext, useContext, useState } from "react";
export const UserContext = createContext(null);

export const UserContextProvider = ({children}) => {
  const[userData, setUserData] = useState({
    name: "pavan",
    emailAddress: "pavan123@gmail.com"
  });

  return(
    <UserContext.Provider
    value={{
      userData,
      setUserData
    }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContextProvider = () => {
  const context = useContext(UserContext);
  console.log("********", context)
  if(!context) {
    throw new Error(
      "useContext must be used within a User context Provider"
    )
  }
  return context;
}