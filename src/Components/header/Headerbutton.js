import React from "react";
import { Button, Stack } from "@mui/material";
import CV from "../../Image/CV.pdf";
import "./header.css";

const Headerbutton = () => {
  return (
    <section className="headerbutton_container">
      <Stack spacing={2} direction="row">
        <Button
          className="btn"
          download
          sx={{ textTransform: "capitalize", color: "blueviolet" }}
          type="text"
          variant="outlined"
          href={CV}
        >
          Download CV
        </Button>
        <Button
          sx={{ textTransform: "capitalize", bgcolor: "blueviolet" }}
          href="#contact"
          className="btn"
          variant="contained"
        >
          Let's Talk
        </Button>
      </Stack>
    </section>
  );
};

export default Headerbutton;
