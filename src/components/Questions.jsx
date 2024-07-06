import { Box, Checkbox, Link, Typography } from "@mui/material";
import React from "react";

const Questions = ({ name, link, desc, tags, difficulty, checked }) => {
  return (
    <Box
      borderRadius={2}
      width={"auto"}
      bgcolor={"#374151"}
      margin={"5px auto"}
      display={"flex"}
      justifyContent={"left"}
      alignItems={"center"}
      padding={"20px 5px"}
    >
      {checked === true ? (
        <Checkbox checked={true} />
      ) : (
        <Checkbox sx={{ color: "#FACC15" }} />
      )}

      <Box display={"flex"} flexDirection={"column"}>
        <Link
          href={link}
          sx={{
            color: "#FACC15",
            textDecoration: "none",
            fontWeight: "bold",
            "&:hover": {
              textDecoration: "none",
            },
          }}
        >
          {name}
        </Link>
        <Typography color={"white"}>{link}</Typography>
        {/* <Typography>{desc}</Typography> */}
      </Box>
    </Box>
  );
};

export default Questions;
