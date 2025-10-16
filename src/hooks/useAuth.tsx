import { useContext } from "react";
import { AuthContext } from "../context/auth/AuthContext";

// hoock exportar para usar el contexto

export const useAuth = () => {
  const contexto = useContext(AuthContext);
  if (!contexto)
    throw new Error("useAuth debe estar dentro de un AuthProvider");
  return contexto;
};
