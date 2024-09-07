// Sidebar.js
import React, { useState } from "react";
import {
  Box,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Search as SearchIcon, Menu as MenuIcon } from "@mui/icons-material";

// List of categories
const categories = [
  // (Your categories list here)
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Box
      sx={{
        width: isOpen ? 250 : 0, // Toggle width based on state
        bgcolor: "background.paper",
        padding: isOpen ? 2 : 0,
        borderRight: isOpen ? "1px solid #ddd" : "none",
        position: "fixed",
        height: "100vh",
        overflowY: "auto", // To enable scrolling if content overflows
        transition: "width 0.3s, padding 0.3s", // Smooth transition for opening/closing
        zIndex: 1200, // Ensure the sidebar is above other content
      }}
    >
      {isOpen && (
        <>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              placeholder="Search..."
              sx={{ flexGrow: 1, mr: 1 }}
            />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {categories.map((category, index) => (
              <ListItem
                button
                component={Link}
                to={`/category/${category.toLowerCase().replace(/ /g, "-")}`}
                key={index}
                sx={{ bgcolor: "primary.main", color: "white" }} // Adjust background and text color
              >
                <ListItemText primary={category} />
              </ListItem>
            ))}
          </List>
        </>
      )}
      <IconButton
        sx={{
          position: "absolute",
          top: 16,
          right: -40, // Position the toggle button outside of the sidebar
          zIndex: 1300,
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuIcon />
      </IconButton>
    </Box>
  );
};

export default Sidebar;
