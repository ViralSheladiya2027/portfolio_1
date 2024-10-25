import React from "react";
import "./contact.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Link,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_c90qo2e",
      "template_unr1y5a",
      form.current,
      "bukqwSC8MjI4pAWS5"
    );

    e.target.reset();
  };
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

        <Grid container p={1} spacing={1}>
          <Grid item xs={12} md={4}>
            <Grid item xs={12} md={6} p={1} ml={2}>
              <Paper
                className="paper"
                sx={{
                  bgcolor: "var(--button-color)",
                  color: "var(--paper-color)",
                }}
              >
                <Box p={2}>
                  <MailOutlineIcon />
                  <Typography variant="h6" component="h6" mb={1}>
                    Email
                  </Typography>
                  <Typography variant="body2" component="p">
                    sunny788999@gmail.com
                  </Typography>
                  <Link href="mailto:sunny788999@gmail.com" underline="none">
                    Send a Message
                  </Link>
                </Box>
              </Paper>
            </Grid>
            <Grid itemxs={12} md={6} p={1} ml={2}>
              <Paper
                className="paper"
                sx={{
                  bgcolor: "var(--button-color)",
                  color: "var(--paper-color)",
                }}
              >
                <Box p={2}>
                  <InstagramIcon />
                  <Typography variant="h6" component="h6" mb={1}>
                    Instagram
                  </Typography>
                  <Typography variant="body2" component="p">
                    sunnypatel_2710
                  </Typography>
                  <Link
                    href="https://www.instagram.com/sunnypatel_2710"
                    underline="none"
                  >
                    Send a Message
                  </Link>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} p={1} ml={2}>
              <Paper
                className="paper"
                sx={{
                  bgcolor: "var(--button-color)",
                  color: "var(--paper-color)",
                }}
              >
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
          <Grid item xs={12} md={6}>
            <Stack
              component="form"
              spacing={2}
              autoComplete="off"
              ref={form}
              onSubmit={sendEmail}
            >
              <TextField
                name="name"
                label="Your Full Name"
                size="small"
                focused
                type="text"
                sx={{
                  input: { color: "white" },
                  label: {
                    color: "#ffffff",
                  },
                  // border:"1px solid white"
                }}
                required
              />

              <TextField
                name="email"
                label="Your Email"
                focused
                size="small"
                type="email"
                sx={{
                  input: { color: "white" },
                  label: {
                    color: "#ffffff",
                  },
                }}
                required
              />
              <TextField
                name="Message"
                label="Your Message"
                focused
                rows= "4"
                size="small"
                type="email"
                sx={{
                  input: { color: "white" },
                  label: {
                    color: "#ffffff",
                  },
                }}
                required
              />
              <Button
                variant="contained"
                type="submit"
                sx={{
                  textTransform: "capitalize",
                  width: 175,
                  bgcolor: "var(--button-color)",
                  mb: 5,
                }}
                className="btn"
              >
                Send Message
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default Contact;
