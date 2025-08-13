import { Box, Typography, Grid, IconButton, Link, Container, Divider } from "@mui/material";
import { Instagram, LinkedIn, Email, LocationOn, WhatsApp } from "@mui/icons-material";
import footerData from "../data/footerData";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "secondary.dark", pt: 6 }} zIndex={1}>
      <Container>
        <Grid container spacing={4} justifyContent="center">

          {/* Sol Alan - Şirket Bilgisi */}
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={footerData.companyInfo.logo}
              alt="Medya Ambalaj Logo"
              sx={{ height: 40, mb: 2 }}
            />
            <Typography variant="body2" sx={{ mt: 0, opacity: 0.8 }}>
              {footerData.companyInfo.description}
            </Typography>
          </Grid>

          {/* Orta Alan - Navigation */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" fontWeight="bold">Hızlı Menü</Typography>
            {footerData.quickMenu.map((menuItem, index) => (
              <Link
                key={index}
                href={menuItem.link}
                color="inherit"
                underline="hover"
                display="block"
                sx={linkStyle}
              >
                {menuItem.label}
              </Link>
            ))}
          </Grid>

          {/* Orta Alan - Portfolio */}
<Grid item xs={6} md={2}>
  <Typography variant="h6" fontWeight="bold">Ürün Çeşitleri</Typography>
  {footerData.productCategories.map((category, index) => (
    <Link
      key={index}
      href={`/products?category=${encodeURIComponent(category)}`}
      color="inherit"
      underline="hover"
      display="block"
      sx={linkStyle}
    >
      {category}
    </Link>
  ))}
</Grid>

          {/* Sağ Alan - İletişim */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold">İletişim</Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
              <Email />
              <Link href={`mailto:${footerData.contactInfo.email}`} color="inherit" underline="none">
                {footerData.contactInfo.email}
              </Link>
            </Box>

            <Box sx={{ display: "flex", alignItems: "top", gap: 1, mt: 1 }}>
              <LocationOn />
              <Link
                href={footerData.contactInfo.locationLink}
                color="inherit"
                underline="none"
                target="_blank"
              >
                {footerData.contactInfo.location}
              </Link>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
              <WhatsApp />
              <Link
                href={footerData.contactInfo.whatsappLink}
                color="inherit"
                underline="none"
                target="_blank"
              >
                {footerData.contactInfo.whatsapp}
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Alt Bilgi Alanı */}
        <Divider sx={{ mt: 10, bgcolor: "secondary.dark" }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}
        >
          <Typography variant="body2">
            {footerData.copyright}
          </Typography>

          {/* Sosyal Medya - Sağ Alt Köşe */}
          <Box>
            <IconButton href={footerData.socialLinks.instagram} target="_blank" sx={socialIconStyle}>
              <Instagram />
            </IconButton>
            <IconButton href={footerData.socialLinks.linkedin} target="_blank" sx={socialIconStyle}>
              <LinkedIn />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

// Link Stili
const linkStyle = {
  opacity: 0.8,
  "&:hover": { opacity: 1, color: "secondary.dark" },
};

// Sosyal Medya İkon Stili
const socialIconStyle = {
  color: "secondary.dark",
};

export default Footer;
