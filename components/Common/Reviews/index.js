import { Box, Typography } from "@mui/material";
import React from "react";
import ReviewSlider from "../MobileMap/ReviewSlider";

export default function Reviews() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          alignSelf: "stretch",
          backgroundColor: "#242424",
          pt: { md: 15, xs: 1 },
        }}
      >
        <Typography
          sx={{
            fontSize: {
              md: "38px",
              sm: "38px",
              xs: "26px",
            },
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: { md: "52px", xs: "35px" },
            color: "#FFF",
            textAlign: "center",
            maxWidth: "800px",
            mt: 5,
          }}
        >
          19,000+ 5-Star Reviews
        </Typography>
        <Typography
          sx={{
            fontSize: {
              md: "20px",
              sm: "15px",
              xs: "15px",
            },
            fontStyle: "normal",
            fontWeight: 500,
            textAlign: "center",
            lineHeight: { md: "26px", xs: "23px" },
            maxWidth: "600px",
            color: "#FFF",
            mt: 3,
          }}
        >
          App in the Air is a preferred travel app by frequent flyers and
          aviation lovers from around the world.
        </Typography>
      </Box>
      <ReviewSlider />
    </>
  );
}
