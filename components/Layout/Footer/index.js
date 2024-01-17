"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Input,
  InputLabel,
  Link,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import Image from "next/image";
import LogoImg from "../../../public/Images/Logo2.svg";
import AppStore from "../../../public/Images/Socials/Button1.svg";
import PlayStore from "../../../public/Images/Socials/Button2.svg";
import TwitterIcon from "../../../public/Images/Socials/twitter.svg";
import GitHubIcon from "../../../public/Images/Socials/github.svg";
import FacebookOutlinedIcon from "../../../public/Images/Socials/facebook.svg";
import InstagramIcon from "../../../public/Images/Socials/insta.svg";
import LinkedIn from "../../../public/Images/Socials/linked.svg";

const links = [
  { label: "Careers", href: "/" },
  { label: "Press Kit", href: "/" },
];
const links2 = [
  { label: "Help center", href: "/" },
  { label: "Blog", href: "/" },
  { label: "Contacts", href: "/" },
];
const links3 = [
  { label: "Terms of Service", href: "/" },
  { label: "Privacy policy", href: "/" },
  { label: "Vulnerability Disclosure", href: "/" },
];
const links4 = [
  {
    label:
      "App in the Air use of information received from Google APIs will adhere to Google API Services User Data Policy, including the Limited Use requirements.",
    href: "/",
  },
  { label: "Google Limited Use Disclosure", href: "/" },
];

const socials = [
  { href: "", icon: FacebookOutlinedIcon.src, label: "Facebook" },
  { href: "", icon: GitHubIcon.src, label: "Github" },
  { href: "", icon: InstagramIcon.src, label: "Instagram" },
  { href: "", icon: TwitterIcon.src, label: "Twitter" },
  { href: "", icon: LinkedIn.src, label: "Linked" },
];

