"use client";

import { Fragment, cloneElement, useState } from "react";

import Image from "next/image";
import { default as NextLink } from "next/link";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { usePathname } from "next/navigation";

import LogoImg from "../../../public/Images/Logo.png";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import CloseIcon from "@mui/icons-material/Close";
const pages = [
  { label: "For Business", href: "/" },
  { label: "Team", href: "" },
  { label: "Community", href: "=" },
  { label: "Sustainability", href: "" },
  { label: "Contact Us", href: "" },
];

// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ScrollTrigger({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    sx: {
      //   py: { xs: 1.5, sm: 2 },
      backgroundColor: "#242424",
      color: "#1D2939",
      transition: "0.2s",
      boxShadow: trigger ? "0px 4px 8px 0px rgba(0, 0, 0, 0.08)" : "none",
    },
  });
}

function Header(props) {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pathname = usePathname();

  return (
    <ScrollTrigger {...props}>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link
              href="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                gap: 1.5,
              }}
              component={NextLink}
            >
              <Box
                component={Image}
                src={LogoImg}
                alt="Logo"
                sx={{ display: { xs: "none", lg: "flex" }, mr: 1 }}
              />
            </Link>

            <Box
              component={Image}
              src={LogoImg}
              alt="Logo"
              sx={{ display: { xs: "flex", lg: "none" }, mx: 1 }}
            />
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", lg: "flex" },
                alignItems: "center",
                justifyContent: "end",
                "& hr": {
                  // mx: 3.75,
                  height: "20px",
                  marginTop: "auto",
                  marginBottom: "auto",
                },
                "& .active": {
                  color: "#135CFD",
                  fontWeight: 600,
                  textDecoration: "underline",
                },
                "& .active:hover": {
                  color: "#135CFD",
                },
              }}
            >
              {pages.map((page) => (
                <Fragment key={page.label + "key"}>
                  <Link
                    href={page.href}
                    fontSize={16}
                    color="#FFF"
                    sx={{
                      px: { xs: 2.5, xl: 1.7 },
                      py: 2,
                      display: "block",
                      lineHeight: 1.11,
                    }}
                    underline="none"
                    component={NextLink}
                  >
                    {page.label}
                  </Link>
                  <Divider orientation="vertical" variant="middle" flexItem />
                </Fragment>
              ))}
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", lg: "none" },
                justifyContent: "end",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ color: "#FFF" }}
              >
                {anchorElNav ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  position: "fixed",
                  top: 40,
                  left: 0,
                  right: 10,
                  display: { xs: "block", lg: "none" },
                }}
                PaperProps={{
                  style: {
                    width: "100%",
                    maxWidth: "100%",
                  },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.label}
                    onClick={handleCloseNavMenu}
                    sx={{
                      justifyContent: "center",
                    }}
                  >
                    <Link
                      href={page.href}
                      sx={{
                        display: "block",
                        textAlign: "center",
                        fontWeight: 600,
                        color: "#000",
                      }}
                      color="#1D2939"
                      underline="none"
                      fontSize={16}
                      className={`${pathname === page.href ? "active" : ""}`}
                      component={NextLink}
                    >
                      {page.label}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ScrollTrigger>
  );
}
export default Header;