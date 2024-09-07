import React from "react";
import { useParams } from "react-router-dom";
import { Grid2 as Grid, Typography } from "@mui/material";
import AquariumCard from "./AquariumCard";
import PartsCard from "./PartsCard";

// Mock data for demonstration
const data = {
  "curated-guides": [
    {
      image: "/images/RecommendedProduct.png",
      title: "Top Pick Aquarium",
      description: "Our top pick for aquariums with great features.",
      buyLinks: [
        "http://www.amazon.com/dp/B07H6GZCPH/ref=nosim?tag=acquariumsetu-20",
      ],
    },
    // More products
  ],
  "aquarium-parts": [
    {
      image: "/images/FilterPump.png",
      title: "Filter Pump",
      description: "High-quality filter pump.",
      buyLinks: ["https://example.com/buy-part-1"],
    },
    // More parts
  ],
  "featured-aquariums": [
    {
      image: "/images/AcquariusOne.png",
      title: "Elegant Aquarium",
      description: "A beautifully designed aquarium.",
      buyLinks: [
        "http://www.amazon.com/dp/B07H6GZCPH/ref=nosim?tag=acquariumsetu-20",
      ],
    },
    // More aquariums
  ],
};

const CategoryPage = () => {
  const { categoryName } = useParams();

  if (!categoryName) {
    // Handle case where categoryName is undefined
    return <Typography variant="h6">Category not found</Typography>;
  }

  const items = data[categoryName] || [];

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {categoryName.replace(/-/g, " ").toUpperCase()}
      </Typography>
      <Grid container spacing={4}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            {categoryName === "curated-guides" ||
            categoryName === "featured-aquariums" ? (
              <AquariumCard {...item} />
            ) : (
              <PartsCard {...item} />
            )}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CategoryPage;