function Footer() {
  const Img = styled(Image)(({ theme }) => ({
    width: "178px",
    height: "29px",
  }));
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#242424", color: "white" }}
      id="footer"
    >
      <Container maxWidth={false} sx={{ maxWidth: "1500px" }}>
        <Grid container direction="row" spacing={4} py={6} mt={0}>
          <Grid
            item
            md={4}
            sx={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Stack direction="row" alignItems="center" gap={1.5}>
              <Img src={LogoImg} alt="Logo" width={1000} height={1000} />
            </Stack>
          </Grid>
          <Grid item md={1.5}></Grid>
          <Grid container item md={6.5} spacing={6} sx={{ flexShrink: 0 }}>
            <Stack
              direction="column"
              sx={{ lineHeight: 1.6 }}
              component={Grid}
              item
              xs={6}
              md={2.5}
              width={{ xs: "100%", md: "auto" }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  lineHeight: 1.375,
                  letterSpacing: 1,
                  color: "#8F8F8F",
                  fontSize: 16,
                  mb: 4,
                }}
              >
                Resources
              </Typography>
              <Stack component="nav">
                <List
                  disablePadding={true}
                  sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                  {links.map((link) => {
                    return (
                      <ListItem disablePadding={true} key={link.label}>
                        <Link
                          href={link.href}
                          color="#fff"
                          sx={{
                            fontSize: 14,
                            textDecorationColor: "transparent",
                          }}
                        >
                          {link.label}
                        </Link>
                      </ListItem>
                    );
                  })}
                </List>
              </Stack>
            </Stack>
            <Stack
              direction="column"
              sx={{ lineHeight: 1.6 }}
              component={Grid}
              item
              xs={6}
              md={2.5}
              width={{ xs: "100%", md: "auto" }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  lineHeight: 1.375,
                  letterSpacing: 1,
                  color: "#8F8F8F",
                  fontSize: 16,
                  mb: 4,
                }}
              >
                General
              </Typography>
              <Stack component="nav">
                <List
                  disablePadding={true}
                  sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                  {links2.map((link) => {
                    return (
                      <ListItem disablePadding={true} key={link.label}>
                        <Link
                          href={link.href}
                          color="#fff"
                          sx={{
                            fontSize: 14,
                            textDecorationColor: "transparent",
                          }}
                        >
                          {link.label}
                        </Link>
                      </ListItem>
                    );
                  })}
                </List>
              </Stack>
            </Stack>
            <Stack
              direction="column"
              sx={{ lineHeight: 1.6 }}
              component={Grid}
              item
              xs={6}
              md={3}
              width={{ xs: "100%", md: "auto" }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  lineHeight: 1.375,
                  letterSpacing: 1,
                  color: "#8F8F8F",
                  fontSize: 16,
                  mb: 4,
                }}
              >
                Legal
              </Typography>
              <Stack component="nav">
                <List
                  disablePadding={true}
                  sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                  {links3.map((link) => {
                    return (
                      <ListItem disablePadding={true} key={link.label}>
                        <Link
                          href={link.href}
                          color="#fff"
                          sx={{
                            fontSize: 14,
                            textDecorationColor: "transparent",
                          }}
                        >
                          {link.label}
                        </Link>
                      </ListItem>
                    );
                  })}
                </List>
              </Stack>
            </Stack>
            <Stack
              direction="column"
              sx={{ lineHeight: 1.6 }}
              component={Grid}
              item
              xs={6}
              md={4}
              width={{ xs: "100%", md: "auto" }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  lineHeight: 1.375,
                  letterSpacing: 1,
                  color: "#8F8F8F",
                  fontSize: 16,
                  mb: 4,
                }}
              >
                Usage of Google APIs
              </Typography>
              <Stack component="nav">
                <List
                  disablePadding={true}
                  sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                  {links4.map((link) => {
                    return (
                      <ListItem disablePadding={true} key={link.label}>
                        <Link
                          href={link.href}
                          color="#fff"
                          sx={{
                            fontSize: 14,
                            textDecorationColor: "transparent",
                          }}
                        >
                          {link.label}
                        </Link>
                      </ListItem>
                    );
                  })}
                </List>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
            sx={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              gap={1.5}
              sx={{ margin: { xs: "auto", sm: "unset" } }}
            >
              <Stack direction="row" spacing={{ md: 2, xs: 3 }}>
                {socials.map((social, i) => {
                  return (
                    <Link
                      key={i + 111}
                      href={social.href}
                      aria-label={social.label}
                      sx={{
                        width: 40,
                        height: 40,
                        bgcolor: "#454545",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        transition: "0.2s",
                        "&:hover": {
                          borderRadius: 1,
                        },
                      }}
                    >
                      <Image
                        src={social.icon}
                        width={24}
                        height={24}
                        alt="icon"
                      />
                    </Link>
                  );
                })}
              </Stack>
            </Stack>
            <Typography
              sx={{
                display: { md: "block", xs: "none" },
                textAlign: "start",
                fontSize: 14,
                color: "#8F8F8F",
              }}
            >
              ©2024 App in the Air. All rights reserved. CST# 2029030-50.
            </Typography>
          </Grid>
          <Grid item md={1.5}></Grid>
          <Grid
            container
            item
            md={6.5}
            spacing={0}
            sx={{ flexShrink: 0, display: "flex " }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 2,
                maxWidth: "100%",
                pb: { md: 5, xs: 2 },
                alignItems: "end",
              }}
            >
              <Box>
                <Box
                  component={Image}
                  sx={{
                    cursor: "pointer",
                    width: "170px",
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
                    width: "170px",
                    height: "auto",
                    maxWidth: "100%",
                  }}
                  id="app-logo"
                  src={PlayStore}
                  alt="play-res"
                />
              </Box>
            </Box>
            <Typography
              sx={{
                display: { md: "none", xs: "block" },
                fontSize: 14,
                textAlign: "center",
                width: "100%",
                color: "#8F8F8F",
              }}
            >
              ©2024 App in the Air. All rights reserved. CST# 2029030-50.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
