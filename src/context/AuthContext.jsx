import { createContext, useContext, useState } from "react";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  function login(email, password) {
    if (email && password) {
        const role = email.includes("admin") ? "admin" : "student";
        setUser({ email, role });
        return true;
    }
    return false;
  }
  function logout() {
    setUser(null);
  }
  return (
    <authContext.Provider value={{ user, login, logout }}>
      {children}
    </authContext.Provider>
  );
};

export function  useAuth() {
  return useContext(authContext);
}