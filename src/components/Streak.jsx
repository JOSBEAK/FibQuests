import React from "react";
import { Box, Typography } from "@mui/material";

const Streak = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} flexDirection={"column"}>
      <Box
        sx={{
          height: "130px",
          width: "160px",
          display: "flex",
          justifyContent: "center",
          alignItems: "end",

          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
            `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     width="125px" height="130.864px" viewBox="0 0 125 189.864" enable-background="new 0 0 125 140.864" xml:space="preserve">
  <style type="text/css">
    .flame {
      animation: flamefly 2s linear infinite;
      opacity: 1; /* Changed from 0 to 1 */
      transform-origin: 50% 50% 0;
    }
    .flame.one {
      animation-delay: 1s;
      animation-duration: 3s;
    }
    .flame.two {
      animation-duration: 5s;
      animation-delay: 1s;
    }
    .flame-main {
      animation: flameWobble 3s linear infinite;
    }
    .flame-main.one {
      animation-duration: 4s;
      animation-delay: 1s;
    }
    .flame-main.two {
      animation-duration: 3s;
      animation-delay: 2s;
    }
    .flame-main.three {
      animation-duration: 2.1s;
      animation-delay: 3s;
    }
    .flame-main.four {
      animation-duration: 3.2s;
      animation-delay: 4s;
    }
    .flame-main.five {
      animation-duration: 2.5s;
      animation-delay: 5s;
    }
    @keyframes flameWobble {
      50% {
        transform: scale(1,1.2) translate(0, -30px) rotate(-2deg);
      }
    }
    @keyframes flamefly {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
      }
      25% {
        transform: translateY(-20px) rotate(-10deg);
      }
      75% {
        transform: translateY(-10px) rotate(10deg);
      }
    }
  </style>
  
  <path class="flame-main" fill="#F36E21" d="M76.553,186.09c0,0-10.178-2.976-15.325-8.226s-9.278-16.82-9.278-16.82s-0.241-6.647-4.136-18.465
    c0,0,3.357,4.969,5.103,9.938c0,0-5.305-21.086,1.712-30.418c7.017-9.333,0.571-35.654-2.25-37.534c0,0,13.07,5.64,19.875,47.54
    c6.806,41.899,16.831,45.301,6.088,53.985"/>
  <path class="flame-main one" fill="#F6891F" d="M61.693,122.257c4.117-15.4,12.097-14.487-11.589-60.872c0,0,32.016,10.223,52.601,63.123
    c20.585,52.899-19.848,61.045-19.643,61.582c0.206,0.537-19.401-0.269-14.835-18.532S57.576,137.656,61.693,122.257z"/>
  <path class="flame-main two" fill="#FFD04A" d="M81.657,79.192c0,0,11.549,24.845,3.626,40.02c-7.924,15.175-21.126,41.899-0.425,64.998
    C84.858,184.21,125.705,150.905,81.657,79.192z"/>
  <path class="flame-main three" fill="#FDBA16" d="M99.92,101.754c0,0-23.208,47.027-12.043,80.072c0,0,32.741-16.073,20.108-45.79
    C95.354,106.319,99.92,114.108,99.92,101.754z"/>
  <path class="flame-main four" fill="#F36E21" d="M103.143,105.917c0,0,8.927,30.753-1.043,46.868c-9.969,16.115-14.799,29.041-14.799,29.041
    S134.387,164.603,103.143,105.917z"/>
  <path class="flame-main five" fill="#FDBA16" d="M62.049,104.171c0,0-15.645,67.588,10.529,77.655C98.753,191.894,69.033,130.761,62.049,104.171z"/>
  <path class="flame" fill="#F36E21" d="M101.011,112.926c0,0,8.973,10.519,4.556,16.543C99.37,129.735,106.752,117.406,101.011,112.926z"/>
  <path class="flame one" fill="#F36E21" d="M55.592,126.854c0,0-3.819,13.29,2.699,16.945C64.038,141.48,55.907,132.263,55.592,126.854z"/>
  <path class="flame two" fill="#F36E21" d="M54.918,104.595c0,0-3.959,6.109-1.24,8.949C56.93,113.256,52.228,107.329,54.918,104.595z"/>
</svg>`
          )}")`,
        }}
      >
        <Typography variant="h3" fontWeight={900}>
          7
        </Typography>
      </Box>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Typography variant="h5" fontWeight={700} color="white">
          Streak
        </Typography>
      </Box>
      {/* <Box display={"flex"} justifyContent={"center"} margin={"5px 0"}>
        <Box
          sx={{
            position: "relative",
            width: "200px", // Set a fixed width for the container
            height: "200px", // Set a fixed height for the container
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src={FireIcon}
              alt=""
              style={{
                width: "80%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>

          <Typography
            variant="h3"
            fontWeight={900}
            sx={{
              position: "absolute",
              top: "85%", // Adjust this value to move the "7" up or down
              left: "53%",
              transform: "translate(-50%, -50%)",
              color: "#374151",
            }}
          >
            7
          </Typography>
        </Box>
      </Box> */}
    </Box>
  );
};

export default Streak;