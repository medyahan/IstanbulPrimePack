import { Drawer, List, ListItem, ListItemText, ListItemButton, Box, Avatar, Typography, Button } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "@mui/material/styles";
import logo from "../../assets/logo/logo-vertical-dark.png"; 

const Sidebar = () => {
  const { user, logout } = useAuth();
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); 
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 260,
        flexShrink: 0,
        bgcolor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        "& .MuiDrawer-paper": {
          width: 260,
          bgcolor: theme.palette.secondary.dark,
          color: theme.palette.secondary.contrastText,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
    >
      {/* Logo ve Başlık */}
      <Box sx={{ textAlign: "center", p: 2 }}>
        <img 
          src={logo} 
          alt="Sipariş Takip Sistemi"
          style={{ width: 120, height: 120, marginBottom: 10 }}
        />
        <Typography variant="h6" fontWeight="bold" color={theme.palette.secondary.contrastText}>
          Sipariş Takip Sistemi
        </Typography>
      </Box>

      {/* Menü Öğeleri */}
      <List>
        {user?.role === "customer" ? (
          <>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/ots/dashboard" selected={location.pathname === "/ots/dashboard"}>
                <ListItemText primary="📦 Müşteri Paneli" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component={Link} to="/ots/new-order" selected={location.pathname === "/ots/new-order"}>
                <ListItemText primary="➕ Yeni Sipariş" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component={Link} to="/ots/order-list" selected={location.pathname === "/ots/order-list"}>
                <ListItemText primary="📋 Siparişlerim" />
              </ListItemButton>
            </ListItem>
          </>
        ) : (
          <>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/ots/dashboard" selected={location.pathname === "/ots/dashboard"}>
                <ListItemText primary="🏠 Admin Paneli" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component={Link} to="/ots/dashboard/order-management" selected={location.pathname === "/ots/dashboard/order-management"}>
                <ListItemText primary="📋 Sipariş Yönetimi" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component={Link} to="/ots/dashboard/new-order" selected={location.pathname === "/ots/dashboard/new-order"}>
                <ListItemText primary="➕ Yeni Sipariş" />
              </ListItemButton>
            </ListItem>
          </>
        )}
      </List>

      {/* Kullanıcı Profili & Çıkış Butonu */}
      <Box sx={{ p: 2, borderTop: `1px solid ${theme.palette.secondary.light}` }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar sx={{ bgcolor: theme.palette.primary.main, marginRight: 2 }}>
            {user?.email?.charAt(0).toUpperCase()}
          </Avatar>
          <Box>
            <Typography variant="body1" fontWeight="bold">
              {user?.email}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {user?.role === "admin" ? "Admin" : "Müşteri"}
            </Typography>
          </Box>
        </Box>

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2, bgcolor: theme.palette.error.main, "&:hover": { bgcolor: theme.palette.error.dark } }}
          onClick={handleLogout}
        >
          Çıkış Yap
        </Button>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
