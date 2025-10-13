import { createContext } from "react";

export interface User {
  name: string;
  email: string;
}

export interface AuthContextProps {
  user: User | null;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);
