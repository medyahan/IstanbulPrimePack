import { Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material";
import React from "react";

const orders = [
  { id: "ORD123", product: "Kartvizit", status: "Kargoya Verildi", deliveryType: "Kargo" },
  { id: "ORD124", product: "Broşür", status: "Teslim Edildi", deliveryType: "Kendi Teslimatımız" },
];

const DeliveryManagement = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4">Teslimat Yönetimi</Typography>
      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Sipariş ID</b></TableCell>
              <TableCell><b>Ürün</b></TableCell>
              <TableCell><b>Durum</b></TableCell>
              <TableCell><b>Teslimat Türü</b></TableCell>
              <TableCell><b>İşlem</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.deliveryType}</TableCell>
                <TableCell>
                  {order.status !== "Teslim Edildi" && (
                    <Button variant="contained" color="primary">
                      Teslimatı Tamamla
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default DeliveryManagement;
