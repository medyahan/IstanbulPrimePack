import { Container, Typography, Paper } from "@mui/material";
import Sidebar from "../components/SideBar";
import React from "react";

const Delivery = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Container sx={{ mt: 5 }}>
        <Typography variant="h4">Teslimat Yönetimi</Typography>
        <Paper sx={{ p: 3, mt: 3 }}>
          <Typography variant="h6">Sipariş Teslimatları</Typography>
          <Typography>Kargo sürecindeki siparişleri takip edin.</Typography>
        </Paper>
      </Container>
    </div>
  );
};

export default Delivery;
