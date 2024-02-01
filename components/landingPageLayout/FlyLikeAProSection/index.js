import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";

import MobileMap from "../../Common/MobileMap";
import useWindowDimensions from "../../Common/dimensions";

export default function SaveTime() {
  const { height, width } = useWindowDimensions();
  const matches = useMediaQuery("(min-width:390px)");
  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F5",
        position: "relative",
        pb: { xs: 16, sm: 25 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 170,
          bottom: 0,
          left: "50%",
          transform: `translateX(-50%) scaleX(${
            (width + 50) / 1824.572564612325
          })`,
          height: "100%",
          display: { xs: "none", sm: "block" },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="1832px"
          height="2976px"
          viewBox="0 0 1832 2975"
          version="1.1"
        >
          <g id="surface1">
            <path
              style={{
                fill: "none",
                strokeWidth: 16,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                stroke: "rgb(100%,100%,100%)",
                strokeOpacity: 1,
                strokeMiterlimit: 4,
              }}
              d="M -2.999795 8.000387 L 46.458447 8.000387 C 91.743996 8.000387 128.456946 44.713105 128.456946 90.000519 L 128.456946 369.000591 C 128.456946 414.288004 165.169896 451.000722 210.458515 451.000722 L 1231.230213 451.000722 C 1276.518832 451.000722 1313.228712 487.71344 1313.228712 533.000853 L 1313.228712 838.498946 C 1313.228712 883.786359 1276.518832 920.499077 1231.230213 920.499077 L 210.458515 920.499077 C 165.169896 920.499077 128.456946 957.211795 128.456946 1002.499208 L 128.456946 1308.000372 C 128.456946 1353.290856 165.169896 1390.000503 210.458515 1390.000503 L 1231.230213 1390.000503 C 1276.518832 1390.000503 1313.228712 1426.71015 1313.228712 1472.000634 L 1313.228712 1779.000527 C 1313.228712 1824.291011 1276.518832 1861.000658 1231.230213 1861.000658 L 210.458515 1861.000658 C 165.169896 1861.000658 128.456946 1897.710305 128.456946 1943.000789 L 128.456946 2248.999481 C 128.456946 2294.289966 165.169896 2330.999613 210.458515 2330.999613 L 1505.998567 2330.999613 "
              transform="matrix(1.272222,0,0,1.271911,0,0)"
            />
            <path
              style={{
                fillRule: "nonzero",
                fill: "rgb(96.078431%,96.078431%,96.078431%)",
                fillOpacity: 1,
                strokeWidth: 16,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                stroke: "rgb(100%,100%,100%)",
                strokeOpacity: 1,
                strokeMiterlimit: 4,
              }}
              d="M 1332.999113 671.000625 C 1332.999113 684.255777 1322.255731 694.998716 1309.000751 694.998716 C 1295.74577 694.998716 1284.999318 684.255777 1284.999318 671.000625 C 1284.999318 657.745473 1295.74577 646.999463 1309.000751 646.999463 C 1322.255731 646.999463 1332.999113 657.745473 1332.999113 671.000625 Z M 1332.999113 671.000625 "
              transform="matrix(1.272222,0,0,1.271911,0,0)"
            />
            <path
              style={{
                fillRule: "nonzero",
                fill: "rgb(96.078431%,96.078431%,96.078431%)",
                fillOpacity: 1,
                strokeWidth: 16,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                stroke: "rgb(100%,100%,100%)",
                strokeOpacity: 1,
                strokeMiterlimit: 4,
              }}
              d="M 1332.999113 1623.000651 C 1332.999113 1636.255804 1322.255731 1646.998742 1309.000751 1646.998742 C 1295.74577 1646.998742 1284.999318 1636.255804 1284.999318 1623.000651 C 1284.999318 1609.745499 1295.74577 1598.999489 1309.000751 1598.999489 C 1322.255731 1598.999489 1332.999113 1609.745499 1332.999113 1623.000651 Z M 1332.999113 1623.000651 "
              transform="matrix(1.272222,0,0,1.271911,0,0)"
            />
            <path
              style={{
                fillRule: "nonzero",
                fill: "rgb(96.078431%,96.078431%,96.078431%)",
                fillOpacity: 1,
                strokeWidth: 16,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                stroke: "rgb(100%,100%,100%)",
                strokeOpacity: 1,
                strokeMiterlimit: 4,
              }}
              d="M 127.999454 2100.999993 C 127.999454 2114.255146 117.256073 2125.001155 104.001092 2125.001155 C 90.746111 2125.001155 79.999659 2114.255146 79.999659 2100.999993 C 79.999659 2087.744841 90.746111 2076.998831 104.001092 2076.998831 C 117.256073 2076.998831 127.999454 2087.744841 127.999454 2100.999993 Z M 127.999454 2100.999993 "
              transform="matrix(1.272222,0,0,1.271911,0,0)"
            />
            <path
              style={{
                fillRule: "nonzero",
                fill: "rgb(96.078431%,96.078431%,96.078431%)",
                fillOpacity: 1,
                strokeWidth: 16,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                stroke: "rgb(100%,100%,100%)",
                strokeOpacity: 1,
                strokeMiterlimit: 4,
              }}
              d="M 127.999454 1160.000884 C 127.999454 1173.256036 117.256073 1183.998975 104.001092 1183.998975 C 90.746111 1183.998975 79.999659 1173.256036 79.999659 1160.000884 C 79.999659 1146.745731 90.746111 1135.999722 104.001092 1135.999722 C 117.256073 1135.999722 127.999454 1146.745731 127.999454 1160.000884 Z M 127.999454 1160.000884 "
              transform="matrix(1.272222,0,0,1.271911,0,0)"
            />
            <path
              style={{
                fillRule: "nonzero",
                fill: "rgb(96.078431%,96.078431%,96.078431%)",
                fillOpacity: 1,
                strokeWidth: 16,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                stroke: "rgb(100%,100%,100%)",
                strokeOpacity: 1,
                strokeMiterlimit: 4,
              }}
              d="M 153.999727 228.00029 C 153.999727 241.255442 143.256346 252.001452 130.001365 252.001452 C 116.746384 252.001452 105.999932 241.255442 105.999932 228.00029 C 105.999932 214.745138 116.746384 203.999128 130.001365 203.999128 C 143.256346 203.999128 153.999727 214.745138 153.999727 228.00029 Z M 153.999727 228.00029 "
              transform="matrix(1.272222,0,0,1.271911,0,0)"
            />
          </g>
        </svg>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: matches ? 160 : 250,
          bottom: 0,
          left: "50%",
          transform: `translateX(-50%) scaleX(${width / 360})`,
          height: "100%",
          display: { xs: "block", sm: "none" },
        }}
      >
        <svg
          width="360"
          height="2264"
          viewBox="0 0 360 2264"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 4V4C9.1127 4 16.5 11.3873 16.5 20.5V462.044C16.5 479.677 30.7639 493.987 48.3965 494.044L312.103 494.897C329.736 494.954 344 509.264 344 526.897V876.847C344 894.58 329.58 908.931 311.848 908.847L48.614 907.594C30.8965 907.51 16.4829 921.838 16.4618 939.556L16.038 1295.56C16.017 1313.18 30.2573 1327.51 47.8856 1327.59L311.688 1328.85C329.288 1328.93 343.516 1343.21 343.536 1360.81L343.963 1736.81C343.984 1754.56 329.558 1768.93 311.811 1768.85L48.6523 1767.59C30.9199 1767.51 16.5 1781.86 16.5 1799.59V2227.94C16.5 2245.61 30.8269 2259.94 48.5 2259.94H382"
            stroke="white"
            stroke-width="8"
          />
          <circle
            cx="16"
            cy="234"
            r="8"
            fill="#F5F5F5"
            stroke="white"
            stroke-width="8"
          />
          <circle
            cx="16"
            cy="1131"
            r="8"
            fill="#F5F5F5"
            stroke="white"
            stroke-width="8"
          />
          <circle
            cx="16"
            cy="1978"
            r="8"
            fill="#F5F5F5"
            stroke="white"
            stroke-width="8"
          />
          <circle
            cx="344"
            cy="690"
            r="8"
            fill="#F5F5F5"
            stroke="white"
            stroke-width="8"
          />
          <circle
            cx="344"
            cy="1544"
            r="8"
            fill="#F5F5F5"
            stroke="white"
            stroke-width="8"
          />
        </svg>
      </Box>
      <Container maxWidth="xl" sx={{ position: "relative" }}>
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
                md: "26px",
                sm: "24px",
                xs: "20px",
              },
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: { md: "52px", xs: "40px" },
              color: "#8F8F8F",
              textAlign: "center",
              mt: 4,
            }}
          >
            Fly Like a Pro
          </Typography>
          <Typography
            sx={{
              fontSize: {
                md: "42px",
                sm: "38px",
                xs: "32px",
              },
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: { md: "52px", xs: "35px" },
              color: "#000000",
              textAlign: "center",
              maxWidth: "800px",
              mt: 2,
            }}
          >
            Save time & frustration at the airport
          </Typography>
          <Typography
            sx={{
              fontSize: {
                md: "20px",
                sm: "18px",
                xs: "15px",
              },
              fontStyle: "normal",
              fontWeight: 600,
              textAlign: "center",
              lineHeight: { md: "26px", xs: "25px" },
              maxWidth: "790px",
              width: "100%",
              color: "#000000",
              mt: 3,
            }}
          >
            Star in-app features that will redefine how you travel
          </Typography>
        </Box>
        <Box
          sx={{
            width: "80%",
            maxWidth: "100%",
            mx: "auto",
          }}
        >
          <MobileMap />
        </Box>
      </Container>
    </Box>
  );
}
