"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Rating,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";

import Client1Img from "../../../../public/Images/ReviewUsers/Client1.svg";
import Client2Img from "../../../../public/Images/ReviewUsers/Client2.svg";
import Client3Img from "../../../../public/Images/ReviewUsers/Client3.svg";
import Client4Img from "../../../../public/Images/ReviewUsers/Client4.svg";
import Client5Img from "../../../../public/Images/ReviewUsers/Client5.svg";
import Client6Img from "../../../../public/Images/ReviewUsers/Client6.svg";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const reviews = [
  {
    rating: 5,
    review:
      "I love using App in the Air when I travel and I’m always delighted with each update and the new features.",
    reviewer: "Stephen Fry",
    position: "Actor, comedian, and writer",
    img: Client1Img,
  },
  {
    rating: 5,
    review:
      "Heaving the seamless travel experience provided by App in the Air is critical for me with 100+ travel days. App in the Air is how I make life on the road manageable, and I can’t imagine travelling without this virtual assistant.",
    reviewer: "Rasmus H.",
    position: "Principle Technologist",
    img: Client2Img,
  },
  {
    rating: 5,
    review:
      "App in the Air is my favorite travelling app. It helps me to organize all my flights. I love getting app notifications about my upcoming travel. I always feel informed and it makes my life easier! thank you for such an amazing app!",
    reviewer: "Polina M.",
    position: "Master of Performing Arts",
    img: Client3Img,
  },
  {
    rating: 5,
    review:
      "Does as it says. I’m having a lot of fun tracking my flights and all the other little details. Updated regularly. Has a bunch of features you can switch on or off. Especially useful if you travel a lot.",
    reviewer: "Mike D.",
    position: "Managing Partner",
    img: Client5Img,
  },
  {
    rating: 5,
    review:
      "I’m a HUGE fan of AITA. Lifetime subscriber for over two years now, I recommend this app to all my friends and family. The interactive, playful and informative UI is awesome! Keep it up!",
    reviewer: "Lucas Dubois",
    position: "Managing Director",
    img: Client6Img,
  },
];
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
const ReviewSlider = () => {
  const isMobile = useMediaQuery(1440);

  return (
    <Box
      sx={{ backgroundColor: "#242424" }}
      component="section"
      py={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
    >
      <Box
        component={Swiper}
        slidesPerView={1}
        spaceBetween={15}
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
          mt: { xs: 1, xl: 1 },
          mb: { md: 8, xs: 3 },
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          450: {
            slidesPerView: 1.5,
          },
          900: {
            slidesPerView: 2.5,
          },
          1200: {
            slidesPerView: 3.3,
          },
          1400: {
            slidesPerView: 3.5,
          },
          1500: {
            slidesPerView: 3.9,
          },
        }}
      >
        {reviews.map((review, i) => {
          return (
            <SwiperSlide
              key={review.reviewer}
              style={{
                marginLeft: i == 0 && !isMobile ? "150px" : i == 0 ? 15 : "",
              }}
            >
              <Stack
                sx={{
                  p: { xs: 3, sm: 4 },
                  bgcolor: i === 0 ? "#333" : "#F5F5F5",
                  borderRadius: "32px",
                }}
                direction="column"
              >
                <Rating value={review.rating} readOnly />
                <Typography
                  sx={{
                    fontFamily: "inherit",
                    fontSize: { xs: 16, sm: 20 },
                    lineHeight: 1.5,
                    mt: { xs: 2.5, sm: 3 },
                    mb: { xs: 3, sm: 4 },
                    color: i === 0 ? "#FFFFFF" : "#000000",
                    minHeight: { md: "200px", xs: "200px" },
                  }}
                >
                  {review.review}
                </Typography>
                <Stack direction="row" spacing={2.5} alignItems="center">
                  <Box
                    component={Image}
                    src={review.img}
                    width={60}
                    height={60}
                    alt="Client"
                    sx={{
                      width: { xs: 54, sm: 60 },
                      height: { xs: 54, sm: 60 },
                      borderRadius: "50%",
                      overflow: "hidden",
                      objectFit: "cover",
                    }}
                  />
                  <Stack direction="column">
                    <Typography
                      fontSize={{ xs: 17, sm: 25 }}
                      fontWeight={600}
                      textTransform="capitalize"
                      lineHeight={1.33}
                      sx={{ color: i === 0 ? "#FFFFFF" : "#000000" }}
                    >
                      {review.reviewer}
                    </Typography>
                    <Typography
                      fontSize={{ md: 16, xs: 12 }}
                      fontWeight={500}
                      sx={{
                        opacity: "0.7",
                        color: "#12141D",
                        lineHeight: 1.5,
                        fontFamily: "inherit",
                        mt: { xs: 0.2, sm: 0.25 },
                        color: i === 0 ? "#FFFFFF" : "#000000",
                      }}
                    >
                      {review.position}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </SwiperSlide>
          );
        })}
      </Box>
    </Box>
  );
};

export default ReviewSlider;
