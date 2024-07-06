import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import verify from "../assets/logo/verify.png";

const Achievements = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const getFontSize = (baseSize) => {
    if (isMobile) return baseSize * 0.7;
    if (isTablet) return baseSize * 0.85;
    return baseSize;
  };
  return (
    <Box
      flexGrow={1}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      bgcolor={"#374151"}
      borderRadius={2}
      padding={2}
      margin={"10px 0"}
    >
      <Box display={"flex"}>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={700}
          color="white"
          fontSize={getFontSize(24)}
        >
          Badges
        </Typography>
      </Box>
      <Box display={"flex"} flexWrap={"wrap"}>
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
        ].map((i, j) => (
          <Box>
            <img src={verify} alt="badge" />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Achievements;
