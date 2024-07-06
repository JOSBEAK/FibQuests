import React from "react";
import { Box, Grid, IconButton, Tooltip } from "@mui/material";
import Streak from "./Streak";
import DateSetter from "./DateSetter";
import QuestionInput from "./QuestionInput";
import DueToday from "./DueQuestions";
import CompletedToday from "./CompletedQuestions";
import Stats from "./Stats";
import Logout from "./Logout";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setDueToday, setSolvedToday } from "../redux/store";
import AllQuestions from "./AllQuestions";
import all_questions from "../assets/logo/all_questions.svg";
import completed_today from "../assets/logo/completed_today.svg";
import due_today from "../assets/logo/due_today.svg";
import QuestStats from "./QuestStats";
import Calendar from "./Calendar";
import Achievements from "./Achievements";
import Tags from "./Tags";
import DifficultyLevel from "./Difficulty";
import { useMediaQuery, useTheme } from "@mui/material";

const Dashboard = () => {
  const dispatch = useDispatch();
  const currentDate = useSelector((state) => state.app.currentDate);
  const [selectedView, setSelectedView] = React.useState("due");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

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
    <Box display="flex" justifyContent="center" p={isMobile ? 2 : 4}>
      <Grid container spacing={isMobile ? 2 : isTablet ? 2 : 4}>
        {/* Grid 2 - Full width for medium, small, and xs screens */}
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          order={{ xs: 1, sm: 1, md: 1, lg: 2 }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{
              background: "linear-gradient(90deg, #A8FF00 9%, #00BCD4 51%)",
              padding: isMobile ? "10px" : "20px",
              borderRadius: "10px",
            }}
          >
            <Box width="100%">
              <QuestionInput
                fetchDueAndSolvedOnDate={fetchDueAndSolvedOnDate}
                currentDate={currentDate}
              />
              <Box
                display="flex"
                justifyContent="center"
                width="100%"
                bgcolor="orange"
                margin={isMobile ? "10px auto" : "20px auto"}
                borderRadius={5}
                flexWrap="wrap"
              >
                {["Due Today", "Completed Today", "All Questions"].map(
                  (tab, index) => (
                    <Tooltip title={tab} key={index}>
                      <IconButton
                        onClick={() =>
                          setSelectedView(
                            tab === "Due Today"
                              ? "due"
                              : tab === "Completed Today"
                              ? "completed"
                              : "all"
                          )
                        }
                        variant={
                          selectedView ===
                          (tab === "Due Today"
                            ? "due"
                            : tab === "Completed Today"
                            ? "completed"
                            : "all")
                            ? "contained"
                            : "outlined"
                        }
                        sx={{
                          margin: isMobile ? "2px" : "5px",
                          color:
                            selectedView ===
                            (tab === "Due Today"
                              ? "due"
                              : tab === "Completed Today"
                              ? "completed"
                              : "all")
                              ? "primary"
                              : "default",
                        }}
                      >
                        <img
                          src={
                            tab === "Due Today"
                              ? due_today
                              : tab === "Completed Today"
                              ? completed_today
                              : all_questions
                          }
                          alt=""
                          style={{ width: isMobile ? "20px" : "auto" }}
                        />
                      </IconButton>
                    </Tooltip>
                  )
                )}
              </Box>
              <Box width="100%">
                {selectedView === "due" ? (
                  <DueToday />
                ) : selectedView === "completed" ? (
                  <CompletedToday />
                ) : (
                  <AllQuestions />
                )}
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Grid 1 and 3 side by side for medium, small, and xs screens */}
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          lg={3}
          order={{ xs: 2, sm: 2, md: 2, lg: 1 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: isMobile ? "10px" : "20px",
              background: "linear-gradient(90deg, #EA00FF 9%, #D4005A 67%)",
              borderRadius: "10px",
            }}
          >
            <DateSetter
              fetchDueAndSolvedOnDate={fetchDueAndSolvedOnDate}
              sx={{ width: "100%" }}
            />
            <Streak sx={{ width: "100%" }} />
            <Calendar />
          </Box>
        </Grid>

        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          lg={3}
          order={{ xs: 3, sm: 3, md: 3, lg: 3 }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              borderRadius: "10px",
              background: "linear-gradient(90deg, #D40019 8%, #FF5100 61%)",
              padding: isMobile ? "10px" : "20px",
            }}
          >
            <Logout />
            <QuestStats />
            <Stats />
            <Tags pos={isMobile || isTablet ? "left" : "right"} />
            <DifficultyLevel pos={isMobile || isTablet ? "left" : "right"} />
            <Achievements />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
