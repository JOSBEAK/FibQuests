import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      sx={{
        width: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background:
          "linear-gradient(90deg, rgba(162, 0, 212, 1) 24%, rgba(0, 175, 255, 1) 100%)",
        height: 50,
        padding: "10px",
      }}
    >
      <Box display={"flex"} flexGrow={6}>
        <Typography
          variant="h5"
          sx={{ fontSize: "24px", fontWeight: "bold", color: "white" }}
        >
          Fibonacci
        </Typography>
      </Box>
      <Box display={"flex"} flexGrow={1} justifyContent={"space-between"}>
        {["Home", "About", "Contact"].map((item, index) => (
          <Typography key={index} variant="h7" fontWeight={700}>
            <Link
              href="www.facebook.com"
              sx={{
                color: "white",
                textDecoration: "none",

                "&:hover": {
                  textDecoration: "none",
                },
              }}
            >
              {item}
            </Link>
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Navbar;
