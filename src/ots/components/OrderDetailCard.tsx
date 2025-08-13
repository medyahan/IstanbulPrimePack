import { Card, CardContent, Typography, Chip, Button } from "@mui/material";
import React from "react";

const order = {
  id: "ORD123",
  product: "Kartvizit",
  quantity: 1000,
  status: "Üretimde",
  delivery: "Kendi Teslimatımız",
  estimatedDelivery: "2024-02-25",
};

const OrderDetailCard = () => {
  return (
    <Card sx={{ maxWidth: 500, margin: "auto", mt: 3, p: 2 }}>
      <CardContent>
        <Typography variant="h6">Sipariş ID: {order.id}</Typography>
        <Typography variant="subtitle1">Ürün: {order.product}</Typography>
        <Typography variant="body2">Adet: {order.quantity}</Typography>
        <Typography variant="body2">Tahmini Teslim: {order.estimatedDelivery}</Typography>
        <Typography variant="body2">Teslimat Türü: {order.delivery}</Typography>
        <Chip label={order.status} color="info" sx={{ mt: 1 }} />
      </CardContent>
      <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
        Sipariş Takibini Görüntüle
      </Button>
    </Card>
  );
};

export default OrderDetailCard;
