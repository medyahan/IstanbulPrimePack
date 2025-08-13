import { createTheme } from "@mui/material/styles";

const themeOrderTracking = createTheme({
  palette: {
    primary: {
        main: "#ff7518", // Ana renk (Turuncu)
        light: "#ff8d45",
        dark: "#f27500",
        contrastText: "#ffffff",
    },
    secondary: {
        main: "#3b444b", // Koyu gri (Ana renk)
        light: "#586066", // Açık gri tonu
        dark: "#292f33", // Daha koyu gri tonu
        contrastText: "#ffffff", // Beyaz metin rengi
    },
    background: {
      default: "#F5F5F5", // Açık gri arka plan
      paper: "#ffffff", // Kartlar için beyaz
    },
    text: {
      primary: "#333333",
      secondary: "#757575",
    },
    warning: {
      main: "#FF9800",
    },
    success: {
      main: "#4CAF50",
    },
    error: {
      main: "#D32F2F",
    },
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
  },
});

export default themeOrderTracking;
