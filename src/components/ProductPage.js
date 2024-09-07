import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Box } from "@mui/material";

// Mock data for demonstration
const productData = {
  1: {
    image: "/images/AcquariusOne.png",
    title: "Elegant Aquarium",
    description: "A beautifully designed aquarium.",
    buyLinks: [
      "http://www.amazon.com/dp/B07H6GZCPH/ref=nosim?tag=acquariumsetu-20",
    ],
  },
  // More products
};

const ProductPage = () => {
  const { productId } = useParams();
  const product = productData[productId];

  if (!product) return <Typography variant="h6">Product not found</Typography>;

  return (
    <Box>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100%", maxWidth: "600px" }}
      />
      <Typography variant="h4">{product.title}</Typography>
      <Typography variant="body1">{product.description}</Typography>
      {product.buyLinks.map((link, index) => (
        <a key={index} href={link} target="_blank" rel="noopener noreferrer">
          Buy Now
        </a>
      ))}
    </Box>
  );
};

export default ProductPage;
