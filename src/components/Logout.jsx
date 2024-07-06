import React from "react";
import { useDispatch } from "react-redux";
import { setIsLoggedIn, setDueToday, setSolvedToday } from "../redux/store";
import {
  Box,
  Button,
  Avatar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import axios from "axios";

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/logout");
      if (response.status === 200) {
        dispatch(setIsLoggedIn(false));
        dispatch(setDueToday([]));
        dispatch(setSolvedToday([]));
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const getFontSize = (baseSize) => {
    if (isMobile) return baseSize * 0.5;
    if (isTablet) return baseSize * 0.7;
    return baseSize;
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      flexGrow={1}
      bgcolor={"#374151"}
      margin={"10px 0"}
      padding={2}
      borderRadius={2}
    >
      <Box display={"flex"}>
        <Typography variant="h5" fontWeight={700} color={"white"}>
          Profile
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        margin={"20px 0"}
      >
        <Avatar
          src="https://e7.pngegg.com/pngimages/549/560/png-clipart-computer-icons-login-scalable-graphics-email-accountability-blue-logo-thumbnail.png"
          sx={{ height: "50px", width: "50px" }}
        />
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography
            fontSize={getFontSize(16)}
            fontWeight={700}
            color={"#FACC15"}
          >
            Anurag Pandey
          </Typography>
          <Typography
            fontSize={getFontSize(16)}
            fontWeight={700}
            color={"#FACC15"}
          >
            anuragpandey4900@gmail.com
          </Typography>
        </Box>
      </Box>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleLogout}
        fullWidth
        sx={{
          borderRadius: 2,
          padding: 1.5,
          backgroundColor: "red",
          fontWeight: 700,
          textTransform: "none",
          fontSize: "20px",
        }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Logout;
