// Header.js
import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Import MenuIcon from MUI
import { Link } from "react-router-dom";

const Header = ({ onToggleSidebar }) => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={onToggleSidebar}
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Aquarium Elegance
      </Typography>
      <Button color="inherit" component={Link} to="/">
        Home
      </Button>
      <Button color="inherit" component={Link} to="/category/curated-guides">
        Curated Guides
      </Button>
      <Button color="inherit" component={Link} to="/category/aquarium-parts">
        Aquarium Parts
      </Button>
      <Button
        color="inherit"
        component={Link}
        to="/category/featured-aquariums"
      >
        Featured Aquariums
      </Button>
    </Toolbar>
  </AppBar>
);

export default Header;
