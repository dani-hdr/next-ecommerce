import { createTheme } from "@mui/material";

const theme = createTheme({
  direction: "rtl",
  shape: {
    borderRadius: "10px",
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "15px",
          borderRadius: "15px",
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            borderRadius: (theme) => theme.shape.borderRadius,
          },
        },
      },
    },
  },
  shadows: [
    "",
    " rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
    "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
    "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
    " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
  ],
  palette: {
    background: {
      default: "#fefdfe",
    },
    common: {
      white: "#fff",
    },
    primary: {
      main: "#ec6c20",
    },
    secondary: {
      main: "#070349",
      light: "#f5f5f5",
    },
    text: {
      primary: "#00030c",
      secondary: "#8a8c8f",
    },
  },
  typography: {
   
    fontFamily: ["Yekan Bakh", "sans-serif"].join(","),
    fontWeightThin: 100,
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightMedium: 700,
    fontWeightBold: 800,
    fontWeightHeavy: 900,
  },
});



export default theme;
