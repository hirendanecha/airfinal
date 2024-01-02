import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import card from "../../../public/Images/WhenYouFly/card.svg";
import time from "../../../public/Images/WhenYouFly/plain.svg";
import plain from "../../../public/Images/WhenYouFly/time.svg";

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
                        padding: 1,
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
                        height: { md: "300px", sm: "200px", xs: "200px" },
                        zIndex: 1,
                      }}
                    >
                      <CardContent>
                        <Typography
                          sx={{
                            fontSize: {
                              md: "34px",
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
                              md: "30px",
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
                              md: "16px",
                              sm: "15px",
                              xs: "14px",
                            },
                            fontStyle: "normal",
                            fontWeight: 500,
                            color: "#8F8F8F",
                            lineHeight: "26px",
                            mt: 2,
                            maxWidth: "200px",
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
          <Box mt={5}>
            <Divider />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 5,
                rowGap: 0,
                flexWrap: "wrap",
              }}
            >
              {logos?.map((Logo, i) => {
                return (
                  <Box key={i}>
                    <Image src={Logo} width={100} height={100} />
                  </Box>
                );
              })}
            </Box>
            <Divider />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
