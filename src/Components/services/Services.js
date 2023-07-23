import React from "react";
import "./services.css";
import { Box, Typography, Grid, Paper } from "@mui/material";
import TransformIcon from "@mui/icons-material/Transform";
import AppleIcon from "@mui/icons-material/Apple";
import CodeOffIcon from "@mui/icons-material/CodeOff";

const Services = () => {
  return (
    <section id="service">
      <Box p={3}>
        <Typography variant="h6" component="h5">
          What I Offer
        </Typography>
        <Typography variant="h4" component="h2">
          Services
        </Typography>
        <Box mt={2} />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={4}>
            <Paper className="paper" sx={{ bgcolor: "var(--experience-color)",color:"var(--paper-color)" }}>
              <Box p={2} textAlign="left">
                <CodeOffIcon />
                <Typography variant="h6" component="h6" mb={1}>
                  UI/UX Design
                </Typography>
                <Typography variant="body2" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
                  quibusdam aperiam mollitia repellat assumenda voluptas
                  recusandae. Est,
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Paper className="paper" sx={{ bgcolor: "var(--experience-color)",color:"var(--paper-color)" }}>
              <Box p={2} textAlign="left">
                <TransformIcon />
                <Typography variant="h6" component="h6" mb={1}>
                  App Devlopment
                </Typography>
                <Typography variant="body2" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis natus velit quae? Fugit placeat commodi sapiente
                  libero, odit aspernatur nostrum?
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Paper className="paper" sx={{ bgcolor: "var(--experience-color)" ,color:"var(--paper-color)"}}>
              <Box p={2} textAlign="left">
                <AppleIcon />
                <Typography variant="h6" component="h6" mb={1}>
                  Content Creation
                </Typography>
                <Typography variant="body2" component="p">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis iste, distinctio molestiae dicta quas
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default Services;
