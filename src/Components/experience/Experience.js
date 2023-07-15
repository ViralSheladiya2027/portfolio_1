import React from "react";
import "./experience.css";
import { Stack, Typography, Box, IconButton, Grid } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";

const Experience = () => {
  return (
    <section id="experience">
      <Box p={4} >
        <Typography variant="h6" component="h5">
          What Skills I Have
        </Typography>
        <Typography variant="h4" component="h2">
          My Experience
        </Typography>
        <Box mt={2} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ bgcolor: "var(--button-color)" , p: 4, borderRadius: 4 }}>
              <Typography variant="h6">Frontend Development</Typography>
              <Box mb={2} />
              <Stack direction="row" spacing={2}>
                <VerifiedIcon color="primary" />
                <Stack direction="column" spacing={0.1}>
                  <Typography variant="subtitle1">Flutter</Typography>
                  <small>Experience</small>
                </Stack>
                <Box width="40px" />
                <VerifiedIcon />
                <Stack direction="column" spacing={0.1}>
                  <Typography variant="subtitle1">React</Typography>
                  <small>Experience</small>
                </Stack>
              </Stack>
              <Box mb={2} />
              <Stack direction="row" spacing={2}>
                <VerifiedIcon />
                <Stack direction="column" spacing={0.1}>
                  <Typography variant="subtitle1">Flutter</Typography>
                  <small>Experience</small>
                </Stack>
                <Box width="40px" />
                <VerifiedIcon />
                <Stack direction="column" spacing={0.1}>
                  <Typography variant="subtitle1">React</Typography>
                  <small>Experience</small>
                </Stack>
              </Stack>
              <Box mb={2} />
              <Stack direction="row" spacing={2}>
                <VerifiedIcon color="primary" />
                <Stack direction="column" spacing={0.1}>
                  <Typography variant="subtitle1">Flutter</Typography>
                  <small>Experience</small>
                </Stack>
                <Box width="40px" />
                <VerifiedIcon />
                <Stack direction="column" spacing={0.1}>
                  <Typography variant="subtitle1">React</Typography>
                  <small>Experience</small>
                </Stack>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ bgcolor: "var(--button-color)" , p: 4, borderRadius: 4 }}>
              <Typography variant="h6">Backend Development</Typography>
              <Box mb={2} />
              <Stack direction="row" spacing={2}>
                <VerifiedIcon color="primary" />
                <Stack direction="column" spacing={0.1}>
                  <Typography variant="subtitle1">Flutter</Typography>
                  <small>Experience</small>
                </Stack>
                <Box width="40px" />
                <VerifiedIcon />
                <Stack direction="column" spacing={0.1}>
                  <Typography variant="subtitle1">React</Typography>
                  <small>Experience</small>
                </Stack>
              </Stack>
              <Box mb={2} />
              <Stack direction="row" spacing={2}>
                <VerifiedIcon />
                <Stack direction="column" spacing={0.1}>
                  <Typography variant="subtitle1">Flutter</Typography>
                  <small>Experience</small>
                </Stack>
                <Box width="40px" />
                <VerifiedIcon />
                <Stack direction="column" spacing={0.1}>
                  <Typography variant="subtitle1">React</Typography>
                  <small>Experience</small>
                </Stack>
              </Stack>
              <Box mb={2} />
              <Stack direction="row" spacing={2}>
                <VerifiedIcon color="primary" />
                <Stack direction="column" spacing={0.1}>
                  <Typography variant="subtitle1">Flutter</Typography>
                  <small>Experience</small>
                </Stack>
                <Box width="40px" />
                <VerifiedIcon />
                <Stack direction="column" spacing={0.1}>
                  <Typography variant="subtitle1">React</Typography>
                  <small>Experience</small>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default Experience;
