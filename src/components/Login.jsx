import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsername, setPassword, setIsLoggedIn } from "../redux/store";
import axios from "axios";
import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import BpCheckbox from "./BpCheckBox";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.app.username);
  const password = useSelector((state) => state.app.password);

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/login", {
        username,
        password,
      });
      if (response.status === 200) {
        dispatch(setIsLoggedIn(true));
        dispatch(setUsername(""));
        dispatch(setPassword(""));
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup");
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
        <Box display={"flex"} justifyContent={"center"} width={"100%"}>
          <Typography variant="h7" fontWeight={700} color={"#FFFFFF"}>
            New User?
          </Typography>
          <Box>
            <Typography
              onClick={handleSignupClick}
              sx={{ cursor: "pointer" }}
              variant="h7"
              fontWeight={700}
              color={"#FACC15"}
            >
              Sign up
            </Typography>
          </Box>
        </Box>
        <TextField
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => dispatch(setUsername(e.target.value))}
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
          value={password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
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
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
        >
          <FormGroup>
            <FormControlLabel
              control={<BpCheckbox />}
              sx={{
                color: "white",
                "& .MuiTypography-root": { fontSize: "12px", fontWeight: 700 },
              }}
              label="Remember Me"
            />
          </FormGroup>
          <Typography
            sx={{
              cursor: "pointer",
              color: "white",
              fontSize: "12px",
              fontWeight: 700,
            }}
          >
            Forgot Password ?
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          sx={{
            backgroundColor: "#a855f7",
            fontWeight: 700,
            margin: "10px auto",
          }}
          fullWidth
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
