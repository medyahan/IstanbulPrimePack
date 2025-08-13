import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box component="main" sx={{ flex: "1"}}>
        {children}
        <FloatingButtons />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
