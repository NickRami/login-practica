import React, { type JSX } from "react";
import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps): JSX.Element => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/register" replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
