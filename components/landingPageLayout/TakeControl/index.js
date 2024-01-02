import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import CoverImage from "../../../public/Images/HeroSection/FullMobile.png";
import CoverImage2 from "../../../public/Images/HeroSection/Mockup.png";
import QrCode from "../../../public/Images/HeroSection/qrcode.svg";
import Image from "next/image";
import StoreButton from "../../StoreButton";
export default function TakeControl() {
  return (
    <Box sx={{ backgroundColor: "#242424" }}>
      <Box
        sx={{
          backgroundImage: "url('/Images/HeroSection/flight.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "300px -45vh",
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={8}
            alignItems="center"
            textAlign={{ md: "unset", xs: "center" }}
          >
            <Grid item xs={12} md={7}>
              <Box
                component={Image}
                src={QrCode}
                alt="Truck Image"
                height="auto"
                maxWidth={"120px"}
                sx={{ display: { md: "block", xs: "none" } }}
              />
              <Typography
                sx={{
                  fontSize: {
                    md: "42px",
                    sm: "38px",
                    xs: "35px",
                  },
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "46px",
                  color: "#FFF",
                  width: { md: "65%", sm: "100%" },
                  mt: { md: 2, xs: "-5%" },
                }}
              >
                Take control of airport travel & enjoy the trip
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    md: "16px",
                    sm: "14px",
                    xs: "14px",
                  },
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "22px",
                  color: "#FFF",
                  width: { md: "60%", sm: "100%" },
                  mt: 2,
                }}
              >
                Download the go to travel app and save time, stress & money at
                the airport and beyond - while having a little fun along the
                way.
              </Typography>
              <Box
                sx={{
                  justifyContent: { md: "start", xs: "center" },
                  display: "flex",
                }}
              >
                <StoreButton />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              mt={{ md: 10, xs: 8 }}
              order={{ md: "unset", xs: -1 }}
              display={{ xs: "flex", md: "block" }}
              justifyContent="center"
            >
              <Box
                sx={{ display: { md: "block", xs: "none" } }}
                component={Image}
                src={CoverImage}
                alt="Truck Image"
                height="auto"
                width="424.806px"
                maxWidth={"100%"}
              />
              <Box
                sx={{ display: { md: "none", xs: "block" } }}
                component={Image}
                src={CoverImage2}
                alt="Truck Image"
                height="auto"
                width="424.806px"
                maxWidth={"100%"}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
