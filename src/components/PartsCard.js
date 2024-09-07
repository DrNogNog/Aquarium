import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Stack,
} from "@mui/material";

const PartsCard = ({ image, title, description, buyLinks }) => (
  <Card>
    <CardMedia component="img" height="140" image={image} alt={title} />
    <CardContent>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body2" color="textSecondary">
        {description}
      </Typography>
      <Stack direction="column" spacing={1} sx={{ mt: 2 }}>
        {buyLinks.map((link, index) => (
          <Button key={index} href={link} variant="contained" color="primary">
            Buy Now {index + 1}
          </Button>
        ))}
      </Stack>
    </CardContent>
  </Card>
);

export default PartsCard;
