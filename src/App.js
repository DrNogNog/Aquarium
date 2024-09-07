// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Grid2 as Grid, Typography, Box, Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CategoryPage from "./components/CategoryPage";
import ProductPage from "./components/ProductPage";
import "./styles.css";

// Define the theme with luxury colors
const theme = createTheme({
  typography: {
    fontFamily: "sans-serif",
  },
  palette: {
    primary: {
      main: "#004d40", // Deep teal for primary
    },
    secondary: {
      main: "#00796b", // Rich green for secondary
    },
    background: {
      default: "#f0f0f0", // Light gray background
    },
    text: {
      primary: "#212121", // Dark text for readability
    },
    accent: {
      main: "#ffd700", // Gold for accents
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
const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box display="flex">
          {/* Sidebar */}
          {sidebarOpen && <Sidebar />}

          <Box
            component="main"
            flex={1}
            sx={{
              marginLeft: {
                xs: 0, // No margin for small screens
                md: sidebarOpen ? "250px" : "0px", // Margin based on sidebar visibility
              },
              padding: 2,
              transition: "margin-left 0.3s", // Smooth transition for margin change
            }}
          >
            <Header
              onToggleSidebar={toggleSidebar}
              isSidebarOpen={sidebarOpen}
            />
            <Container sx={{ paddingTop: 4 }}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <div>
                      <Typography variant="h4" gutterBottom>
                        Featured Sections
                      </Typography>
                      <Grid container spacing={4}>
                        <Grid item xs={12} sm={4} md={4}>
                          <CategoryPage
                            title="Curated Guides"
                            description="Explore our expertly selected aquarium products and guides."
                            link="/category/curated-guides"
                          />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                          <CategoryPage
                            title="Aquarium Parts"
                            description="Find essential parts and accessories for your aquarium."
                            link="/category/aquarium-parts"
                          />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                          <CategoryPage
                            title="Featured Aquariums"
                            description="Discover our top picks for beautiful and functional aquariums."
                            link="/category/featured-aquariums"
                          />
                        </Grid>
                      </Grid>
                    </div>
                  }
                />
                <Route
                  path="/category/:categoryName"
                  element={<CategoryPage />}
                />
                <Route path="/product/:productId" element={<ProductPage />} />
              </Routes>
            </Container>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
