import { useState } from "react";
import { 
  Container, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, 
  Button, Select, MenuItem, Box, FormControl, InputLabel, TextField, Grid, Dialog, DialogTitle, 
  DialogContent, DialogActions, Divider 
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Sidebar from "../components/SideBar";
import React from "react";

// Sipariş Durumları
const statusSteps = ["Sipariş Alındı", "Üretimde", "Hazır", "Kargoya Verildi", "Teslim Edildi"];

const OrderManagement = ({ orders, setOrders }: { orders: any[]; setOrders: (orders: any[]) => void }) => {
  const theme = useTheme();
  const [filterStatus, setFilterStatus] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  // Sipariş Durumunu Güncelle
  const updateStatus = (id: string, newStatus: string) => {
    setOrders(orders.map(order => (order.orderNumber === id ? { ...order, status: newStatus } : order)));
  };

  // Siparişleri filtreleme ve arama işlemi
  const filteredOrders = orders.filter(order => 
    (filterStatus ? order.status === filterStatus : true) &&
    (searchQuery ? order.companyName.toLowerCase().includes(searchQuery.toLowerCase()) : true)
  );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" sx={{ mb: 3, color: theme.palette.primary.main, fontWeight: "bold" }}>
          📋 Sipariş Yönetimi
        </Typography>

        {/* Filtreleme ve Arama */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Duruma Göre Filtrele</InputLabel>
              <Select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                <MenuItem value="">Tüm Siparişler</MenuItem>
                {statusSteps.map(status => (
                  <MenuItem key={status} value={status}>{status}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={8}>
            <TextField
              fullWidth
              label="Firma İsmi Ara"
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Grid>
        </Grid>

        {/* Sipariş Tablosu */}
        <Paper sx={{ p: 2, borderRadius: 2 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: theme.palette.secondary.dark}}>
                  <TableCell sx={{ color: theme.palette.secondary.contrastText}}><b>Sipariş No</b></TableCell>
                  <TableCell sx={{ color: theme.palette.secondary.contrastText}}><b>Fiş No</b></TableCell>
                  <TableCell sx={{ color: theme.palette.secondary.contrastText}}><b>Firma İsmi</b></TableCell>
                  <TableCell sx={{ color: theme.palette.secondary.contrastText}}><b>İşin Adı</b></TableCell>
                  <TableCell sx={{ color: theme.palette.secondary.contrastText}}><b>Teslim Tarihi</b></TableCell>
                  <TableCell sx={{ color: theme.palette.secondary.contrastText}}><b>Durum</b></TableCell>
                  <TableCell sx={{ color: theme.palette.secondary.contrastText}}><b>Güncelle</b></TableCell>
                  <TableCell sx={{ color: theme.palette.secondary.contrastText}}><b>Detaylar</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredOrders.map(order => (
                  <TableRow key={order.orderNumber}>
                    <TableCell>{order.orderNumber}</TableCell>
                    <TableCell>{order.receiptNumber}</TableCell>
                    <TableCell>{order.companyName}</TableCell>
                    <TableCell>{order.jobName}</TableCell>
                    <TableCell>{order.deliveryDate}</TableCell>
                    <TableCell>
                      <Select
                        value={order.status}
                        onChange={(e) => updateStatus(order.orderNumber, e.target.value)}
                        sx={{ minWidth: 150 }}
                      >
                        {statusSteps.map(status => (
                          <MenuItem key={status} value={status}>{status}</MenuItem>
                        ))}
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        sx={{ backgroundColor: theme.palette.primary.main, "&:hover": { backgroundColor: theme.palette.primary.dark } }}
                        onClick={() => {
                          const currentIndex = statusSteps.indexOf(order.status);
                          if (currentIndex < statusSteps.length - 1) {
                            updateStatus(order.orderNumber, statusSteps[currentIndex + 1]);
                          }
                        }}
                        disabled={order.status === "Teslim Edildi"}
                      >
                        Güncelle
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="outlined" color="primary" onClick={() => setSelectedOrder(order)}>
                        Detayları Gör
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>

      {/* Sipariş Detayları Pop-up */}
{selectedOrder && (
  <Dialog open={Boolean(selectedOrder)} onClose={() => setSelectedOrder(null)} maxWidth="xs" fullWidth>
    <DialogTitle sx={{ bgcolor: theme.palette.primary.main, color: "white", textAlign: "center" }}>
      Sipariş Detayları
    </DialogTitle>
    <DialogContent dividers sx={{ p: 3, backgroundColor: theme.palette.background.default }}>
      
      {/* Sipariş Bilgileri */}
      <Typography variant="h6" sx={{ fontWeight: "bold", color: theme.palette.primary.dark }}>📌 Sipariş Bilgileri</Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography><b>Sipariş No:</b> {selectedOrder.orderNumber}</Typography>
      <Typography><b>Fiş No:</b> {selectedOrder.receiptNumber}</Typography>
      <Typography><b>Fiş Tarihi:</b> {selectedOrder.receiptDate}</Typography>
      <Typography><b>Firma İsmi:</b> {selectedOrder.companyName}</Typography>
      <Typography><b>İşin Adı:</b> {selectedOrder.jobName}</Typography>
      <Typography><b>İşin Tipi:</b> {selectedOrder.jobType}</Typography>

      {/* Kağıt Bilgileri */}
      <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold", color: theme.palette.primary.dark }}>📄 Kağıt Bilgileri</Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography><b>Kağıt Tipi:</b> {selectedOrder.paperType}</Typography>
      <Typography><b>Kağıt Gramajı:</b> {selectedOrder.paperWeight}</Typography>

      {/* Ebat ve Teslimat */}
      <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold", color: theme.palette.primary.dark }}>📦 Ebat ve Teslimat</Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography><b>Ebat:</b> {selectedOrder.width} x {selectedOrder.height} x {selectedOrder.depth} cm</Typography>
      <Typography><b>Teslim Tarihi:</b> {selectedOrder.deliveryDate}</Typography>

      {/* Sipariş Tutarı */}
      <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold", color: theme.palette.primary.dark }}>💰 Sipariş Tutarı</Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography><b>Tutar:</b> {selectedOrder.orderAmount} {selectedOrder.currency}</Typography>

      {/* Sipariş Durumu */}
      <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold", color: theme.palette.primary.dark }}>📌 Sipariş Durumu</Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography><b>Durum:</b> {selectedOrder.status}</Typography>

      {/* Siparişi Giren */}
      <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold", color: theme.palette.primary.dark }}>👤 Siparişi Giren</Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography><b>Kullanıcı:</b> {selectedOrder.enteredBy}</Typography>

    </DialogContent>
    <DialogActions>
      <Button onClick={() => setSelectedOrder(null)} sx={{ color: theme.palette.primary.main }}>
        Kapat
      </Button>
    </DialogActions>
  </Dialog>
)}

    </Box>
  );
};

export default OrderManagement;
