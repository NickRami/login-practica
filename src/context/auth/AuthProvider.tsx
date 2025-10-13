import { useState } from "react";
import { AuthContext, type User } from "./AuthContext";

interface Props {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  const login = () => {
    setUser({ name: "John Doe", email: "cosas@nuevas.com" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
