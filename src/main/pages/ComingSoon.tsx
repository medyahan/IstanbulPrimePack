import { Typography, Box, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";
import logo from "../../assets/logo/logo-vertical-light.png"; 

// Açık renkli arka plan ve yumuşak geçişler için stil
const StyledContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100vw", // Tam ekran kaplaması için
  textAlign: "center",
  background: "linear-gradient(135deg, #FBE90B 0%, #FFF 100%)", // Açık Sarı - Beyaz geçişli arka plan
  color: theme.palette.primary.main, // Tema ana rengi (sarı)
  overflow: "hidden",
}));

// Gri başlık metni
const DarkText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: "bold",
}));

// Açık gri vurgu metni
const LightText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 500,
}));

const ComingSoon = () => {
  return (
    <StyledContainer>
      {/* Logo */}
      <Box sx={{ mb: 3 }}>
        <img src={logo} alt="Istanbul Prime Pack Logo" style={{ width: "450px" }} />
      </Box>

      {/* Başlık */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ mt: 2 }}>
          <DarkText variant="h5">Web Sitemiz Yapım Aşamasında 🚀</DarkText>
        </Box>
      </Box>

      {/* Yükleme Animasyonu */}
      <CircularProgress sx={{ color: "#FBE90B", animation: "pulse 1.5s infinite ease-in-out" }} />

      {/* Açıklama Metni */}
      <LightText variant="body1" sx={{ mt: 3 }}>
        Yakında sizlerleyiz! Bizi takip etmeye devam edin.
      </LightText>

      {/* İletişim Bilgileri */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="body2" sx={{ color: "#3A3A3A", fontWeight: "bold" }}>
         İletişim için: info@istanbulprimepack.com
        </Typography>
        <Typography variant="body2" sx={{ color: "#3A3A3A", fontWeight: "bold" }}>
          Teklif almak için: sales@istanbulprimepack.com
        </Typography>
      </Box>
    </StyledContainer>
  );
};

export default ComingSoon;
