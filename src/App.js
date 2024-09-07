import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import AquariumCard from "./components/AquariumCard";
import PartsCard from "./components/PartsCard";
import "./styles.css";

// Define the theme
const theme = createTheme({
  typography: {
    fontFamily: "sans-serif",
  },
  palette: {
    lightRed: {
      main: "#FF6F6F",
    },
    lightBlue: {
      main: "#ADD8E6",
    },
    lightYellow: {
      main: "#FFFFE0",
    },
    warning: {
      main: "#FFC107",
    },
    error: {
      main: "#F44336",
    },
    success: {
      main: "#4CAF50",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          boxSizing: "border-box",
        },
        "*": {
          boxSizing: "inherit",
        },
      },
    },
  },
});

// Main App component
const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Header />
      <Container sx={{ paddingTop: 4 }}>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Typography variant="h4" gutterBottom>
                  Featured Aquariums
                </Typography>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6} md={4}>
                    <AquariumCard
                      image="/images/AcquariusOne.png"
                      title="Elegant Aquarium"
                      description="A beautifully designed aquarium."
                      buyLinks={[
                        "http://www.amazon.com/dp/B07H6GZCPH/ref=nosim?tag=acquariumsetu-20",
                        "http://www.amazon.com/dp/B0CD56ZTH1/ref=nosim?tag=acquariumsetu-20",
                      ]}
                    />
                  </Grid>
                  {/* Add more AquariumCard components as needed */}
                </Grid>

                <Typography variant="h4" gutterBottom sx={{ marginTop: 8 }}>
                  Aquarium Parts
                </Typography>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6} md={4}>
                    <PartsCard
                      image="/images/FilterPump.png"
                      title="Filter Pump"
                      description="High-quality filter pump."
                      buyLinks={[
                        "https://example.com/buy-part-1",
                        "https://example.com/buy-part-2",
                      ]}
                    />
                  </Grid>
                  {/* Add more PartsCard components as needed */}
                </Grid>
              </div>
            }
          />
          <Route
            path="/parts"
            element={
              <div>
                <Typography variant="h4" gutterBottom>
                  Aquarium Parts
                </Typography>
                <Grid container spacing={4}>
                  {/* Add PartsCard components for parts listing */}
                </Grid>
              </div>
            }
          />
        </Routes>
      </Container>
    </Router>
  </ThemeProvider>
);

export default App;
