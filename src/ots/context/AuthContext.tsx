import { createContext, useContext, useState } from "react";
import React from "react";

interface AuthContextType {
  user: { email: string; role: string } | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<{ email: string; role: string } | null>(null);

  const login = (email: string, password: string) => {
    if (email === "admin@medya.com" && password === "admin123") {
      setUser({ email, role: "admin" });
      return true;
    } else if (email === "customer@medya.com" && password === "customer123") {
      setUser({ email, role: "customer" });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
