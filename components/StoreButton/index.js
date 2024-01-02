import Image from "next/image";
import React from "react";
import styled from "styled-components";
import AppStore from "../../public/Images/AppStore.png";
import PlayStore from "../../public/Images/PlayStore.png";
import { Box } from "@mui/material";
export default function StoreButton() {
  return (
    <Box sx={{ display: "flex", mt: 2, gap: 2, maxWidth: "100%", pb: 2 }}>
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
  );
}
