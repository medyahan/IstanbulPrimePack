import { Container, Typography, Button, Box, Grid, useTheme, Fade } from "@mui/material";
import { Link } from "react-router-dom";
import heroData from "../data/heroData";
import { useEffect, useState } from "react";

const Hero = () => {
  const theme = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroData.images.length);
        setFadeIn(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        padding: "50px 0",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        textAlign: "left"
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">

          {/* SOL TARAF: METİN ALANI */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                color: theme.palette.secondary.main,
                fontFamily: theme.typography.h1.fontFamily,
                whiteSpace: "pre-line"
              }}
            >
              {heroData.title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                marginTop: "16px",
                color: theme.palette.text.secondary
              }}
            >
              {heroData.description}
            </Typography>

            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to={heroData.button.link}
              sx={{
                marginTop: "24px",
                padding: "12px 32px",
                borderRadius: theme.shape.borderRadius,
                transition: "0.3s",
                "&:hover": {
                  color: theme.palette.secondary.main
                },
              }}
            >
              {heroData.button.text}
            </Button>

            {/* ALT İKONLAR VE ÖZELLİKLER */}
            <Box sx={{ display: "flex", gap: 4, marginTop: "40px" }}>
              {heroData.features.map((feature, index) => (
                <Box key={index} sx={{ textAlign: "center" }}>
                  {feature.icon}
                  <Typography variant="body2">{feature.text}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* SAĞ TARAF: GÖRSEL */}
          <Grid item xs={12} md={7}>
            <Fade in={fadeIn} timeout={300}>
              <Box
                component="img"
                src={heroData.images[currentImageIndex]}
                alt="Hero Illustration"
                sx={{
                  width: "100%",
                  transition: "opacity 0.3s ease-in-out"
                }}
              />
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
