import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import React from "react";

const DifficultyLevel = ({ pos, value, onChange, isMobile, isTablet }) => {
  const Difficulty = ["Easy", "Medium", "Hard"];

  return (
    <Box margin={"10px 0"}>
      <Typography fontSize={isMobile ? 14 : 16} fontWeight="600" color="white">
        Difficulty
      </Typography>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={Difficulty}
        value={value}
        onChange={onChange} // Call handleDifficultyChange on selection change
        sx={{
          minWidth: 160,
          backgroundColor: pos === "right" ? "#374151" : "white",
          borderRadius: "10px",
          fontWeight: "700",
          color: pos === "right" ? "#FACC15" : "#000",
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              minWidth: 160,
              backgroundColor: pos === "right" ? "#374151" : "white",
              borderRadius: "10px",
              color: pos === "right" ? "#FACC15" : "#000",
              "& input::placeholder": {
                fontWeight: "700",
                color: pos === "right" ? "#FACC15" : "#A2A2A2",
                opacity: 1,
              },
              "& input": {
                caretColor: pos === "right" ? "#FACC15" : "black",
              },
            }}
            placeholder="Difficulty"
          />
        )}
      />
    </Box>
  );
};

export default DifficultyLevel;
