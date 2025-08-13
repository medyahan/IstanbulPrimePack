import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import React from "react";

interface ProtectedRouteProps {
  element: ReactElement;
}

function ProtectedRoute({ element }: ProtectedRouteProps) {
  const { user } = useAuth();
  return user ? element : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
