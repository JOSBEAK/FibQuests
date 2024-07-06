import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useSelector } from "react-redux";

const QuestStats = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const dueToday = useSelector((state) => state.app.dueToday);
  const solvedToday = useSelector((state) => state.app.solvedToday);
  const allQuestions = useSelector((state) => state.app.allQuestions);
  const getFontSize = (baseSize) => {
    if (isMobile) return baseSize * 0.4;
    if (isTablet) return baseSize * 0.85;
    return baseSize;
  };
  const getHeadingFontSize = (baseSize) => {
    if (isMobile) return baseSize * 0.7;
    if (isTablet) return baseSize * 0.85;
    return baseSize;
  };

  const stats = {
    "Total ": allQuestions?.length,
    "Due Today ": dueToday?.length,
    "Added Today ": solvedToday?.length,
  };
  return (
    <Box
      borderRadius={2}
      margin={isMobile ? "3px 0" : "5px 0"}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      padding={isMobile ? 1.5 : 2}
      bgcolor="#374151"
    >
      <Box display="flex">
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={700}
          color="white"
          fontSize={getHeadingFontSize(24)}
        >
          Info
        </Typography>
      </Box>

      {Object.entries(stats).map(([key, value], index) => (
        <Box
          key={index}
          margin={isMobile ? "3px auto" : "5px auto"}
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius={2}
          width="100%"
        >
          <Typography
            color="white"
            fontWeight={800}
            fontSize={getFontSize(24)}
            sx={{
              textShadow: "0px 0px 1px white",
              letterSpacing: "-0.5px",
            }}
          >
            {`${key} : ${value}`}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default QuestStats;
