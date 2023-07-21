import {
  Box,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box sx={{ bgcolor: "blueviolet", height: "60vh" }}>
        <Typography align="center"variant="h5" gutterBottom p={2}>
          EGATOR
        </Typography>
        {/* <Stack spacing={2}> */}
        <List  sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            // padding: 0,
          }}
        >
        
          <ListItem>
            <ListItemButton  href="#">Home</ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton href="#about">About</ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton href="#experience">Experience</ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton href="#service">Service</ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton href="#contact">Contact</ListItemButton>
          </ListItem>
          {/* </Box> */}
        </List>
        {/* </Stack> */}
      </Box>
    </>
  );
};

export default Footer;
