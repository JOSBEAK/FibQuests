import React, { useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useSelector } from "react-redux";

const Stats = () => {
  const [currentStat, setCurrentStat] = useState("total");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const getFontSize = (baseSize) => {
    if (isMobile) return baseSize * 0.7;
    if (isTablet) return baseSize * 0.85;
    return baseSize;
  };
  const getButtonFontSize = (baseSize) => {
    if (isMobile) return baseSize * 0.4;
    if (isTablet) return baseSize * 0.85;
    return baseSize;
  };
  const allQuestions = useSelector((state) => state.app.allQuestions);

  return (
    <Box
      flexGrow={1}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      bgcolor="#374151"
      borderRadius={2}
      padding={isMobile ? 1.5 : 2}
      margin={isMobile ? "5px 0" : "10px 0"}
    >
      <Box display="flex">
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={700}
          color="white"
          fontSize={getFontSize(24)}
        >
          Statistics
        </Typography>
      </Box>
      <Box sx={statsStyle}>
        <Typography
          variant={isMobile ? "h2" : "h1"}
          fontWeight={900}
          color="white"
          fontSize={getFontSize(isMobile ? 48 : 96)}
        >
          {currentStat === "total"
            ? allQuestions?.length
            : currentStat === "due"
            ? 50
            : 25}
        </Typography>

        <Box display="flex" alignItems="center">
          <ArrowLeftIcon
            sx={{
              color: "#FACC15",
              cursor: "pointer",
              fontSize: getFontSize(24),
            }}
            onClick={() => setCurrentStat("total")}
          />
          <Typography
            variant={isMobile ? "subtitle1" : "h6"}
            color="#FACC15"
            fontWeight={800}
            fontSize={getButtonFontSize(20)}
            mx={1}
            textAlign={"center"}
          >
            Total Questions
          </Typography>
          <ArrowRightIcon
            sx={{
              color: "#FACC15",
              cursor: "pointer",
              fontSize: getFontSize(24),
            }}
            onClick={() => setCurrentStat("total")}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Stats;

const statsStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  mt: 2,
};
