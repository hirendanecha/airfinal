import { Box, Container, Grid, Typography, styled } from "@mui/material";
import React from "react";
import Plain from "../../../public/Images/plane_again 3.svg";
import Plain2 from "../../../public/Images/plane_again 3.png";
import Logo from "../../../public/Images/Logo_svg.svg";
import QrMini from "../../../public/Images/qrMini.svg";
import Image from "next/image";
import AppStore from "../../../public/Images/AppStore.png";
import PlayStore from "../../../public/Images/PlayStore.png";
export default function JoinSection() {
  const Img = styled(Image)(({ theme }) => ({
    width: "180%",
    marginTop: "-30%",
    marginLeft: "-75%",
    [theme.breakpoints.down("sm")]: {
      width: "180%",
    },
  }));
  const Imgs = styled(Image)(({ theme }) => ({
    width: { md: "328px", sm: "400px" },
    height: { md: "245px,", sm: "300px" },
    [theme.breakpoints.down("sm")]: {
      width: "600px",
      maxWidth: "200%",
      marginLeft: "-120px",
      overflowY: "hidden",
      marginTop: "-20%",
      height: "300px,",
    },
  }));
  const Imge = styled(Image)(({ theme }) => ({
    width: "148px",
    height: "24px",
    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "130px",
      height: "18px",
    },
  }));
  const data = [
    {
      title: "Boarding",
      status: "Status",
    },
    {
      title: "Seat",
      status: "1A",
    },
    {
      title: "Class",
      status: "First Class",
    },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "#FFF",
        overflowY: "hidden",
        overflow: "hidden",
        paddingBottom: 10,
        paddingTop: 10,
      }}
    >
      <Container maxWidth="xl">
        <Box>
          <Grid
            container
            rowSpacing={1}
            // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              alignItems: "center",
            }}
          >
            <Grid
              item
              xs={12}
              md={8.5}
              sx={{
                backgroundColor: "#F5F5F5",
                borderRadius: "20px",
                minHeight: "450px",
              }}
              paddingLeft={{ md: "35px", xs: "10px" }}
              paddingRight={{ md: "35px", xs: "10px" }}
            >
              <Box sx={{ mt: 3 }}>
                <Imge src={Logo} alt="mobile1" width={900} height={900} />
              </Box>
              <Typography
                sx={{
                  fontSize: {
                    md: "52px",
                    sm: "48px",
                    xs: "30px",
                  },
                  color: "#000",
                  fontStyle: "normal",
                  fontWeight: 700,
                  mt: { md: 5, xs: 3 },
                }}
              >
                Welcome Aboard
              </Typography>
              <Grid container spacing={2} mt={2}>
                {" "}
                {data.map((ele, i) => {
                  return (
                    <Grid key={i} item md={3.8} xs={i === 2 ? 12 : 6}>
                      <Box
                        sx={{
                          backgroundColor: "#FFF",
                          borderRadius: "10px",
                          width: "100%",
                          padding: "2px 16px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: {
                              md: "20px",
                              sm: "16px",
                              xs: "12px",
                            },
                            color: "#8F8F8F",
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
                          {ele.status}
                        </Typography>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
              <Box sx={{ display: "flex", gap: 2, mt: 5 }}>
                <Box
                  component={Image}
                  src={QrMini}
                  alt="Logo"
                  sx={{
                    display: { xs: "none", lg: "flex", borderRadius: "10px" },
                    mr: 1,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: {
                      md: "19px",
                      sm: "16px",
                      xs: "14px",
                    },
                    color: "#000",
                    fontStyle: "normal",
                    fontWeight: 600,
                    maxWidth: "450px",
                    mt: { md: 1, sm: 0 },
                  }}
                >
                  Download the App & join our flying community of more that
                  7,000,000 users around the world!
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={3.5}
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#242424",
                borderRadius: "20px",
                overflow: { md: "unset", xs: "hidden" },
                height: "450px",
              }}
            >
              <Box>
                <Img
                  src={Plain}
                  alt="mobile1"
                  sx={{ display: { md: "block", xs: "none" } }}
                />
                <Imgs
                  src={Plain}
                  alt="mobile1"
                  sx={{
                    display: { md: "none", xs: "block" },
                    marginTop: { md: 0, sm: "-50px" },
                  }}
                />
              </Box>
              <Box sx={{ position: "absolute", bottom: 0 }}>
                <Box
                  sx={{
                    display: "flex",
                    mt: 2,
                    gap: 2,
                    maxWidth: "100%",
                    pb: 2,
                  }}
                >
                  <Box>
                    <Box
                      component={Image}
                      sx={{
                        cursor: "pointer",
                        width: "130px",
                        height: "auto",
                        maxWidth: "100%",
                      }}
                      id="app-logo"
                      src={AppStore}
                      alt="app-res"
                    />
                  </Box>
                  <Box>
                    <Box
                      component={Image}
                      sx={{
                        cursor: "pointer",
                        width: "130px",
                        height: "auto",
                        maxWidth: "100%",
                      }}
                      id="app-logo"
                      src={PlayStore}
                      alt="play-res"
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
