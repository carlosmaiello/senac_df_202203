import React, { useState } from "react";

export const Context = React.createContext();

export default function AdminUserContext({ children }) {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

  const login = (email, password) => {
    setUser({
      name: "Zezinho da Silva",
      email,
      password,
    });
    setIsLogged(true);
  };
  const logout = () => {
    setUser(null);
    setIsLogged(false);
  };

  return (
    <Context.Provider value={{ user, isLogged, login, logout }}>
        {children}
    </Context.Provider>
    );
}
