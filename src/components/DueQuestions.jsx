import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import Questions from "./Questions";

const DueToday = () => {
  const dueToday = useSelector((state) => state.app.dueToday);

  return (
    <Box>
      <Box display={"flex"} justifyContent={"right"}>
        <Typography variant="h4" fontWeight={700} color={"white"}>
          Questions Due Today:
        </Typography>
      </Box>
      <Box
        overflow={"scroll"}
        minHeight={"410px"}
        maxHeight={"410px"}
        sx={{ scrollbarWidth: "none" }}
      >
        {dueToday.map(({ name, link }, index) => (
          <Questions key={index} name={name} link={link} />
        ))}
      </Box>
    </Box>
  );
};

export default DueToday;
