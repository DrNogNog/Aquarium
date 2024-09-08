import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const FeaturedSectionsGrid = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
      width: "100%",
      padding: 0,
      margin: 0,
    }}
  >
    <Grid
      container
      spacing={0}
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      {/* Top Row */}
      <Grid container item xs={12} spacing={0} sx={{ display: "flex" }}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box
              sx={{
                backgroundColor: ["#003366", "#004d40", "#005662"][index], // Different color for each grid item
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 0,
                textAlign: "center",
                color: "white",
                padding: 1, // Add padding to prevent overflow
              }}
            >
              <Box>
                <Typography variant="h6">Section {index + 1}</Typography>
                <Typography variant="body1">
                  Description for section {index + 1}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Bottom Row */}
      <Grid container item xs={12} spacing={0} sx={{ display: "flex" }}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Grid item xs={12} sm={4} key={index + 3}>
            <Box
              sx={{
                backgroundColor: ["#003333", "#004d33", "#006d40"][index], // Different color for each grid item
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 0,
                textAlign: "center",
                color: "white",
                padding: 1, // Add padding to prevent overflow
              }}
            >
              <Box>
                <Typography variant="h6">Section {index + 4}</Typography>
                <Typography variant="body1">
                  Description for section {index + 4}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Box>
);

export default FeaturedSectionsGrid;
