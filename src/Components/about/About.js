import React from "react";
import "./about.css";
import about1 from "../../Image/about1.jpg";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const About = () => {
  return (
    <section>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <Box height="2rem" />
      <Stack direction="row" spacing={5}>
        <Grid xs={4}>
        <div className="about" >
          <img src={about1} alt="about" />
        </div>
        </Grid>
        <Stack direction="column" spacing={2}>
          
           <Grid xs={8}  >
          <Typography >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui id odio
            pariatur maiores reiciendis in nulla dignissimos? Adipisci sit eius
            repudiandae iusto quibusdam architecto at facere consequuntur
            aliquid! Dolorem, pariatur.
          </Typography>
          <Button
            style={{ textTransform: "capitalize", width: "30%" }}
            className="btn"
            variant="contained"
          >
            Let's Talk
          </Button>
          </Grid>
       
        </Stack>
      
      </Stack>
      <Box
            sx={{
              display: "flex",
              "& > :not(style)": {
                m: 1,
                width: 138,
                height: 138,
              },
            }}
          >
            <Paper variant="outlined">
              <Stack direction="column" spacing={1}>
                <IconButton aria-label="delete" disabled>
                  <WorkspacePremiumIcon />
                </IconButton>
                <Typography variant="h6">Experience</Typography>
                <Typography variant="caption">1.5+ Years Working</Typography>
              </Stack>
            </Paper>
            <Paper variant="outlined">
              {" "}
              <Stack direction="column" spacing={1}>
                <IconButton aria-label="delete" disabled>
                  <PeopleIcon />
                </IconButton>
                <Typography variant="h6">Clients</Typography>
                <Typography variant="caption">300+ Workwide</Typography>
              </Stack>
            </Paper>
            <Paper variant="outlined">
              {" "}
              <Stack direction="column" spacing={1}>
                <IconButton aria-label="delete" disabled>
                  <WorkHistoryIcon />
                </IconButton>
                <Typography variant="h6">Projects</Typography>
                <Typography variant="caption">80+ Completed</Typography>
              </Stack>
            </Paper>
          </Box>
    </section>
  );
};

export default About;
