import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import StoreButton from "../../StoreButton";
import UserCard from "../../Common/UserCard";
export default function HistoryRace() {
  const svg1 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <circle cx="6" cy="6" r="6" fill="#3D73EC" />
    </svg>
  );
  const svg2 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <circle cx="6" cy="6" r="6" fill="#20AC48" />
    </svg>
  );

  return (
    <Box
      sx={{
        backgroundImage: "url('/Images/map.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundColor: "#242424",
      }}
    >
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
              mt: { md: 10, xs: 4 },
            }}
          >
            Track Your Flight Stats
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
            Join the Great Flight History Race
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
              maxWidth: "850px",
              color: "#FFF",
              mt: 3,
              pb: { md: 10, sm: 0 },
            }}
          >
            We started an amazing race in the air that tracks flight history,
            major flying stats and ranks its fliers. Win badges and achievements
            for flying adventures and compare stats with your friends and your
            social following There&#39;s nothing like it
          </Typography>
        </Box>

        <Grid container mt={40} justifyContent={"center"}>
          <Grid item xs={0} lg={1} md={1}></Grid>
          <Grid item xs={6} lg={3} md={4}>
            <UserCard
              i={0}
              names="Lesli Opper"
              miles="565 089"
              hours="612"
              flight="134"
              user={"/Images/user2.svg"}
              status={svg1}
            />
          </Grid>
          <Grid item xs={0} lg={2} md={1}></Grid>

          <Grid item xs={0} lg={2} md={1}></Grid>
          <Grid item xs={6} lg={3} md={4}>
            <UserCard
              i={1}
              names="Rob Merman"
              miles="534 122"
              hours="605"
              flight="156"
              user={"/Images/user1.svg"}
              status={svg2}
            />
          </Grid>
          <Grid item xs={0} lg={1} md={1}></Grid>
        </Grid>
        {/* {"map section"} */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: { md: 10, xs: 1 },
          }}
        >
          <StoreButton />
        </Box>
      </Container>
    </Box>
  );
}
