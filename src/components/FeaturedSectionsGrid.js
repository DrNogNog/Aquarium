import React from "react";
import { Grid2 as Grid, Box, Typography } from "@mui/material";

const FeaturedSectionsGrid = () => {
  const featuredSections = [
    {
      image: "https://via.placeholder.com/600x400?text=Image+1",
      description: "Curated Guides",
      link: "/category/curated-guides",
      color: "#003366", // Deep Blue
    },
    {
      image: "https://via.placeholder.com/600x400?text=Image+2",
      description: "Aquarium Parts",
      link: "/category/aquarium-parts",
      color: "#004d40", // Deep Teal
    },
    {
      image: "https://via.placeholder.com/600x400?text=Image+3",
      description: "Featured Aquariums",
      link: "/category/featured-aquariums",
      color: "#00796b", // Rich Green
    },
    {
      image: "https://via.placeholder.com/600x400?text=Image+4",
      description: "Custom Aquariums",
      link: "/category/custom-aquariums",
      color: "#004d40", // Deep Teal
    },
    {
      image: "https://via.placeholder.com/600x400?text=Image+5",
      description: "Aquascape Tank",
      link: "/category/aquascape-tank",
      color: "#003366", // Deep Blue
    },
    {
      image: "https://via.placeholder.com/600x400?text=Image+6",
      description: "Educational Aquarium",
      link: "/category/educational-aquarium",
      color: "#6c757d", // Elegant Gray
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        height: "100vh",
        width: "100%",
        padding: 1, // Add some padding to prevent overflow
      }}
    >
      <Grid
        container
        spacing={1} // Adjust spacing if needed
        sx={{
          maxWidth: "1200px", // Limit the maximum width of the grid
          width: "100%", // Full width but limited by maxWidth
        }}
      >
        {featuredSections.map((section, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              component="a"
              href={section.link}
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                backgroundColor: section.color,
                textDecoration: "none",
                color: "#fff",
                borderRadius: 1, // Rounded corners
                overflow: "hidden",
                "&:hover": {
                  opacity: 0.9,
                },
              }}
            >
              <Box
                component="img"
                src={section.image}
                alt={section.description}
                sx={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover", // Maintain aspect ratio and cover the box
                }}
              />
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 2,
                }}
              >
                <Typography variant="h6" align="center">
                  {section.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedSectionsGrid;
