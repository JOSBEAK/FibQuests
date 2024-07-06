import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSignupUsername,
  setSignupPassword,
  setSignupEmail,
  setUsername,
  setPassword,
  setIsLoggedIn,
} from "../redux/store";
import axios from "axios";
import { Box, Button, TextField, Typography } from "@mui/material";

const Signup = () => {
  const dispatch = useDispatch();
  const signupUsername = useSelector((state) => state.app.signupUsername);
  const signupPassword = useSelector((state) => state.app.signupPassword);
  const signupEmail = useSelector((state) => state.app.signupEmail);

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/signup", {
        username: signupUsername,
        password: signupPassword,
        email: signupEmail,
      });
      if (response.status === 201) {
        dispatch(setUsername(signupUsername));
        dispatch(setPassword(signupPassword));
        handleLogin();
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/login", {
        username: signupUsername,
        password: signupPassword,
      });
      if (response.status === 200) {
        dispatch(setIsLoggedIn(true));
        dispatch(setUsername(""));
        dispatch(setPassword(""));
        dispatch(setSignupUsername(""));
        dispatch(setSignupPassword(""));
        dispatch(setSignupEmail(""));
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      minWidth="30%"
      paddingY={10}
      borderRadius={10}
      sx={{
        backgroundColor: "#374151",
        opacity: 1,
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        maxWidth={{ lg: "80%", md: "90%" }}
      >
        <Typography variant="h3" fontWeight={700} color={"#a855f7"}>
          Welcome !
        </Typography>
        <Typography variant="h6" fontWeight={700} color={"#FFFFFF"}>
          We are so excited to see you!!
        </Typography>
        <TextField
          type="text"
          placeholder="Enter your email"
          value={signupEmail}
          onChange={(e) => dispatch(setSignupEmail(e.target.value))}
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderRadius: "5px",
              },
            },
          }}
          margin="normal"
          fullWidth
        />
        <TextField
          type="text"
          placeholder="Enter your Username"
          value={signupUsername}
          onChange={(e) => dispatch(setSignupUsername(e.target.value))}
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderRadius: "5px",
              },
            },
          }}
          margin="normal"
          fullWidth
        />
        <TextField
          type="password"
          placeholder="Enter your password"
          value={signupPassword}
          onChange={(e) => dispatch(setSignupPassword(e.target.value))}
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderRadius: "5px",
              },
            },
          }}
          margin="normal"
          fullWidth
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleSignup}
          sx={{
            backgroundColor: "#a855f7",
            fontWeight: 700,
            margin: "10px auto",
          }}
          fullWidth
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default Signup;
