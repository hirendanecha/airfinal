import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import card from "../../../public/user.png";
import time from "../../../public/watch.png";
import plain from "../../../public/plain.png";

import Forbes from "../../../public/Images/WhenYouFly/Forbes logo.svg";
import EditorChoice from "../../../public/Images/WhenYouFly/Editor's Choice.svg";
import Wired from "../../../public/Images/WhenYouFly/Wired_logo 1.svg";
import CbsNews from "../../../public/Images/WhenYouFly/CBS_News 1.svg";
import TravelLeisure from "../../../public/Images/WhenYouFly/Travel+ leisure.svg";

const logos = [Forbes, EditorChoice, Wired, CbsNews, TravelLeisure];

import React from "react";
import Image from "next/image";
const data = [
  {
    img: card,
    count: "7.6M",
    title: "registered users ",
    description: "Available in 52-countries for every airport and airline",
  },
  {
    img: plain,
    count: "60.8M",
    title: "flights tracked",
    description: "And counting...",
  },
  {
    img: time,
    count: "3.8M",
    title: "hours saved",
    description:
      "From delays, flight changes, traffic, waiting in lines & for rides",
  },
];

export default function WhenYouFly() {
  const Img = styled(Image)(({ theme }) => ({
    width: "auto !important",
    height: "30px !important",
  }));
  return (
    <Box sx={{ backgroundColor: "#FFF" }}>
      <Container maxWidth="xl">
        <Box>
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
                  md: "42px",
                  sm: "38px",
                  xs: "32px",
                },
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: { md: "52px", xs: "40px" },
                color: "#000",
                textAlign: "center",
                mt: 10,
              }}
            >
              Get the Award-Winning Travel App for When You Fly
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  md: "20px",
                  sm: "18px",
                  xs: "15px",
                },
                fontStyle: "normal",
                fontWeight: 500,
                textAlign: "center",
                lineHeight: { md: "26px", xs: "20px" },
                maxWidth: "900px",
                color: "#8F8F8F",
                mt: 3,
              }}
            >
              App in the Air is a guiding beacon for frequent flyers. We’ve been
              tracking flights, reducing airport frustrations, and adding fun to
              the flight experience for 11+ years and counting
            </Typography>
          </Box>
        </Box>
        <Box mt={6}>
          <Grid container spacing={5}>
            {data?.map((ele) => {
              return (
                <>
                  <Grid item xs={12} md={4}>
                    <Card
                      sx={{
                        minWidth: 275,
                        backgroundColor: "#F5F5F5",
                        borderRadius: "26px",
                        padding: { md: 2, xs: 0 },
                        position: "relative",
                        ":before": {
                          backgroundImage: `url(${ele.img.src})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: {
                            xs: "contain",
                            md: "cover",
                          },
                          backgroundPosition: {
                            xs: "right",
                            md: "center",
                          },
                          content: "''",
                          width: "100%",
                          position: "absolute",
                          height: "100%",
                          top: 0,
                          right: 0,
                          zIndex: -1,
                        },
                        height: { md: "350px", sm: "200px", xs: "200px" },
                        zIndex: 1,
                      }}
                    >
                      <CardContent>
                        <Typography
                          sx={{
                            fontSize: {
                              md: "50px",
                              sm: "28px",
                              xs: "26px",
                            },
                            fontStyle: "normal",
                            fontWeight: 600,
                            color: "#000",
                            lineHeight: "30px",
                            mt: 1,
                          }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {ele.count}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: {
                              md: "32px",
                              sm: "24px",
                              xs: "22px",
                            },
                            fontStyle: "normal",
                            fontWeight: 600,
                            color: "#000",
                            lineHeight: "30px",
                          }}
                          color="text.secondary"
                        >
                          {ele.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: {
                              md: "20px",
                              sm: "15px",
                              xs: "14px",
                            },
                            fontStyle: "normal",
                            fontWeight: 500,
                            color: "#8F8F8F",
                            lineHeight: "26px",
                            mt: 2,
                            maxWidth: { md: "320px", xs: "200px" },
                          }}
                        >
                          {ele.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </>
              );
            })}
          </Grid>
          <Box
            mt={5}
            sx={{
              width: "100%",
            }}
          >
            <Box
              sx={{
                mt: 5,
                mb: 5,
                width: "100%",
              }}
            >
              <Grid
                container
                spacing={{ xs: 0, md: 5 }}
                sx={{
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Grid item xs={0} md={3}>
                  <Divider />
                </Grid>
                <Grid item xs={12} md={6} width={"100%"}>
                  <Box
                    sx={{
                      display: "flex",
                      margin: "auto",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: { xs: 3, xl: 6 },
                    }}
                  >
                    {logos?.map((Logo, i) => {
                      return (
                        <Box key={i}>
                          <Img src={Logo} alt="logo" />
                        </Box>
                      );
                    })}
                  </Box>{" "}
                </Grid>
                <Grid item xs={0} md={3}>
                  {" "}
                  <Divider />
                </Grid>
              </Grid>
            </Box>
            <Divider />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
