import React from "react";
import "./about.css";
import about1 from "../../Image/about1.jpg";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const About = () => {
  return (
    <section id="about">
      <Box p={3}>
        <Typography variant="h6" component="h5">
          Get To Know
        </Typography>
        <Typography variant="h4" component="h2">
          About Me
        </Typography>
        <Box mt={2} />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={4}>
            <Paper className="paper" sx={{ bgcolor: "blueviolet" }}>
              <Box p={2}>
                <Typography variant="h6" component="h6">
                  Experience
                </Typography>
                <WorkspacePremiumIcon />
                <Typography variant="body2" component="p">
                  1.5+ Years Working
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Paper className="paper" sx={{ bgcolor: "blueviolet" }}>
              <Box p={2}>
                <Typography variant="h6" component="h6">
                  Clients
                </Typography>
                <PeopleIcon />
                <Typography variant="body2" component="p">
                  300+ Workwide
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Paper className="paper" sx={{ bgcolor: "blueviolet" }}>
              <Box p={2}>
                <Typography variant="h6" component="h6">
                  Projects
                </Typography>
                <WorkHistoryIcon />
                <Typography variant="body2" component="p">
                  80+ Completed
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Box mt={3} />
        <Typography variant="body1" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui id odio
          pariatur maiores reiciendis in nulla dignissimos? Adipisci sit eius
          repudiandae iusto quibusdam architecto at facere consequuntur aliquid!
          Dolorem, pariatur.
        </Typography>
        <Box mt={2} />
        <Button
          variant="contained"
          sx={{ textTransform: "capitalize", bgcolor: "blueviolet" }}
          className="btn"
        >
          Let's Talk
        </Button>
      </Box>
    </section>
  );
};

export default About;
