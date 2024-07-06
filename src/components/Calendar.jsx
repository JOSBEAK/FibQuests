import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";

export default function Calendar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const getCalendarSize = () => {
    if (isMobile) return 240;
    if (isTablet) return 260;
    return 300;
  };
  const getFontSize = () => {
    if (isMobile) return "0.8rem";
    if (isTablet) return "0.9rem";
    return "1rem";
  };
  return (
    <Box margin={"10px 0"} color={"white"} fontWeight={500}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          sx={{
            width: getCalendarSize(),
            height: getCalendarSize(),

            "& .MuiPickersCalendarHeader-label": {
              fontWeight: 700,
              fontSize: getFontSize(),
            },
            "& .MuiSvgIcon-root": {
              color: "white",
              fontSize: isMobile ? "1.2rem" : "1.5rem",
            },

            "& .MuiPickersDay-root": {
              fontWeight: 700,
              color: "white",
              fontSize: getFontSize(),
              width: isMobile ? 24 : isTablet ? 30 : 32,
              height: isMobile ? 24 : isTablet ? 30 : 32,
              "&:hover": {
                backgroundColor: "#374151", // Change hover background color
              },
              "&.Mui-selected": {
                backgroundColor: "#FACC15", // Change selected background color
                color: "#374151", // Change selected text color
                "&:hover": {
                  backgroundColor: "white", // Change hover background color
                },
              },
            },
            "& .css-rhmlg1-MuiTypography-root-MuiDayCalendar-weekDayLabel": {
              fontWeight: 700,
              color: "white", // Customize this to your desired color
              fontSize: getFontSize(),
              width: isMobile ? 24 : isTablet ? 30 : 32,
            },
            "& .css-23p0if-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected)":
              {
                border: "2px solid rgba(0, 0, 0, 0.6)",
              },
          }}
        />
      </LocalizationProvider>
    </Box>
  );
}
