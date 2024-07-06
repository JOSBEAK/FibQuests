import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAllQuestions } from "../redux/store";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import Questions from "./Questions";

const AllQuestions = () => {
  const dispatch = useDispatch();
  const allQuestions = useSelector((state) => state.app.allQuestions);

  useEffect(() => {
    const fetchAllQuestions = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/all_questions");
        dispatch(setAllQuestions(response.data.all_questions));
      } catch (error) {
        console.error("Error fetching all questions:", error);
      }
    };

    fetchAllQuestions();
  }, [dispatch]);

  console.log("heheh", allQuestions);
  return (
    <Box>
      <Box display={"flex"} justifyContent={"right"}>
        <Typography variant="h4" fontWeight={700} color={"white"}>
          All Questions:
        </Typography>
      </Box>
      <Box overflow={"scroll"} minHeight={"410px"} maxHeight={"410px"} sx={{}}>
        {allQuestions.map(
          ({ name, link, description, tags, difficulty }, index) => (
            <Questions
              key={index}
              name={name}
              link={difficulty}
              checked={true}
            />
          )
        )}
      </Box>
    </Box>
  );
};

export default AllQuestions;
