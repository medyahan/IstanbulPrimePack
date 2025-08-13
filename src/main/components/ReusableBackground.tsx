import { Box } from "@mui/material";
import { ReactNode } from "react";
import { useTheme } from "@mui/material/styles";

interface BackgroundProps {
  children: ReactNode;
}

const ReusableBackground = ({ children }: BackgroundProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        background: theme.palette.background.default,
        minHeight: "100vh",
        overflow: "hidden" // Fazla kayma sorununu önler
      }}
    >
      {/* Eğimli (Yay Şeklinde) Arka Plan */}
      <Box
        sx={{
          position: "absolute",
          top: "270px",  // Daha stabil bir sabit konum
          left: 0,
          width: "100%",
          height: "4000px",  // Sabit yükseklik ekledik
          backgroundColor: theme.palette.primary.light,
          borderTopLeftRadius: "50% 10%",
          borderTopRightRadius: "50% 10%",
          zIndex: 0
        }}
      />

      {/* İçerik Alanı */}
      <Box sx={{ position: "relative", zIndex: 1 }}>{children}</Box>
    </Box>
  );
};

export default ReusableBackground;
