import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Box, Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CategoryPage from "./components/CategoryPage";
import ProductPage from "./components/ProductPage";
import FeaturedSectionsGrid from "./components/FeaturedSectionsGrid";
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
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar initially closed

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const MainContent = () => {
    const location = useLocation();

    return (
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
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Header onToggleSidebar={toggleSidebar} isSidebarOpen={sidebarOpen} />
        {location.pathname === "/" && <FeaturedSectionsGrid />}
        <Container
          sx={{
            paddingTop: 4,
            height: "calc(100vh - 64px)", // Adjust height to fit below header
            display: location.pathname === "/" ? "none" : "block", // Hide container on FeaturedSectionsGrid page
          }}
        >
          <Routes>
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
          </Routes>
        </Container>
      </Box>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box display="flex">
          {/* Sidebar */}
          {sidebarOpen && <Sidebar />}

          <MainContent />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
