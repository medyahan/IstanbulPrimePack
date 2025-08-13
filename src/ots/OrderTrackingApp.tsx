import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { orders as initialOrders } from "../data/orders";

import { ThemeProvider, CssBaseline } from "@mui/material";
import themeOrderTracking from "../themes/themeOrderTracking"; // Sipariş takip sistemi teması
import { AuthProvider } from "./context/AuthContext"; // AuthProvider içe aktarıldı!
import React from "react";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Delivery from "./pages/Delivery";
import NewOrder from "./pages/NewOrder";
import OrderManagement from "./pages/OrderManagement";
import ProtectedRoute from "./components/ProtectedRoute";

const OrderTrackingApp = () => {
  const [orders, setOrders] = useState(initialOrders);
  
  return (
    <AuthProvider> {/* 👈 Tüm sistemi saran AuthProvider eklendi */}
      <ThemeProvider theme={themeOrderTracking}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
          <Route path="/dashboard/new-order" element={<ProtectedRoute element={<NewOrder />} />} />
          <Route path="/dashboard/delivery" element={<ProtectedRoute element={<Delivery />} />} />
          <Route path="/dashboard/order-management" element={<ProtectedRoute element={<OrderManagement orders={orders} setOrders={setOrders}/>} />} />
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default OrderTrackingApp;
