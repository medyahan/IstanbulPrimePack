import { Box, Fab, Tooltip, Zoom } from "@mui/material";
//import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
//import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";

const FloatingButtons = () => {
  //const navigate = useNavigate();
  //const [hoveredOrder, setHoveredOrder] = useState(false);
  const [hoveredWhatsApp, setHoveredWhatsApp] = useState(false);

  return (
    <Box>

      {/* Sipariş Takip Butonu
      <Tooltip title="Sipariş Takip" arrow TransitionComponent={Zoom}>
        <Fab
          color="primary"
          aria-label="sipariş takip"
          onClick={() => navigate("/order-tracking")}
          onMouseEnter={() => setHoveredOrder(true)}
          onMouseLeave={() => setHoveredOrder(false)}
          sx={{
            position: "fixed",
            bottom: { xs: 100, md: 120 }, // WhatsApp butonuyla uyumlu konum
            right: { xs: 15, md: 20 },
            zIndex: 1000,
            backgroundColor: hoveredOrder ? "primary.dark" : "primary.main",
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            boxShadow: 3,
            transition: "all 0.3s ease-in-out",
            width: hoveredOrder ? 95 : 85,
            height: hoveredOrder ? 95 : 85,
            "&:hover": {
              backgroundColor: "primary.light",
              transform: "scale(1.1)",
            },
          }}
        >
          <LocalShippingIcon
            sx={{
              color: "secondary.main",
              fontSize: 45,
              transition: "0.3s ease-in-out",
              transform: hoveredOrder ? "rotate(10deg)" : "none",
            }}
          />
        </Fab>
      </Tooltip> */}

      {/* WhatsApp Butonu */}
      <Tooltip title="WhatsApp İletişim" arrow TransitionComponent={Zoom}>
        <Fab
          color="success"
          aria-label="whatsapp"
          href="https://wa.me/905449137107" // WhatsApp numarası buraya eklenmeli
          target="_blank"
          onMouseEnter={() => setHoveredWhatsApp(true)}
          onMouseLeave={() => setHoveredWhatsApp(false)}
          sx={{
            position: "fixed",
            bottom: { xs: 15, md: 20 },
            right: { xs: 15, md: 20 },
            zIndex: 1000,
            backgroundColor: hoveredWhatsApp ? "#25D366" : "#128C7E", // WhatsApp yeşil tonları
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            boxShadow: 3,
            transition: "all 0.3s ease-in-out",
            width: hoveredWhatsApp ? 95 : 85,
            height: hoveredWhatsApp ? 95 : 85,
            "&:hover": {
              backgroundColor: "#25D366",
              transform: "scale(1.1)",
            },
          }}
        >
          <WhatsAppIcon
            sx={{
              color: "white",
              fontSize: 45,
              transition: "0.3s ease-in-out",
              transform: hoveredWhatsApp ? "rotate(-10deg)" : "none",
            }}
          />
        </Fab>
      </Tooltip>
    </Box>
  );
};

export default FloatingButtons;
