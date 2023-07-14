import React from "react";
import "./contact.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Typography, Grid, Paper, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Contact = () => {
  return (
    <section id="contact">
      <Box p={3}>
        <Typography variant="h6" component="h5">
          Get In Touch
        </Typography>
        <Typography variant="h4" component="h2">
          Contact Me
        </Typography>
        <Box mt={3} />
        {/* <Grid container spacing={3}> */}
        <Grid container flexDirection="column" spacing={3}>
          <Grid item xs={12} sm={4} md={4}>
            <Paper className="paper" sx={{ bgcolor: "blueviolet" }}>
              <Box p={2}>
                <MailOutlineIcon />
                <Typography variant="h6" component="h6" mb={1}>
                  Email
                </Typography>
                <Typography variant="body2" component="p">
                  sunny788999@gmail.com
                </Typography>
                <Link href="sunny788999@gmail.com" underline="none">
                  Send a Message
                </Link>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Paper className="paper" sx={{ bgcolor: "blueviolet" }}>
              <Box p={2}>
                <InstagramIcon />
                <Typography variant="h6" component="h6" mb={1}>
                  Instagram
                </Typography>
                <Typography variant="body2" component="p">
                  sunnypatel_2710
                </Typography>
                <Link href="sunny788999@gmail.com" underline="none">
                  Send a Message
                </Link>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Paper className="paper" sx={{ bgcolor: "blueviolet" }}>
              <Box p={2}>
                <WhatsAppIcon />
                <Typography variant="h6" component="h6" mb={1}>
                  WhatsApp
                </Typography>
                <Typography variant="body2" component="p">
                  88492 03645
                </Typography>
                <Link
                  href="https://api.whatsapp.com/send?phone=+918849203645"
                  underline="none"
                >
                  Send a Message
                </Link>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* </Grid> */}
      </Box>
    </section>
  );
};

export default Contact;
