import * as React from "react";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import CircularProgress from "@mui/joy/CircularProgress";
import Typography from "@mui/joy/Typography";
import SvgIcon from "@mui/joy/SvgIcon";
import { Box, Container } from "@mui/material";
import Image from "next/image";
export default function UserCard({
  i,
  names,
  miles,
  hours,
  flight,
  user,
  status,
}) {
  return (
    <Container disableGutters>
      <Card
        variant="solid"
        color="primary"
        invertedColors
        sx={{
          backgroundColor: "#FFF",
          borderRadius: {
            xs: i === 0 ? "20px 0 0 20px" : "0 20px 20px 0",
            md: "20px",
          },
          borderRight: {
            xs: i === 0 ? "1px solid rgba(0, 0, 0, 0.10);" : 0,
            sm: 0,
          },
        }}
      >
        <CardContent
          orientation="horizontal"
          sx={{
            flexDirection: { md: "row", xs: "column" },
            alignItems: "center",
          }}
        >
          <CircularProgress
            size="xl"
            determinate
            value={30}
            sx={{ marginTop: "-20%" }}
          >
            <Image src={user} height={89} width={89} alt="user"/>
          </CircularProgress>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography
                sx={{
                  color: "#000",
                  fontWeight: 700,
                  fontSize: "20px",
                  textWrap: "nowrap",
                }}
                level="body-md"
              >
                {names}
              </Typography>
              <Typography sx={{ mt: "6px" }}>{status}</Typography>
            </Box>
          </CardContent>
        </CardContent>
        <CardActions>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              flexDirection: { md: "row", xs: "column" },
              alignItems: "center",
            }}
          >
            <Box sx={{ color: "#000" }} variant="soft" size="sm">
              <Typography sx={{ color: "#000", fontWeight: 700 }}>
                {miles}
              </Typography>
              <Typography sx={{ color: "#8F8F8F" }}>miles</Typography>
            </Box>
            <Box sx={{ color: "#000" }} variant="soft" size="sm">
              <Typography sx={{ color: "#000", fontWeight: 700 }}>
                {hours}
              </Typography>
              <Typography sx={{ color: "#8F8F8F" }}>hours</Typography>
            </Box>
            <Box sx={{ color: "#000" }} variant="soft" size="sm">
              <Typography sx={{ color: "#000", fontWeight: 700 }}>
                {flight}
              </Typography>
              <Typography sx={{ color: "#8F8F8F" }}>flights</Typography>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </Container>
  );
}
