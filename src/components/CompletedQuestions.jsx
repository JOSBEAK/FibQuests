import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import Questions from "./Questions";

const CompletedToday = () => {
  const solvedToday = useSelector((state) => state.app.solvedToday);
  console.log(solvedToday);
  return (
    <Box>
      <Box display={"flex"} justifyContent={"right"}>
        <Typography variant="h4" fontWeight={700} color={"white"}>
          Completed Today:
        </Typography>
      </Box>
      <Box
        overflow={"scroll"}
        minHeight={"410px"}
        maxHeight={"410px"}
        sx={{ scrollbarWidth: "none" }}
      >
        {solvedToday.map(({ name, link }, index) => (
          <Questions key={index} name={name} link={link} />
        ))}
      </Box>
    </Box>
  );
};

export default CompletedToday;
