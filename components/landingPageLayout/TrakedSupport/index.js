"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Rating,
  Stack,
  Typography,
  styled,
} from "@mui/material";

import img1 from "../../../public/Images/TripTraked/img1.png";
import img2 from "../../../public/Images/TripTraked/img2.png";
import img3 from "../../../public/Images/TripTraked/img3.png";
import img4 from "../../../public/Images/TripTraked/img4.png";

const reviews = [
  {
    title: "The Flying Community",
    description:
      "Frequent flyers leave user-generated tips to guide you through new airports.",
    img: img1,
  },
  {
    title: "Members Nearby",
    description:
      "Make friends at the airport! Chat with other App in the Air members nearby.",
    img: img2,
  },
  {
    title: "24/7 Support Team",
    description:
      "App in the Air provides a 24/7 support team around every trip  tracked",
    img: img3,
  },
  {
    title: "Friends of App in the Air",
    description:
      "Join our group of power-users & frequent flyers to share adventures, flex stats, and support each other while  flying.",
    img: img4,
  },
];

function TrakedSupport() {
  return (
    <Box component="section" py={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}>
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
            You’ll Never Fly Alone with App in the Air
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
              color: "#000",
              textAlign: "center",
              maxWidth: "800px",
              mt: 2,
            }}
          >
            Every Trip Tracked is Supported
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
              color: "#000",
              mt: 3,
            }}
          >
            Every trip tracked on App in the Air is backed by a community of
            7-million frequent flyers, aviation geeks, and a 24-7 customer
            support team that is dedicated to making your next airport journey a
            success.
          </Typography>
        </Box>
        <Box
          component={Swiper}
          slidesPerView={1}
          spaceBetween={24}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          a11y={{
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
          }}
          modules={[Pagination, Navigation]}
          sx={{
            mt: { xs: 6, sm: 7, lg: 8, xl: 9 },
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            450: {
              slidesPerView: 1.5,
            },
            900: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          <Grid spacing={5}>
            {reviews.map((review, i) => {
              return (
                <SwiperSlide key={i}>
                  <Grid item xs={12} md={4}>
                    <Card
                      sx={{
                        minWidth: 275,
                        backgroundColor: "#F5F5F5",
                        borderRadius: "26px",
                        padding: 1,
                        position: "relative",
                        ":before": {
                          backgroundImage: `url(${review.img.src})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: {
                            xs: "contain",
                            md: "auto",
                          },
                          backgroundPosition: {
                            xs: "right bottom",
                            md: "right bottom",
                          },
                          content: "''",
                          width: "100%",
                          position: "absolute",
                          height: "100%",
                          top: 0,
                          right: 0,
                          zIndex: -1,
                        },
                        height: "440px",
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
                          {review.count}
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
                          {review.title}
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
                          {review.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </SwiperSlide>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default TrakedSupport;
