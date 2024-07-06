import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setLink,
  setQuestionName,
  setQuestionDescription,
  setQuestionDifficulty,
  setQuestionTags,
} from "../redux/store";
import {
  Box,
  TextField,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import axios from "axios";
import Tags from "./Tags";
import DifficultyLevel from "./Difficulty";

const QuestionInput = ({ fetchDueAndSolvedOnDate, currentDate }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const questionName = useSelector((state) => state.app.questionName);
  const questionDescription = useSelector(
    (state) => state.app.questionDescription
  );
  const questionTags = useSelector((state) => state.app.questionTags);
  const questionDifficulty = useSelector(
    (state) => state.app.questionDifficulty
  );
  const link = useSelector((state) => state.app.link);

  const [selectedTags, setSelectedTags] = React.useState([]);
  const [difficulty, setDifficulty] = React.useState([]);

  const handleTagsChange = (event, values) => {
    setSelectedTags(values);
    dispatch(setQuestionTags(values.map((tag) => tag.title)));
  };

  const handleDifficultyChange = (event, value) => {
    setDifficulty(value);
    dispatch(setQuestionDifficulty(value));
  };

  const addQuestion = async () => {
    try {
      await axios.post("http://127.0.0.1:5000/add_question", {
        link,
        question_name: questionName,
        description: questionDescription,
        tags: questionTags,
        difficulty: questionDifficulty,
      });
      dispatch(setLink(""));
      dispatch(setQuestionName(""));
      dispatch(setQuestionDescription(""));
      dispatch(setQuestionTags([]));
      dispatch(setQuestionDifficulty(""));
      setSelectedTags([]);
      setDifficulty("");
      fetchDueAndSolvedOnDate(currentDate);
    } catch (error) {
      console.error("Error adding question:", error);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      bgcolor="#374151"
      padding={isMobile ? 2 : 5}
      borderRadius={2}
    >
      <Typography
        fontSize={isMobile ? 18 : 20}
        fontWeight={700}
        color="#FACC15"
      >
        Add New Question
      </Typography>
      <Box margin={isMobile ? "5px 0" : "10px 0"}>
        <Typography
          fontSize={isMobile ? 14 : 16}
          fontWeight="600"
          color="white"
        >
          Question Name
        </Typography>
        <TextField
          placeholder="Enter question Name"
          value={questionName}
          onChange={(e) => dispatch(setQuestionName(e.target.value))}
          fullWidth
          sx={{
            bgcolor: "white",
            borderRadius: "10px",
            fontWeight: "600",
            "& input::placeholder": { fontWeight: "700" },
          }}
        />
      </Box>
      <Box margin={isMobile ? "5px 0" : "10px 0"}>
        <Typography
          fontSize={isMobile ? 14 : 16}
          fontWeight="600"
          color="white"
        >
          Question Link
        </Typography>
        <TextField
          placeholder="Enter question link"
          value={link}
          onChange={(e) => dispatch(setLink(e.target.value))}
          fullWidth
          sx={{
            bgcolor: "white",
            borderRadius: "10px",
            "& input::placeholder": { fontWeight: "700" },
          }}
        />
      </Box>
      <Box margin={isMobile ? "5px 0" : "10px 0"}>
        <Typography
          fontSize={isMobile ? 14 : 16}
          fontWeight="600"
          color="white"
        >
          Question Descr.
        </Typography>
        <TextField
          placeholder="Enter question Descr. (optional)"
          value={questionDescription}
          onChange={(e) => dispatch(setQuestionDescription(e.target.value))}
          fullWidth
          sx={{
            bgcolor: "white",
            borderRadius: "10px",
            "& input::placeholder": { fontWeight: "700" },
          }}
        />
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        flexDirection={isMobile || isTablet ? "column" : "row"}
        margin={isMobile ? "5px 0" : "10px 0"}
        justifyContent="space-between"
        width={isMobile ? "100%" : "80%"}
      >
        <Tags
          pos={isMobile ? "left" : "center"}
          value={selectedTags}
          isMobile={isMobile}
          isTablet={isTablet}
          onChange={handleTagsChange}
        />

        <DifficultyLevel
          pos={isMobile ? "left" : "center"}
          value={difficulty}
          isMobile={isMobile}
          isTablet={isTablet}
          onChange={handleDifficultyChange}
        />
      </Box>
      <Box marginTop={isMobile ? 2 : 0}>
        <Button
          sx={{
            backgroundColor: "#FACC15",
            padding: isMobile ? "6px 12px" : "8px 16px",
          }}
          onClick={addQuestion}
        >
          <Typography
            sx={{
              color: "#000",
              fontWeight: "700",
              textTransform: "none",
              fontSize: isMobile ? 14 : 16,
            }}
          >
            Add Question
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default QuestionInput;
