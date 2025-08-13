import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { TextField, Button, Container, Typography, Box, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import logo from "../../assets/logo/logo-vertical-light.png";
import React from "react";

const Login = () => {
  const theme = useTheme(); // MUI temasını kullan
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const success = login(email, password);
    if (success) {
      navigate("/ots/dashboard");
    } else {
      setError("Geçersiz e-posta veya şifre!");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.secondary.main, // Koyu gri arka plan
      }}
    >
      <Container maxWidth="xs">
        <Paper 
          elevation={6}
          sx={{
            padding: 4,
            borderRadius: 3,
            backgroundColor: theme.palette.background.paper, // Beyaz arka plan
            color: theme.palette.text.primary,
            textAlign: "center",
            position: "relative"
          }}
        >
          {/* Logo ve Başlık */}
          <Box sx={{ textAlign: "center" }}>
            <img 
              src= {logo}
              alt="Sipariş Takip Sistemi"
              style={{ width: 150, height: 150, marginBottom: -10 }}
            />
            <Typography variant="h5" fontWeight="bold" color={theme.palette.text.primary}>
              Sipariş Takip Sistemi
            </Typography>
            <Typography variant="h6" fontWeight="bold" color={theme.palette.text.secondary} sx={{ mt: 5}}>
              Giriş
            </Typography>
          </Box>

          {/* Giriş Formu */}
          <TextField 
            fullWidth 
            margin="normal" 
            label="E-posta" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <TextField 
            fullWidth 
            margin="normal" 
            label="Şifre" 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          {error && <Typography color="error">{error}</Typography>}
          
          <Button 
            variant="contained" 
            fullWidth 
            onClick={handleLogin} 
            sx={{ 
              mt: 2, 
              backgroundColor: theme.palette.primary.main, // Turuncu
              color: theme.palette.primary.contrastText,
              "&:hover": { backgroundColor: theme.palette.primary.dark } // Daha koyu turuncu
            }}
          >
            Giriş Yap
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
