import React from "react";
import { Box, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/clem-onojeghuo-n6gnCa77Urc-unsplash.jpg";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#5580A1" fontWeight="600" fontSize="50px">
        Fitness Club
      </Typography>
      <Typography fontWeight={700}
      sx={{ fontSize: {lg: "44px", xs: "40px" }}}
      mb="23px" mt="20px"
      >
        Sweat, Smile, <br/> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button variant="contained" color="error" href="#exercises"
        sx={{
            backgroundColor: "#5580A1",
            padding: "10px"
        }}
      >
        Explore Exercises
      </Button>
      <Typography fontWeight={600} color="#5580A1"
        sx={{
            opacity: "0.1",
            display: {lg: "block"}
        }}
        fontSize="200px"
      >
        Exercises
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img"
        style={{ borderRadius: "10%"}}
      />
    </Box>
  );
};

export default HeroBanner;
