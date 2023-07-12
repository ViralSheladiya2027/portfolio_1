import React from 'react'
import { Button, Stack } from "@mui/material";
import CV from "../../Image/CV.pdf";
import "./header.css";

const Headerbutton = () => {
  return (
    <div className='headerbutton_container'>
         <Stack spacing={2} direction="row">
          <Button className="btn" download style={{ textTransform: "capitalize"}} type="text" variant="outlined" href={CV}>
            Download CV
          </Button>
          <Button style={{ textTransform: "capitalize"}} className="btn" variant="contained">Let's Talk</Button>
        </Stack>
    </div>
  )
}

export default Headerbutton