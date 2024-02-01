import WeGoing from "../../../public/Images/TravelTraking/Pic (11).png";
import Baggage from "../../../public/Images/TravelTraking/Pic (12).png";
import Destination from "../../../public/Images/TravelTraking/Pic (13).png";
import CarRent from "../../../public/Images/TravelTraking/Pic (14).png";
import Location from "../../../public/Images/TravelTraking/Pic (15).png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import * as ReactDOMServer from "react-dom/server";

const Img = styled(Image)(({ theme }) => ({
  width: "752px !important",
  height: "529px !important",
  maxWidth: "100%",
  [theme.breakpoints.down("sm")]: {
    width: "auto !important",
    height: "300px !important",
  },
}));
const data = [
  {
    data: [
      {
        heading: "Exclusive Booking",
        title: "Where are We Going?",
        description:
          "Every good trip begins at saving. Book flights and hotels through App in the air and get exclusive members-only discounts. Premium members enjoy 20% average savings on flights and hotels (compared to Expedia) when they subscribe.",
      },
    ],
    img: WeGoing,
    pagination: { text: "Booking", activeColor: "#47D371" },
  },
  {
    data: [
      {
        heading: "Pre-Flight Mode",
        title: "Time to Get Ready",
        description:
          "Remember to pack what’s important – When a flight is booked or tracked on App in the Air, the Flight Day countdown begins & planning begins with Pre-Flight Mode. From travel updates to packing lists & weather expectations, be more prepared, packed & ready-to-fly with Pre-flight Mode.",
      },
    ],
    img: Baggage,
    pagination: { text: "Pre-flight mode", activeColor: "#47D371" },
  },
  {
    data: [
      {
        heading: "Flight Day",
        title: "Time to Fly",
        description:
          "Stop worrying about missing your flight. Save time and stay informed with real-time, pilot-grade flight & airport updateswith Flight Day Mode in App in the Air.  ",
      },
    ],
    img: Destination,
    pagination: { text: "flight day", activeColor: "#FCCB57" },
  },
  {
    data: [
      {
        heading: "Arrival Mode",
        title: "Wheels on the ground",
        description:
          "Made it! It’s now time for transportation – App in the Air brings all the “wheels on the ground” details to your fingertips. Easily find your baggage, transportation, car rental and more – handy for first-time arrivals to new airports.",
      },
    ],
    img: CarRent,
    pagination: { text: "arrival mode", activeColor: "#FCCB57" },
  },
  {
    data: [
      {
        heading: "Post-Flight Mode",
        title: "Leave something behind",
        description:
          "Be a part of a community of 7-million frequent flyers who help each other along the way. Chat with nearby users, leave reviews and flight tips for others to follow in your footsteps. ",
      },
    ],
    img: Location,
    pagination: { text: "POST-flight mode", activeColor: "#F4473E" },
  },
];

import React, { useCallback, useEffect, useState } from "react";
import { Box, Grid, Typography, styled } from "@mui/material";
import { Autoplay, Navigation } from "swiper/modules";

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) setTargetReached(true);
    else setTargetReached(false);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    if (media.matches) setTargetReached(true);

    return () => media.removeEventListener("change", updateTarget);
  }, [width, updateTarget]);

  return targetReached;
};

export default function TravelTrakingSlider() {
  const isMobile = useMediaQuery(900);

  return (
    <>
      <Box
        component={Swiper}
        pagination={{
          el: ".swiper-pagination",
          bulletClass: "swiper-pagination-bullet",
          renderBullet: function (index, className) {
            return ReactDOMServer.renderToStaticMarkup(
              <div className={className}>
                <span />
                <span>{data[index].pagination.text}</span>
              </div>
            );
          },
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        sx={{
          overflow: "visible !important",
          overflowX: "clip !important",
          "& .swiper-wrapper": {
            marginBottom: "2rem",
          },
          "& .swiper-pagination-bullet": {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            background: "none",
            height: "26px",
            textAlign: "left",
            color: "#8F8F8F",
            opacity: 1,
          },
          "& .swiper-pagination-bullet >:nth-child(1)": {
            display: "inline-block",
            height: "4px",
            backgroundColor: "currentcolor",
            borderRadius: "2px",
          },
          "& .scrollhost::-webkit-scrollbar": {
            display: "none",
          },
          "& .swiper-pagination-bullet >:nth-child(2)": {
            fontWeight: 700,
            textTransform: "uppercase",
            fontSize: "14px",
            color: "inherit",
          },
          "& .swiper-pagination-bullet-active:nth-child(1)": {
            color: data[0].pagination.activeColor,
          },
          "& .swiper-pagination-bullet-active:nth-child(2)": {
            color: data[1].pagination.activeColor,
          },
          "& .swiper-pagination-bullet-active:nth-child(3)": {
            color: data[2].pagination.activeColor,
          },
          "& .swiper-pagination-bullet-active:nth-child(4)": {
            color: data[3].pagination.activeColor,
          },
          "& .swiper-pagination-bullet-active:nth-child(5)": {
            color: data[4].pagination.activeColor,
          },
          "& .swiper-pagination": {
            display: "grid",
            position: "relative",
            gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
            gap: 1,
          },
          "@media (max-width: 600px)": {
            "& .swiper-pagination": {
              display: "flex",
              overflowX: "auto",
              whiteSpace: "nowrap",
              gap: "8px",
            },
            "& .swiper-pagination::-webkit-scrollbar": {
              width: 0,
              display: "none",
            },
            "& .swiper-pagination-bullet": {
              flexShrink: 2,
              minWidth: "120px",
            },
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {data.map((ele, i) => {
          return (
            <SwiperSlide
              key={i}
              style={{
                backgroundColor: "#333333",
                borderRadius: "15px",
                maxHeight: isMobile ? "750px" : "450px",
              }}
            >
              <Box>
                <Grid
                  container
                  sx={{
                    flexDirection: { md: "row", xs: "column-reverse" },
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      paddingLeft: { md: "50px", xs: 0 },
                    }}
                  >
                    {ele.data.map((info, i) => {
                      return (
                        <Box
                          key={i}
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            height: {
                              md: "250px !important",
                              xs: "200px !important",
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              color: ele.pagination.activeColor,
                              backgroundColor: "#525252",
                              padding: "4px 8px",
                              borderRadius: "8px",
                              fontWeight: 500,
                              width: "150px",
                              display: { md: "block", xs: "none" },
                            }}
                          >
                            {info.heading}
                          </Typography>
                          <Typography
                            sx={{
                              padding: "4px 8px",
                              borderRadius: "8px",
                              fontWeight: 500,
                              color: "#fff",
                              width: "100%",
                              fontSize: {
                                md: "32px",
                                sm: "18px",
                                xs: "16px",
                              },
                              textWrap: "nowrap",
                              pt: 2,
                            }}
                          >
                            {info.title}
                          </Typography>
                          <Typography
                            sx={{
                              padding: "4px 8px",
                              borderRadius: "8px",
                              fontWeight: 500,
                              color: "#fff",
                              width: "100%",
                              fontSize: {
                                md: "16px",
                                sm: "15px",
                                xs: "13px",
                              },
                              maxWidth: "500px",
                              pt: 2,
                            }}
                          >
                            {info.description}
                          </Typography>
                        </Box>
                      );
                    })}
                  </Grid>
                  <Grid item xs={12} md={6} mt={-3}>
                    <Img src={ele.img} width={900} alt="img" />
                  </Grid>
                </Grid>
              </Box>
            </SwiperSlide>
          );
        })}
        <div className="swiper-pagination"></div>
      </Box>
    </>
  );
}
