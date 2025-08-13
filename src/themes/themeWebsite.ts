import { createTheme } from "@mui/material/styles";

const themeWebsite = createTheme({
  palette: {
    primary: {
      main: "#DDF400",
      light: "#EFFF8C",
      dark: "#B2C700",
      contrastText: "#000000",
    },
    secondary: {
      main: "#3A3A3A",
      light: "#606060",
      dark: "#212121",
      contrastText: "#ffffff",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#212121",
      secondary: "#6c757d",
    },
    success: {
      main: "#28a745",
      light: "#5cd65c",
      dark: "#1e7e34",
      contrastText: "#ffffff",
    },
    error: {
      main: "#dc3545",
      light: "#ff6b6b",
      dark: "#b02a37",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#FABF22",
      light: "#FFDA6A",
      dark: "#E0A600",
      contrastText: "#000000",
    },
    info: {
      main: "#00CED1",
      light: "#4DD0E1",
      dark: "#008B8B",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: `"Poppins", "Roboto", "Arial", sans-serif`,
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      color: "#212121",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#212121",
    },
    h3: {
      fontSize: "1.8rem",
      fontWeight: 700,
      color: "#212121",
    },
    subtitle1: {
      fontSize: "1.1rem",
      color: "#6c757d",
    },
    body1: {
      fontSize: "1rem",
      color: "#6c757d",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 40,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.08)",
          borderRadius: "20px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 700,
          borderRadius: "50px",
          padding: "12px 32px",
          "&:hover": {
            backgroundColor: "#EFFF8C",
            boxShadow: "0px 4px 12px rgba(184, 205, 27, 0.61)",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: 1.5,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: "#B2C700", // Focus olduğunda border rengi
            },
          },
          '& .MuiInputLabel-root': {
            '&.Mui-focused': {
              color: "#B2C700", // Focus olduğunda label rengi
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: "#B2C700", // Focus olduğunda border rengi
          },
          '&.Mui-focused + .MuiInputLabel-root': {
            color: "#B2C700", // Focus olduğunda label rengi
          },
        },
      },
    },
  },
});

export default themeWebsite;