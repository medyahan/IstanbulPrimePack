import { Container, Typography, Paper, Box, Grid, Card, CardContent } from "@mui/material";
import Sidebar from "../components/SideBar";
import { useTheme } from "@mui/material/styles";
import { orders } from "../../data/orders"; // Statik sipariş verileri
import React from "react";

const Dashboard = () => {
  const theme = useTheme();

  // Sipariş durumlarına göre toplamları hesapla
  const totalOrders = orders.length;
  const pendingOrders = orders.filter(order => order.status === "Sipariş Alındı").length;
  const inProductionOrders = orders.filter(order => order.status === "Üretimde").length;
  const readyOrders = orders.filter(order => order.status === "Hazır").length;
  const shippedOrders = orders.filter(order => order.status === "Kargoya Verildi").length;
  const deliveredOrders = orders.filter(order => order.status === "Teslim Edildi").length;

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: theme.palette.background.default }}>
      <Sidebar />
      <Container sx={{ flexGrow: 1, p: 5 }}>
        
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 4, color: theme.palette.primary.main }}>
          📊 Admin Paneli - Genel Durum
        </Typography>

        {/* Genel Sipariş Durumu */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: theme.palette.info.light, color: theme.palette.info.contrastText }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">📦 Toplam Siparişler</Typography>
                <Typography variant="h4" fontWeight="bold">{totalOrders}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: theme.palette.warning.light, color: theme.palette.warning.contrastText }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">🕒 Bekleyen Siparişler</Typography>
                <Typography variant="h4" fontWeight="bold">{pendingOrders}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: theme.palette.secondary.light, color: theme.palette.secondary.contrastText }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">🏭 Üretimde</Typography>
                <Typography variant="h4" fontWeight="bold">{inProductionOrders}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: theme.palette.success.light, color: theme.palette.success.contrastText }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">✅ Hazır</Typography>
                <Typography variant="h4" fontWeight="bold">{readyOrders}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: theme.palette.primary.light, color: theme.palette.primary.contrastText }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">🚚 Kargoya Verildi</Typography>
                <Typography variant="h4" fontWeight="bold">{shippedOrders}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: theme.palette.success.dark, color: theme.palette.success.contrastText }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">📬 Teslim Edildi</Typography>
                <Typography variant="h4" fontWeight="bold">{deliveredOrders}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Yönetim Bölümleri */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, boxShadow: 3, borderLeft: `6px solid ${theme.palette.primary.main}` }}>
              <Typography variant="h6" fontWeight="bold" color={theme.palette.primary.main}>
                📋 Tüm Siparişleri Yönet
              </Typography>
              <Typography color="text.secondary">
                Siparişleri onaylayabilir, üretime yönlendirebilir ve kargo durumunu değiştirebilirsiniz.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, boxShadow: 3, borderLeft: `6px solid ${theme.palette.secondary.main}` }}>
              <Typography variant="h6" fontWeight="bold" color={theme.palette.secondary.main}>
                🚚 Teslimat Yönetimi
              </Typography>
              <Typography color="text.secondary">
                Teslimat sürecindeki siparişleri kontrol edebilirsiniz.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default Dashboard;
