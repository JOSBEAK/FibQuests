/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import {
  setDueToday,
  setSolvedToday,
  setCurrentDate,
  setIsLoggedIn,
} from "./redux/store";
import Navbar from "./components/Navbar";
import PreLogin from "./components/PreLogin";
import PostLogin from "./components/Dashboard";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.app.isLoggedIn);

  axios.defaults.withCredentials = true;

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    dispatch(setCurrentDate(today));
    fetchDueAndSolvedOnDate(today);
    checkSession();
  }, [dispatch]);

  const checkSession = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/check_session");
      dispatch(setIsLoggedIn(response.data.logged_in));
      console.log("Session check:", response.data);
    } catch (error) {
      console.error("Session check error:", error);
    }
  };

  const fetchDueAndSolvedOnDate = async (date) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/due_and_solved_on_date",
        { date }
      );
      dispatch(setDueToday(response.data.due_today));
      dispatch(setSolvedToday(response.data.solved_today));
    } catch (error) {
      console.error("Error fetching due and solved questions on date:", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        minHeight: "100vh",

        background:
          "linear-gradient(270deg, rgba(13, 0, 17, 1) 0%, rgba(2, 45, 65, 1) 99%)",
      }}
    >
      <Navbar />
      <Box padding={"40px 30px"}>
        {isLoggedIn ? <PostLogin /> : <PreLogin />}
      </Box>
    </Box>
  );
}

export default App;
