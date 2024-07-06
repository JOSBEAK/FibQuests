import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentDate } from "../redux/store";
import {
  Box,
  Typography,
  TextField,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const DateSetter = ({ fetchDueAndSolvedOnDate }) => {
  const dispatch = useDispatch();
  const currentDate = useSelector((state) => state.app.currentDate);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const setDate = () => {
    fetchDueAndSolvedOnDate(currentDate);
  };

  return (
    <Box margin={isMobile ? "10px 0" : "20px 0"}>
      <Typography
        variant={isMobile ? "h6" : "h5"}
        fontWeight="700"
        color="white"
        mb={isMobile ? 1 : 2}
      >
        Set Date
      </Typography>
      <TextField
        type="date"
        value={currentDate}
        onChange={(e) => dispatch(setCurrentDate(e.target.value))}
        fullWidth
        margin="normal"
        sx={{
          backgroundColor: "white",
          borderRadius: "5px",
          "& .MuiInputBase-input": {
            fontSize: isMobile ? "0.9rem" : "1rem",
            padding: isMobile ? "10px" : "16.5px 14px",
          },
        }}
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FACC15",
          textTransform: "none",
          mt: isMobile ? 1 : 2,
          py: isMobile ? 1 : 1.5,
        }}
        onClick={setDate}
        fullWidth
      >
        <CalendarMonthIcon
          sx={{
            color: "black",
            fontSize: isMobile ? "1.2rem" : "1.5rem",
            mr: 1,
          }}
        />
        <Typography
          color="black"
          fontWeight="700"
          fontSize={isMobile ? "0.9rem" : "1rem"}
        >
          Set Date
        </Typography>
      </Button>
    </Box>
  );
};

export default DateSetter;
