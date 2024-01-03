import React from "react";
import Mobile1 from "../../../public/Images/SaveTime/Mobile1.svg";
import Mobile2 from "../../../public/Images/SaveTime/Mobile2.svg";
import Mobile3 from "../../../public/Images/SaveTime/Mobile3.svg";
import Mobile4 from "../../../public/Images/SaveTime/Mobile4.svg";
import Mobile5 from "../../../public/Images/SaveTime/Mobile5.svg";
import Pic1 from "../../../public/Images/SaveTime/Pic1.svg";
import Pic2 from "../../../public/Images/SaveTime/Pic2.svg";
import Pic3 from "../../../public/Images/SaveTime/Pic3.svg";
import Pic4 from "../../../public/Images/SaveTime/Pic4.svg";
import Pic5 from "../../../public/Images/SaveTime/Pic5.svg";
import { Box, Grid, Typography, styled } from "@mui/material";
import Image from "next/image";

export default function MobileMap() {
  const Img = styled(Image)(({ theme }) => ({
    width: "496px",
    height: "438px",
    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "328px",
      height: "180px",
    },
  }));
  const data = [
    {
      heading: "Pilot-Grade Flight Alerts",
      title: "Stop Worrying About Missing Flights & Delays",
      desctiption:
        "The pilot shouldn’t always be the first to know about flight changes. Get real-time, pilot-grade updates on important changes to your flight and be the first to know about gate changes, delays, flight status, and baggage claim.",
      image: Mobile1.src,
      image1: Pic1.src,
    },
    {
      heading: "Auto check-in",
      title: "Put Check-in on Auto Pilot",
      desctiption:
        "App in the Air's Pro members get Automatic Check-in to skip lines and logins. This Auto Check-in feature coordinates traveler seat preferences & checks passengers into flights seamlessly.",
      image: Mobile2.src,
      image1: Pic2.src,
    },
    {
      heading: "Family Notifications",
      title: "Send Friends & Family ETA Updates Instantly",
      desctiption:
        "App in the Air can Instantly notifies friends, family,rides, & travel managers on flight status. Everyone is instantly updated on delays and arrival ETA’s.",
      image: Mobile3.src,
      image1: Pic3.src,
    },
    {
      heading: "Real-time Airport Updates",
      title: "Know When to Leave for the Airport",
      desctiption:
        "App in the Air monitors the security lines, baggage check-in lines, and estimated commuting time to get to the airport and provides recommendations on when to leave for the airport. ",
      image: Mobile4.src,
      image1: Pic4.src,
    },
    {
      heading: "App in the Air for Business",
      title: "Manage Your Business Travel",
      desctiption:
        "App in the Air for Business gives travel managers the ability to easily manage their team’s travel details, and budget, while benefiting from exclusive airline and hotel deals, that save their company an average of 20% per year.",
      image: Mobile5.src,
      image1: Pic5.src,
    },
  ];
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={{ xs: 5.5, md: 20 }}
      pb={2}
    >
      {data.map((ele, i) => {
        return (
          <Grid
            key={i}
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              alignItems: "center",
              flexDirection: {
                md: i % 2 === 0 ? "row" : "row-reverse",
                xs: "column-reverse",
              },
            }}
          >
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  fontSize: {
                    md: "18px",
                    sm: "16px",
                    xs: "12px",
                  },
                  color: "#8F8F8F",
                  fontStyle: "normal",
                  fontWeight: 700,
                  mt: { md: 5, xs: 3 },
                }}
              >
                {ele.heading}
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    md: "26px",
                    sm: "22px",
                    xs: "18px",
                  },
                  color: "#000",
                  fontStyle: "normal",
                  fontWeight: 700,
                  maxWidth: "350px",
                  mt: 1,
                }}
              >
                {ele.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    md: "18px",
                    sm: "16px",
                    xs: "14px",
                  },
                  color: "#000",
                  fontStyle: "normal",
                  fontWeight: 500,
                  maxWidth: "450px",
                  mt: 1,
                }}
              >
                {ele.desctiption}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Img
                src={ele.image}
                alt="mobile1"
                width={900}
                height={900}
                sx={{ display: { md: "block", xs: "none" } }}
              />
              <Img
                src={ele.image1}
                alt="mobile1"
                width={900}
                height={900}
                sx={{ display: { md: "none", xs: "block" } }}
              />
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
}
