import { createContext, useContext, useState } from "react";

const authContext = createContext(null);

// Creamos usuarios de ejemplo
const USUARIOS_DEMO = [
  { email: "alumno@curso.com", password: "12345678", role: "student" },
  { email: "admin@curso.com", password: "admin123", role: "admin" }
]

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  async function login(email, password) {
    // Simulamos latencia real
    await new Promise((r) => setTimeout(r, 500));
    const encontrado = USUARIOS_DEMO.find(
      (u) => u.email === email && u.password === password 
    )
    if (!encontrado) throw new Error("Email o contraseña incorrectos.")
    setUser({ email: encontrado.email, role: encontrado.role })
    return encontrado
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