import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import React from "react";
const Tags = ({ pos, value, onChange, isMobile, isTablet }) => {
  const Tags = [
    { title: "Array" },
    { title: "String" },
    { title: "Hash Table" },
    { title: "Dynamic Programming" },
    { title: "Math" },
    { title: "Depth-First Search" },
    { title: "Greedy" },
    { title: "Binary Search" },
    { title: "Breadth-First Search" },
    { title: "Tree" },
    { title: "Two Pointers" },
    { title: "Backtracking" },
    { title: "Design" },
    { title: "Graph" },
    { title: "Stack" },
    { title: "Heap" },
    { title: "Bit Manipulation" },
    { title: "Linked List" },
    { title: "Sliding Window" },
    { title: "Union Find" },
    { title: "Divide and Conquer" },
    { title: "Trie" },
    { title: "Segment Tree" },
    { title: "Binary Indexed Tree" },
    { title: "Recursion" },
    { title: "Brainteaser" },
    { title: "Memoization" },
    { title: "Topological Sort" },
    { title: "Monotonic Stack" },
    { title: "Ordered Set" },
    { title: "Interactive" },
    { title: "Game Theory" },
    { title: "Geometry" },
    { title: "Random" },
    { title: "Rejection Sampling" },
    { title: "Probability and Statistics" },
    { title: "Quickselect" },
    { title: "Suffix Array" },
  ];

  return (
    <Box margin={"10px 0"}>
      <Typography fontSize={isMobile ? 14 : 16} fontWeight="600" color="white">
        Tags
      </Typography>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={Tags}
        getOptionLabel={(option) => option.title}
        onChange={onChange}
        value={value}
        defaultValue={[]}
        filterSelectedOptions
        sx={{
          backgroundColor: pos === "right" ? "#374151" : "white",
          borderRadius: "10px",
          "& .MuiAutocomplete-endAdornment": {
            top: "30px",
          },
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              maxWidth: "100%",
              minWidth: 200,
              maxHeight: 56,
              overflow: "scroll",
              backgroundColor: pos === "right" ? "#374151" : "white",
              borderRadius: "10px",
              "& input::placeholder": {
                fontWeight: "700",
                color: pos === "right" ? "#FACC15" : "#A2A2A2",
                opacity: 1,
              },
              "& input": {
                caretColor: pos === "right" ? "#FACC15" : "black",
              },
            }}
            placeholder="Tags"
          />
        )}
      />
    </Box>
  );
};

export default Tags;
