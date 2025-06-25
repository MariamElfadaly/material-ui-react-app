import React from "react";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import LeftBar from "../compnent/LeftBar";
import Feed from "../compnent/Feed";
import RightBar from "../compnent/RightBar";
import AppBarComponent from "../compnent/AppBar";

// Create dark theme for Facebook-like appearance
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1877f2",
    },
    secondary: {
      main: "#42a5f5",
    },
    background: {
      default: "#18191a",
      paper: "#242526",
    },
    text: {
      primary: "#e4e6ea",
      secondary: "#b0b3b8",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#18191a",
          color: "#e4e6ea",
        },
      },
    },
  },
});

function Layout() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ bgcolor: "#18191a", minHeight: "100vh" }}>
        <AppBarComponent />

        <Box sx={{ display: "flex", pt: 8 }}>
          <LeftBar />

          <Box
            sx={{
              flex: 1,
              ml: { xs: 0, md: "280px" },
              mr: { xs: 0, lg: "280px" },
              transition: "margin 0.3s ease",
            }}
          >
            <Feed />
          </Box>

          <RightBar />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Layout;
