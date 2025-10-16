import { createContext } from "react";
import type { User } from "../../interfaces/user.interface";

export interface AuthContextProps {
  user: User | null;
  login: (name: string, email: string) => void;
  logout: () => void;
  setEmail: (email: string) => void;
  email: string;
  setName: (name: string) => void;
  name: string;
}

// 1- crear el contexto de autenticación

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);
