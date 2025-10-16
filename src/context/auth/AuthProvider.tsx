import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import type { User } from "../../interfaces/user.interface";

interface Props {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  // ✅ Cargar usuario guardado al iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setEmail(parsedUser.email || "");
      setName(parsedUser.name || "");
    }
  }, []);

  const login = (name: string, email: string) => {
    // ⚠️ En una app real, aquí validarías en el servidor.
    const newUser: User = { email, name }; // No guardar name en producción
    setUser(newUser);
    setEmail(email);
    setName(name);

    // ✅ Guardar usuario en localStorage
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    setEmail("");
    setName("");
    localStorage.removeItem("user"); // ✅ limpiar
    localStorage.removeItem("name"); // ✅ limpiar
  };

  return (
    <AuthContext.Provider
      value={{ login, logout, user, email, setEmail, name, setName }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
