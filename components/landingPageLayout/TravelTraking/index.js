import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import TravelTrakingSlider from "../../Common/TravelTrakingSlider";

export default function TravelTraking() {
  return (
    <Box sx={{ backgroundColor: "#242424", pb: 5 }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            alignSelf: "stretch",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                md: "20px",
                sm: "18px",
                xs: "16px",
              },
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: { md: "52px", xs: "40px" },
              color: "#8F8F8F",
              textAlign: "center",
              mt: 4,
            }}
          >
            Nothing flies quite like App in the Air
          </Typography>
          <Typography
            sx={{
              fontSize: {
                md: "42px",
                sm: "38px",
                xs: "26px",
              },
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: { md: "52px", xs: "35px" },
              color: "#FFF",
              textAlign: "center",
              maxWidth: "800px",
              mt: 2,
            }}
          >
            Pilot-grade travel tracking at every phase of the airport journey &
            beyond
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
              lineHeight: { md: "26px", xs: "25px" },
              maxWidth: "790px",
              width: "100%",
              color: "#FFF",
              mt: 3,
            }}
          >
            From booking, packing, check-in, boarding, to the hotel and back –
            App in the Air orchestrates 65+ real-time travel features to guide
            you throughout each phase of the airport travel journey with ease.
          </Typography>
        </Box>
        <Box mt={5}>
          <TravelTrakingSlider />
        </Box>
      </Container>
    </Box>
  );
}
