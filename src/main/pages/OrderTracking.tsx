import { useState } from "react";
import { TextField, Button, Container, Typography, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Layout from "../components/Layout";
import React from "react";

const OrderTracking = () => {
  const theme = useTheme();
  const [orderNumber, setOrderNumber] = useState("");
  const [orderStatus, setOrderStatus] = useState<string | null>(null);

  const handleSearch = () => {
    // Burada API entegrasyonu olacak
    setOrderStatus("Üretimde");
  };

  return (
    <Layout>
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper sx={{ p: 3, boxShadow: 3, textAlign: "center"}}>
        <Typography variant="h5" sx={{ mb: 2 }}>Sipariş Sorgula</Typography>
        
        <TextField fullWidth label="Sipariş Numarası" margin="normal" value={orderNumber} onChange={(e) => setOrderNumber(e.target.value)} />
        
        <Button 
          variant="contained" 
          sx={{ mt: 2, bgcolor: theme.palette.primary.main, "&:hover": { bgcolor: theme.palette.primary.dark } }}
          onClick={handleSearch}
        >
          Sipariş Durumunu Görüntüle
        </Button>

        {orderStatus && <Typography sx={{ mt: 3 }}>Sipariş Durumu: {orderStatus}</Typography>}
      </Paper>
    </Container>
    </Layout>
  );
};

export default OrderTracking;
