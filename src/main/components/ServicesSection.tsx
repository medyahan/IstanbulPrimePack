import { Box, Container, Typography, Grid, Paper, Button } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import servicesData from "../data/servicesData"; 
import { useTheme } from "@mui/material/styles"; // Theme ekledim
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from "react";

// Sarı eğimli arka plan tasarımı
const BackgroundWrapper = styled(Box)(({ theme }) => ({
  background: theme.palette.background.default,
  position: "relative",
  padding: theme.spacing(10, 0),
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.primary.main,
    clipPath: "polygon(0 0, 100% 12%, 100% 100%, 0% 100%)",
    zIndex: 0,
  },
}));

const ContentWrapper = styled(Container)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
}));

// Stil düzenlemeleri
const ServiceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
  minHeight: "330px",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "16px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 6px 24px rgba(0, 0, 0, 0.15)"
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 80,
  height: 80,
  borderRadius: "50%",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  margin: "0 auto",
}));

const ServicesSection = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <BackgroundWrapper>
      <ContentWrapper>
        <Typography
          variant="h5"
          align="center"
          color="secondary"
          fontWeight="bold"
          gutterBottom
          sx={{ textTransform: "uppercase" }}
        >
          {servicesData.title}
        </Typography>

        <Typography
          variant="h4"
          align="center"
          fontWeight={700}
          color="text.primary"
          sx={{ mb: 6}}
        >
          {servicesData.subTitle}
        </Typography>

        <Grid container spacing={4}>
          {servicesData.services.slice(0, 3).map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <ServiceCard>
                <IconWrapper>{service.icon}</IconWrapper>
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }} color="text.secondary">
                  {service.description}
                </Typography>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>

        {/* Daha Fazlası Butonu */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText,
              borderRadius: "30px",
              px: 4,
              py: 1,
              transition: "0.3s",
              "&:hover": {
                bgcolor: theme.palette.primary.light,
                color: theme.palette.secondary.main, // Hover'da text rengi değişir
              },
            }}
            onClick={() => navigate('/services')} // Services sayfasına yönlendirme
          >
            Daha Fazlası
            <ArrowForwardIosIcon sx={{width: 15, height: 15}}/>
          </Button>
        </Box>
      </ContentWrapper>
    </BackgroundWrapper>
  );
};

export default ServicesSection;
