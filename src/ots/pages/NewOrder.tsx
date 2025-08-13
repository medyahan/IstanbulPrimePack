import { useState } from "react";
import { TextField, Button, Container, Typography, Paper, Box, MenuItem, Select, Grid, SelectChangeEvent } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useAuth } from "../context/AuthContext";
import Sidebar from "../components/SideBar";
import { OrderData } from "../../data/order";
import React from "react";

// ENUM: Kağıt Tipleri, Gramajlar, İş Tipleri ve Para Birimleri
const PaperTypes = ["Kuşe", "Amerikan Bristol", "1. Hamur", "Kraft", "Fotokopi", "Diğer"];
const PaperWeights = ["70 g/m²", "80 g/m²", "90 g/m²", "100 g/m²", "120 g/m²", "150 g/m²", "170 g/m²", "200 g/m²", "250 g/m²", "300 g/m²"];
const JobTypes = ["Dergi", "Karton Poşet", "Broşür"];
const Currencies = ["₺", "$", "€"]; // Para birimi seçenekleri

const NewOrder = () => {
  const theme = useTheme();
  const { user } = useAuth();

  const [orderDetails, setOrderDetails] = useState<OrderData>({
    orderNumber: `ORD-${Math.floor(100000 + Math.random() * 900000)}`,
    receiptNumber: "",
    receiptDate: "",
    companyName: "",
    jobName: "",
    jobType: "Dergi",
    paperType: "",
    paperWeight: "",
    width: "",
    height: "",
    depth: "",
    quantity: 0,
    deliveryDate: "",
    orderAmount: "", // Sipariş Tutarı
    currency: "₺", // Varsayılan para birimi TL
    enteredBy: user?.email || "Bilinmeyen Kullanıcı",
    status: "Sipariş Alındı"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>) => {
    setOrderDetails({
      ...orderDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Yeni Sipariş:", orderDetails);
    alert("Sipariş başarıyla oluşturuldu!");
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Paper sx={{ p: 4, boxShadow: 3, borderRadius: 3 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold", color: theme.palette.primary.main }}>
            📝 Yeni Sipariş Oluştur
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Sipariş Numaranız: <strong>{orderDetails.orderNumber}</strong>
          </Typography>

          {/* Fiş No ve Fiş Tarihi */}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField fullWidth name="receiptNumber" label="Fiş No" margin="normal" onChange={handleChange} />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth name="receiptDate" label="Fiş Tarihi" type="date" margin="normal" InputLabelProps={{ shrink: true }} onChange={handleChange} />
            </Grid>
          </Grid>

          {/* Firma İsmi ve İşin Adı */}
          <TextField fullWidth name="companyName" label="Firma İsmi" margin="normal" onChange={handleChange} />
          <TextField fullWidth name="jobName" label="İşin Adı" margin="normal" onChange={handleChange} />

          {/* İşin Tipi */}
          <Select
            fullWidth
            name="jobType"
            value={orderDetails.jobType}
            onChange={handleChange}
            displayEmpty
            sx={{ mt: 2 }}
          >
            {JobTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>

          {/* Kağıt Tipi ve Gramaj */}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Select
                fullWidth
                name="paperType"
                value={orderDetails.paperType}
                onChange={handleChange}
                displayEmpty
                sx={{ mt: 2 }}
              >
                <MenuItem value="" disabled>
                  Kağıt Tipi Seçin
                </MenuItem>
                {PaperTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={6}>
              <Select
                fullWidth
                name="paperWeight"
                value={orderDetails.paperWeight}
                onChange={handleChange}
                displayEmpty
                sx={{ mt: 2 }}
              >
                <MenuItem value="" disabled>
                  Gramaj Seçin
                </MenuItem>
                {PaperWeights.map((weight) => (
                  <MenuItem key={weight} value={weight}>
                    {weight}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>

          {/* Ebat (En, Boy, Derinlik) */}
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField fullWidth name="width" label="En (cm)" type="number" margin="normal" onChange={handleChange} />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth name="height" label="Boy (cm)" type="number" margin="normal" onChange={handleChange} />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth name="depth" label="Derinlik (cm)" type="number" margin="normal" onChange={handleChange} />
            </Grid>
          </Grid>

          {/* Teslim Tarihi */}
          <TextField fullWidth name="deliveryDate" label="Teslim Tarihi" type="date" margin="normal" InputLabelProps={{ shrink: true }} onChange={handleChange} />

          {/* Sipariş Tutarı ve Para Birimi */}
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <TextField
                fullWidth
                name="orderAmount"
                label="Sipariş Tutarı"
                type="number"
                margin="normal"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <Select
                fullWidth
                name="currency"
                value={orderDetails.currency}
                onChange={handleChange}
                sx={{ mt: 2 }}
              >
                {Currencies.map((currency) => (
                  <MenuItem key={currency} value={currency}>
                    {currency}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>

          {/* Siparişi Giren Kullanıcı */}
          <Typography variant="body2" sx={{ mt: 2, fontWeight: "bold" }}>
            Siparişi Giren: {orderDetails.enteredBy}
          </Typography>

          {/* Sipariş Oluştur Butonu */}
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 3, bgcolor: theme.palette.primary.main, "&:hover": { bgcolor: theme.palette.primary.dark } }}
            onClick={handleSubmit}
          >
            Siparişi Oluştur
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default NewOrder;
