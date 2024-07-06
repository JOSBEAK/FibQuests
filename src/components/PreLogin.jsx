import React from "react";
import { Box } from "@mui/material";
import Login from "./Login";
import Signup from "./SignUp";

const PreLogin = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{}}
    >
      <Login />
      <Signup />
    </Box>
  );
};

export default PreLogin;
