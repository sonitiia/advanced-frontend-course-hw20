import * as React from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import "@fontsource/nunito-sans";

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#D0BFF9",
      light: "#D9CBFA",
      dark: "#9185AE",
      contrastText: "#000",
    },
    secondary: {
      main: "#b388ff",
      light: "#C29FFF",
      dark: "#7D5FB2",
      contrastText: "#000",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          minHeight: "100%",
          fontFamily: "Nunito Sans",
          background: "#ffffff",
        },
        body: {
          height: "100%",
          backgroundColor: "transparent",
        },
        "#root, main": {
          height: "100%",
          display: "flex",
          flexDirection: "column",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: "fit-content",
          boxShadow: "none",
          ":hover": {
            boxShadow: "none",
          },
          fontWeight: "bolder",
        },
      },
    },
    MuiImageList: {
      styleOverrides: {
        root: {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        },
      },
    },
  },
  spacing: 4,
  shape: {
    borderRadius: 12,
    containerBorderRadius: 24,
  },
  typography: {
    fontFamily: "Nunito Sans",
  },
});

const MuiTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiTheme;
