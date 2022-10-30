import React from 'react';
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/gym.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#6995b8">
      <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
        <img src={Logo} alt="logo" style={{ width: '60px', height: '60px' }}/>
        <Typography variant="h5" pb="40px">Designed by Sarah Swendseid</Typography>
      </Stack>
    </Box>
  )
}

export default Footer